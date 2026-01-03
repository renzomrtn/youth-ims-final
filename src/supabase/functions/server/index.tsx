import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import { hashPassword, verifyPassword, generateSessionToken } from "./auth-utils.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// ============================================
// AUTO-INITIALIZE DEFAULT USERS ON STARTUP
// ============================================
async function initializeDefaultUsers() {
  console.log("Checking if default users exist...");
  
  const defaultUsers = [
    {
      username: 'skf_secretary',
      password: 'password123',
      role: 'SKF Secretary',
      fullName: 'SKF Secretary',
    },
    {
      username: 'skf_treasurer',
      password: 'password123',
      role: 'SKF Treasurer',
      fullName: 'SKF Treasurer',
    },
    {
      username: 'skf_auditor',
      password: 'password123',
      role: 'SKF Auditor',
      fullName: 'SKF Auditor',
    },
    {
      username: 'skf_president',
      password: 'password123',
      role: 'SKF President',
      fullName: 'SKF President',
    },
  ];

  for (const userData of defaultUsers) {
    try {
      const existingUser = await kv.get(`user:${userData.username}`);
      
      if (!existingUser) {
        const passwordHash = await hashPassword(userData.password);
        const user = {
          username: userData.username,
          passwordHash,
          role: userData.role,
          fullName: userData.fullName,
          createdAt: new Date().toISOString(),
        };
        
        await kv.set(`user:${userData.username}`, user);
        console.log(`✓ Created default user: ${userData.username}`);
      } else {
        console.log(`✓ User already exists: ${userData.username}`);
      }
    } catch (error) {
      console.error(`Error creating user ${userData.username}:`, error);
    }
  }
  
  console.log("Default users initialization complete!");
}

// Initialize default users on startup
initializeDefaultUsers().catch(console.error);

// Health check endpoint
app.get("/make-server-0521b783/health", (c) => {
  return c.json({ status: "ok" });
});

// Debug endpoint to check if database is initialized
app.get("/make-server-0521b783/debug/check-users", async (c) => {
  try {
    const users = await kv.getByPrefix("user:");
    return c.json({ 
      initialized: users.length > 0,
      userCount: users.length,
      usernames: users.map((u: any) => u.username)
    });
  } catch (error) {
    console.error("Error checking users:", error);
    return c.json({ error: "Failed to check users" }, 500);
  }
});

// ============================================
// AUTHENTICATION ENDPOINTS
// ============================================

// Login endpoint
app.post("/make-server-0521b783/auth/login", async (c) => {
  try {
    const { username, password } = await c.req.json();
    
    console.log(`Login attempt for username: ${username}`);
    
    if (!username || !password) {
      return c.json({ error: "Username and password are required" }, 400);
    }

    // Get user from database
    const user = await kv.get(`user:${username}`);
    
    if (!user) {
      console.log(`User not found in database: ${username}`);
      return c.json({ error: "Invalid username or password" }, 401);
    }

    console.log(`User found: ${username}, verifying password...`);

    // Verify password
    const isValidPassword = await verifyPassword(password, user.passwordHash);
    
    if (!isValidPassword) {
      console.log(`Password verification failed for user: ${username}`);
      return c.json({ error: "Invalid username or password" }, 401);
    }

    console.log(`Password verified successfully for user: ${username}`);

    // Generate session token
    const sessionToken = generateSessionToken();
    const session = {
      token: sessionToken,
      username: user.username,
      createdAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 24 hours
    };

    // Store session
    await kv.set(`session:${sessionToken}`, session);

    console.log(`Login successful for user: ${username}`);

    // Return user data without password
    return c.json({
      user: {
        username: user.username,
        role: user.role,
        fullName: user.fullName,
      },
      sessionToken,
    });
  } catch (error) {
    console.error("Login error:", error);
    return c.json({ error: "Login failed" }, 500);
  }
});

// Logout endpoint
app.post("/make-server-0521b783/auth/logout", async (c) => {
  try {
    const authHeader = c.req.header("Authorization");
    const token = authHeader?.replace("Bearer ", "");

    if (token) {
      await kv.del(`session:${token}`);
    }

    return c.json({ success: true });
  } catch (error) {
    console.error("Logout error:", error);
    return c.json({ error: "Logout failed" }, 500);
  }
});

// Verify session endpoint
app.get("/make-server-0521b783/auth/verify", async (c) => {
  try {
    const authHeader = c.req.header("Authorization");
    const token = authHeader?.replace("Bearer ", "");

    if (!token) {
      return c.json({ error: "No token provided" }, 401);
    }

    const session = await kv.get(`session:${token}`);

    if (!session) {
      return c.json({ error: "Invalid session" }, 401);
    }

    // Check if session expired
    if (new Date(session.expiresAt) < new Date()) {
      await kv.del(`session:${token}`);
      return c.json({ error: "Session expired" }, 401);
    }

    // Get user data
    const user = await kv.get(`user:${session.username}`);

    if (!user) {
      return c.json({ error: "User not found" }, 404);
    }

    return c.json({
      user: {
        username: user.username,
        role: user.role,
        fullName: user.fullName,
      },
    });
  } catch (error) {
    console.error("Session verification error:", error);
    return c.json({ error: "Verification failed" }, 500);
  }
});

// Get all users (admin only - can add role check later)
app.get("/make-server-0521b783/auth/users", async (c) => {
  try {
    const users = await kv.getByPrefix("user:");
    // Remove password hashes from response
    const sanitizedUsers = users.map((user: any) => ({
      username: user.username,
      role: user.role,
      fullName: user.fullName,
      createdAt: user.createdAt,
    }));
    return c.json(sanitizedUsers);
  } catch (error) {
    console.error("Error fetching users:", error);
    return c.json({ error: "Failed to fetch users" }, 500);
  }
});

// Create new user
app.post("/make-server-0521b783/auth/users", async (c) => {
  try {
    const { username, password, role, fullName } = await c.req.json();

    if (!username || !password || !role || !fullName) {
      return c.json({ error: "All fields are required" }, 400);
    }

    // Check if user already exists
    const existingUser = await kv.get(`user:${username}`);
    if (existingUser) {
      return c.json({ error: "Username already exists" }, 409);
    }

    // Hash password
    const passwordHash = await hashPassword(password);

    const user = {
      username,
      passwordHash,
      role,
      fullName,
      createdAt: new Date().toISOString(),
    };

    await kv.set(`user:${username}`, user);

    return c.json({
      username: user.username,
      role: user.role,
      fullName: user.fullName,
      createdAt: user.createdAt,
    }, 201);
  } catch (error) {
    console.error("Error creating user:", error);
    return c.json({ error: "Failed to create user" }, 500);
  }
});

// Update user
app.put("/make-server-0521b783/auth/users/:username", async (c) => {
  try {
    const username = c.req.param("username");
    const { password, role, fullName } = await c.req.json();

    const user = await kv.get(`user:${username}`);
    if (!user) {
      return c.json({ error: "User not found" }, 404);
    }

    // Update fields
    if (password) {
      user.passwordHash = await hashPassword(password);
    }
    if (role) {
      user.role = role;
    }
    if (fullName) {
      user.fullName = fullName;
    }

    user.updatedAt = new Date().toISOString();

    await kv.set(`user:${username}`, user);

    return c.json({
      username: user.username,
      role: user.role,
      fullName: user.fullName,
      updatedAt: user.updatedAt,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    return c.json({ error: "Failed to update user" }, 500);
  }
});

// Delete user
app.delete("/make-server-0521b783/auth/users/:username", async (c) => {
  try {
    const username = c.req.param("username");
    await kv.del(`user:${username}`);
    return c.json({ success: true });
  } catch (error) {
    console.error("Error deleting user:", error);
    return c.json({ error: "Failed to delete user" }, 500);
  }
});

// ============================================
// PROJECTS ENDPOINTS
// ============================================

// Get all projects
app.get("/make-server-0521b783/projects", async (c) => {
  try {
    const projects = await kv.getByPrefix("project:");
    return c.json(projects || []);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return c.json({ error: "Failed to fetch projects" }, 500);
  }
});

// Get project by ID
app.get("/make-server-0521b783/projects/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const project = await kv.get(`project:${id}`);
    if (!project) {
      return c.json({ error: "Project not found" }, 404);
    }
    return c.json(project);
  } catch (error) {
    console.error("Error fetching project:", error);
    return c.json({ error: "Failed to fetch project" }, 500);
  }
});

// Create project
app.post("/make-server-0521b783/projects", async (c) => {
  try {
    const data = await c.req.json();
    const id = data.id || crypto.randomUUID();
    const project = { ...data, id, createdAt: new Date().toISOString() };
    await kv.set(`project:${id}`, project);
    return c.json(project, 201);
  } catch (error) {
    console.error("Error creating project:", error);
    return c.json({ error: "Failed to create project" }, 500);
  }
});

// Update project
app.put("/make-server-0521b783/projects/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const data = await c.req.json();
    const existing = await kv.get(`project:${id}`);
    if (!existing) {
      return c.json({ error: "Project not found" }, 404);
    }
    const updated = { ...existing, ...data, updatedAt: new Date().toISOString() };
    await kv.set(`project:${id}`, updated);
    return c.json(updated);
  } catch (error) {
    console.error("Error updating project:", error);
    return c.json({ error: "Failed to update project" }, 500);
  }
});

// Delete project
app.delete("/make-server-0521b783/projects/:id", async (c) => {
  try {
    const id = c.req.param("id");
    await kv.del(`project:${id}`);
    return c.json({ success: true });
  } catch (error) {
    console.error("Error deleting project:", error);
    return c.json({ error: "Failed to delete project" }, 500);
  }
});

// Get tasks for a project committee
app.get("/make-server-0521b783/projects/:projectId/committees/:committeeId/tasks", async (c) => {
  try {
    const projectId = c.req.param("projectId");
    const committeeId = c.req.param("committeeId");
    const tasks = await kv.getByPrefix(`task:${projectId}:${committeeId}:`);
    return c.json(tasks || []);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return c.json({ error: "Failed to fetch tasks" }, 500);
  }
});

// Create task
app.post("/make-server-0521b783/projects/:projectId/committees/:committeeId/tasks", async (c) => {
  try {
    const projectId = c.req.param("projectId");
    const committeeId = c.req.param("committeeId");
    const data = await c.req.json();
    const id = data.id || crypto.randomUUID();
    const task = { ...data, id, projectId, committeeId, createdAt: new Date().toISOString() };
    await kv.set(`task:${projectId}:${committeeId}:${id}`, task);
    return c.json(task, 201);
  } catch (error) {
    console.error("Error creating task:", error);
    return c.json({ error: "Failed to create task" }, 500);
  }
});

// Update task
app.put("/make-server-0521b783/projects/:projectId/committees/:committeeId/tasks/:id", async (c) => {
  try {
    const projectId = c.req.param("projectId");
    const committeeId = c.req.param("committeeId");
    const id = c.req.param("id");
    const data = await c.req.json();
    const existing = await kv.get(`task:${projectId}:${committeeId}:${id}`);
    if (!existing) {
      return c.json({ error: "Task not found" }, 404);
    }
    const updated = { ...existing, ...data, updatedAt: new Date().toISOString() };
    await kv.set(`task:${projectId}:${committeeId}:${id}`, updated);
    return c.json(updated);
  } catch (error) {
    console.error("Error updating task:", error);
    return c.json({ error: "Failed to update task" }, 500);
  }
});

// Delete task
app.delete("/make-server-0521b783/projects/:projectId/committees/:committeeId/tasks/:id", async (c) => {
  try {
    const projectId = c.req.param("projectId");
    const committeeId = c.req.param("committeeId");
    const id = c.req.param("id");
    await kv.del(`task:${projectId}:${committeeId}:${id}`);
    return c.json({ success: true });
  } catch (error) {
    console.error("Error deleting task:", error);
    return c.json({ error: "Failed to delete task" }, 500);
  }
});

// Calculate and update project progress
app.post("/make-server-0521b783/projects/:projectId/update-progress", async (c) => {
  try {
    const projectId = c.req.param("projectId");
    
    // Get the project
    const project = await kv.get(`project:${projectId}`);
    if (!project) {
      return c.json({ error: "Project not found" }, 404);
    }
    
    // Get all tasks for all committees
    const allTasks = await kv.getByPrefix(`task:${projectId}:`);
    
    if (allTasks.length === 0) {
      // No tasks yet, set progress to 0
      project.progress = 0;
      project.status = "Pending";
      await kv.set(`project:${projectId}`, project);
      return c.json(project);
    }
    
    // Calculate progress: (tasks in "done" / total tasks) * 100
    const doneTasks = allTasks.filter((task: any) => task.columnId === "done");
    const progress = Math.round((doneTasks.length / allTasks.length) * 100);
    
    // Update project
    project.progress = progress;
    
    // Update status based on progress
    if (progress === 100) {
      project.status = "Completed";
      project.accomplished = new Date().toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
      });
    } else if (progress > 0) {
      project.status = "In Progress";
    } else {
      project.status = "Pending";
    }
    
    await kv.set(`project:${projectId}`, project);
    
    return c.json(project);
  } catch (error) {
    console.error("Error updating project progress:", error);
    return c.json({ error: "Failed to update progress" }, 500);
  }
});

// ============================================
// BUDGET ENDPOINTS
// ============================================

// Get all line items
app.get("/make-server-0521b783/budget/line-items", async (c) => {
  try {
    const items = await kv.getByPrefix("lineitem:");
    return c.json(items || []);
  } catch (error) {
    console.error("Error fetching line items:", error);
    return c.json({ error: "Failed to fetch line items" }, 500);
  }
});

// Create line item
app.post("/make-server-0521b783/budget/line-items", async (c) => {
  try {
    const data = await c.req.json();
    const id = data.id || crypto.randomUUID();
    const item = { ...data, id, createdAt: new Date().toISOString() };
    await kv.set(`lineitem:${id}`, item);
    return c.json(item, 201);
  } catch (error) {
    console.error("Error creating line item:", error);
    return c.json({ error: "Failed to create line item" }, 500);
  }
});

// Update line item
app.put("/make-server-0521b783/budget/line-items/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const data = await c.req.json();
    const existing = await kv.get(`lineitem:${id}`);
    if (!existing) {
      return c.json({ error: "Line item not found" }, 404);
    }
    const updated = { ...existing, ...data, updatedAt: new Date().toISOString() };
    await kv.set(`lineitem:${id}`, updated);
    return c.json(updated);
  } catch (error) {
    console.error("Error updating line item:", error);
    return c.json({ error: "Failed to update line item" }, 500);
  }
});

// Delete line item
app.delete("/make-server-0521b783/budget/line-items/:id", async (c) => {
  try {
    const id = c.req.param("id");
    await kv.del(`lineitem:${id}`);
    return c.json({ success: true });
  } catch (error) {
    console.error("Error deleting line item:", error);
    return c.json({ error: "Failed to delete line item" }, 500);
  }
});

// Get all funds
app.get("/make-server-0521b783/budget/funds", async (c) => {
  try {
    const funds = await kv.getByPrefix("fund:");
    return c.json(funds || []);
  } catch (error) {
    console.error("Error fetching funds:", error);
    return c.json({ error: "Failed to fetch funds" }, 500);
  }
});

// Create fund
app.post("/make-server-0521b783/budget/funds", async (c) => {
  try {
    const data = await c.req.json();
    const id = data.id || crypto.randomUUID();
    const fund = { ...data, id, createdAt: new Date().toISOString() };
    await kv.set(`fund:${id}`, fund);
    return c.json(fund, 201);
  } catch (error) {
    console.error("Error creating fund:", error);
    return c.json({ error: "Failed to create fund" }, 500);
  }
});

// ============================================
// EXPENSE VERIFICATION ENDPOINTS
// ============================================

// Get all expenses
app.get("/make-server-0521b783/expenses", async (c) => {
  try {
    const expenses = await kv.getByPrefix("expense:");
    return c.json(expenses || []);
  } catch (error) {
    console.error("Error fetching expenses:", error);
    return c.json({ error: "Failed to fetch expenses" }, 500);
  }
});

// Get expense by ID
app.get("/make-server-0521b783/expenses/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const expense = await kv.get(`expense:${id}`);
    if (!expense) {
      return c.json({ error: "Expense not found" }, 404);
    }
    return c.json(expense);
  } catch (error) {
    console.error("Error fetching expense:", error);
    return c.json({ error: "Failed to fetch expense" }, 500);
  }
});

// Create expense
app.post("/make-server-0521b783/expenses", async (c) => {
  try {
    const data = await c.req.json();
    const id = data.id || crypto.randomUUID();
    const expense = { ...data, id, createdAt: new Date().toISOString() };
    await kv.set(`expense:${id}`, expense);
    return c.json(expense, 201);
  } catch (error) {
    console.error("Error creating expense:", error);
    return c.json({ error: "Failed to create expense" }, 500);
  }
});

// Update expense
app.put("/make-server-0521b783/expenses/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const data = await c.req.json();
    const existing = await kv.get(`expense:${id}`);
    if (!existing) {
      return c.json({ error: "Expense not found" }, 404);
    }
    const updated = { ...existing, ...data, updatedAt: new Date().toISOString() };
    await kv.set(`expense:${id}`, updated);
    return c.json(updated);
  } catch (error) {
    console.error("Error updating expense:", error);
    return c.json({ error: "Failed to update expense" }, 500);
  }
});

// Verify expense
app.post("/make-server-0521b783/expenses/:id/verify", async (c) => {
  try {
    const id = c.req.param("id");
    const data = await c.req.json();
    const expense = await kv.get(`expense:${id}`);
    if (!expense) {
      return c.json({ error: "Expense not found" }, 404);
    }
    const updated = {
      ...expense,
      status: "Verified",
      verifiedBy: data.verifiedBy,
      verifiedAt: new Date().toISOString(),
      remarks: data.remarks,
    };
    await kv.set(`expense:${id}`, updated);
    return c.json(updated);
  } catch (error) {
    console.error("Error verifying expense:", error);
    return c.json({ error: "Failed to verify expense" }, 500);
  }
});

// Flag expense
app.post("/make-server-0521b783/expenses/:id/flag", async (c) => {
  try {
    const id = c.req.param("id");
    const data = await c.req.json();
    const expense = await kv.get(`expense:${id}`);
    if (!expense) {
      return c.json({ error: "Expense not found" }, 404);
    }
    const updated = {
      ...expense,
      status: "Flagged",
      flagReason: data.reason,
      flaggedBy: data.flaggedBy,
      flaggedAt: new Date().toISOString(),
    };
    await kv.set(`expense:${id}`, updated);
    return c.json(updated);
  } catch (error) {
    console.error("Error flagging expense:", error);
    return c.json({ error: "Failed to flag expense" }, 500);
  }
});

// ============================================
// ARCHIVES ENDPOINTS
// ============================================

// Get all archive categories
app.get("/make-server-0521b783/archives/categories", async (c) => {
  try {
    const categories = await kv.getByPrefix("archive_category:");
    return c.json(categories || []);
  } catch (error) {
    console.error("Error fetching archive categories:", error);
    return c.json({ error: "Failed to fetch categories" }, 500);
  }
});

// Create archive category
app.post("/make-server-0521b783/archives/categories", async (c) => {
  try {
    const data = await c.req.json();
    const id = data.id || crypto.randomUUID();
    const category = { ...data, id, createdAt: new Date().toISOString() };
    await kv.set(`archive_category:${id}`, category);
    return c.json(category, 201);
  } catch (error) {
    console.error("Error creating archive category:", error);
    return c.json({ error: "Failed to create category" }, 500);
  }
});

// Get documents by category
app.get("/make-server-0521b783/archives/documents", async (c) => {
  try {
    const category = c.req.query("category");
    const allDocs = await kv.getByPrefix("archive_doc:");
    const filtered = category
      ? allDocs.filter((doc: any) => doc.category === category)
      : allDocs;
    return c.json(filtered || []);
  } catch (error) {
    console.error("Error fetching archive documents:", error);
    return c.json({ error: "Failed to fetch documents" }, 500);
  }
});

// Create archive document
app.post("/make-server-0521b783/archives/documents", async (c) => {
  try {
    const data = await c.req.json();
    const id = data.id || crypto.randomUUID();
    const document = { ...data, id, createdAt: new Date().toISOString() };
    await kv.set(`archive_doc:${id}`, document);
    return c.json(document, 201);
  } catch (error) {
    console.error("Error creating archive document:", error);
    return c.json({ error: "Failed to create document" }, 500);
  }
});

// Update archive document
app.put("/make-server-0521b783/archives/documents/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const data = await c.req.json();
    const existing = await kv.get(`archive_doc:${id}`);
    if (!existing) {
      return c.json({ error: "Document not found" }, 404);
    }
    const updated = { ...existing, ...data, updatedAt: new Date().toISOString() };
    await kv.set(`archive_doc:${id}`, updated);
    return c.json(updated);
  } catch (error) {
    console.error("Error updating archive document:", error);
    return c.json({ error: "Failed to update document" }, 500);
  }
});

// Delete archive document
app.delete("/make-server-0521b783/archives/documents/:id", async (c) => {
  try {
    const id = c.req.param("id");
    await kv.del(`archive_doc:${id}`);
    return c.json({ success: true });
  } catch (error) {
    console.error("Error deleting archive document:", error);
    return c.json({ error: "Failed to delete document" }, 500);
  }
});

// ============================================
// PORTAL MANAGEMENT ENDPOINTS
// ============================================

// Get verified expenses for portal
app.get("/make-server-0521b783/portal/verified-expenses", async (c) => {
  try {
    const allExpenses = await kv.getByPrefix("expense:");
    const verified = allExpenses.filter((exp: any) => exp.status === "Verified");
    return c.json(verified || []);
  } catch (error) {
    console.error("Error fetching portal verified expenses:", error);
    return c.json({ error: "Failed to fetch verified expenses" }, 500);
  }
});

// Get line items for portal
app.get("/make-server-0521b783/portal/line-items", async (c) => {
  try {
    const items = await kv.getByPrefix("lineitem:");
    return c.json(items || []);
  } catch (error) {
    console.error("Error fetching portal line items:", error);
    return c.json({ error: "Failed to fetch line items" }, 500);
  }
});

// Get archives for portal
app.get("/make-server-0521b783/portal/archives", async (c) => {
  try {
    const docs = await kv.getByPrefix("archive_doc:");
    return c.json(docs || []);
  } catch (error) {
    console.error("Error fetching portal archives:", error);
    return c.json({ error: "Failed to fetch archives" }, 500);
  }
});

// ============================================
// PERSONNEL ENDPOINTS
// ============================================

// Get all personnel
app.get("/make-server-0521b783/personnel", async (c) => {
  try {
    const personnel = await kv.getByPrefix("personnel:");
    return c.json(personnel || []);
  } catch (error) {
    console.error("Error fetching personnel:", error);
    return c.json({ error: "Failed to fetch personnel" }, 500);
  }
});

// Get personnel by ID
app.get("/make-server-0521b783/personnel/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const person = await kv.get(`personnel:${id}`);
    if (!person) {
      return c.json({ error: "Person not found" }, 404);
    }
    return c.json(person);
  } catch (error) {
    console.error("Error fetching person:", error);
    return c.json({ error: "Failed to fetch person" }, 500);
  }
});

// Create personnel
app.post("/make-server-0521b783/personnel", async (c) => {
  try {
    const data = await c.req.json();
    const id = data.id || crypto.randomUUID();
    const person = { ...data, id, createdAt: new Date().toISOString() };
    await kv.set(`personnel:${id}`, person);
    return c.json(person, 201);
  } catch (error) {
    console.error("Error creating personnel:", error);
    return c.json({ error: "Failed to create personnel" }, 500);
  }
});

// Update personnel
app.put("/make-server-0521b783/personnel/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const data = await c.req.json();
    const existing = await kv.get(`personnel:${id}`);
    if (!existing) {
      return c.json({ error: "Person not found" }, 404);
    }
    const updated = { ...existing, ...data, updatedAt: new Date().toISOString() };
    await kv.set(`personnel:${id}`, updated);
    return c.json(updated);
  } catch (error) {
    console.error("Error updating personnel:", error);
    return c.json({ error: "Failed to update personnel" }, 500);
  }
});

// Delete personnel
app.delete("/make-server-0521b783/personnel/:id", async (c) => {
  try {
    const id = c.req.param("id");
    await kv.del(`personnel:${id}`);
    return c.json({ success: true });
  } catch (error) {
    console.error("Error deleting personnel:", error);
    return c.json({ error: "Failed to delete personnel" }, 500);
  }
});

// Get all committees
app.get("/make-server-0521b783/personnel/committees", async (c) => {
  try {
    const committees = await kv.getByPrefix("committee:");
    return c.json(committees || []);
  } catch (error) {
    console.error("Error fetching committees:", error);
    return c.json({ error: "Failed to fetch committees" }, 500);
  }
});

// Create committee
app.post("/make-server-0521b783/personnel/committees", async (c) => {
  try {
    const data = await c.req.json();
    const id = data.id || crypto.randomUUID();
    const committee = { ...data, id, createdAt: new Date().toISOString() };
    await kv.set(`committee:${id}`, committee);
    return c.json(committee, 201);
  } catch (error) {
    console.error("Error creating committee:", error);
    return c.json({ error: "Failed to create committee" }, 500);
  }
});

Deno.serve(app.fetch);