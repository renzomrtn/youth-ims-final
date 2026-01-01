# Database Integration Guide

## Overview
This document describes the database integration implementation for the Youth Information Management System. The system now uses Supabase's key-value store to persist data across all modules including **authentication** instead of relying on hardcoded data.

## Architecture

### Backend (Supabase Edge Functions)
- **Server**: `/supabase/functions/server/index.tsx`
- **KV Store Utility**: `/supabase/functions/server/kv_store.tsx` (protected file)
- **Auth Utilities**: `/supabase/functions/server/auth-utils.tsx` - Password hashing and session management
- All API endpoints are prefixed with `/make-server-0521b783`

### Frontend
- **Database API**: `/utils/database.ts` - Client-side API wrapper
- **Database Hook**: `/hooks/useDatabase.ts` - React hook for data fetching with loading/error states
- **Seed Data**: `/utils/seedData.ts` - Initial database seeding utility
- **Init Component**: `/components/DatabaseInit.tsx` - UI component for initializing the database
- **Auth Context**: `/contexts/AuthContext.tsx` - Authentication context using database

## Data Structure

The system stores data using the following key prefixes in the KV store:

- `user:*` - User accounts (authentication)
- `session:*` - User sessions (authentication)
- `project:*` - Project data
- `lineitem:*` - Budget line items
- `fund:*` - Budget funds
- `expense:*` - Expense verification records
- `archive_category:*` - Archive categories
- `archive_doc:*` - Archive documents
- `personnel:*` - Personnel records
- `committee:*` - Committee records

## Authentication System

### User Accounts
The system includes **4 default user accounts** that are **automatically created** when the server starts:

1. **skf_secretary** / `password123` - SKF Secretary
2. **skf_treasurer** / `password123` - SKF Treasurer
3. **skf_auditor** / `password123` - SKF Auditor
4. **skf_president** / `password123` - SKF President

**Note:** User accounts are auto-initialized on server startup. No manual database initialization is required for authentication to work.

### Security Features
- **Password Hashing**: All passwords are hashed using SHA-256 before storage
- **Session Management**: Login creates a session token stored in the database
- **Session Expiration**: Sessions expire after 24 hours
- **Session Verification**: On page load, the app verifies the session with the server

### Authentication Flow
1. User enters username and password
2. Client sends credentials to `/auth/login`
3. Server verifies password hash
4. Server creates session token and stores it
5. Client receives session token and user data
6. Session token is stored in localStorage
7. On subsequent page loads, session is verified with server

## API Endpoints

### Authentication
- `POST /auth/login` - Login with username and password
- `POST /auth/logout` - Logout and invalidate session
- `GET /auth/verify` - Verify session token
- `GET /auth/users` - Get all users (admin)
- `POST /auth/users` - Create new user
- `PUT /auth/users/:username` - Update user
- `DELETE /auth/users/:username` - Delete user

### Projects
- `GET /projects` - Get all projects
- `GET /projects/:id` - Get project by ID
- `POST /projects` - Create new project
- `PUT /projects/:id` - Update project
- `DELETE /projects/:id` - Delete project

### Budget
- `GET /budget/line-items` - Get all line items
- `POST /budget/line-items` - Create line item
- `PUT /budget/line-items/:id` - Update line item
- `DELETE /budget/line-items/:id` - Delete line item
- `GET /budget/funds` - Get all funds
- `POST /budget/funds` - Create fund

### Expense Verification
- `GET /expenses` - Get all expenses
- `GET /expenses/:id` - Get expense by ID
- `POST /expenses` - Create expense
- `PUT /expenses/:id` - Update expense
- `POST /expenses/:id/verify` - Verify expense
- `POST /expenses/:id/flag` - Flag expense

### Archives
- `GET /archives/categories` - Get all archive categories
- `POST /archives/categories` - Create archive category
- `GET /archives/documents?category=xxx` - Get documents by category
- `POST /archives/documents` - Create archive document
- `PUT /archives/documents/:id` - Update archive document
- `DELETE /archives/documents/:id` - Delete archive document

### Portal Management
- `GET /portal/verified-expenses` - Get verified expenses for portal
- `GET /portal/line-items` - Get line items for portal
- `GET /portal/archives` - Get archives for portal

### Personnel
- `GET /personnel` - Get all personnel
- `GET /personnel/:id` - Get person by ID
- `POST /personnel` - Create personnel
- `PUT /personnel/:id` - Update personnel
- `DELETE /personnel/:id` - Delete personnel
- `GET /personnel/committees` - Get all committees
- `POST /personnel/committees` - Create committee

## Usage

### 1. Initialize the Database

When you first load the application, you'll see an "Initialize Database" button in the bottom-right corner of the dashboard. Click this button to seed the database with sample data.

### 2. Using the Database API in Components

```typescript
import { projectsAPI } from '../utils/database';

// Get all projects
const projects = await projectsAPI.getAll();

// Create a new project
const newProject = await projectsAPI.create({
  projectTitle: 'New Project',
  committeeName: 'Development',
  chairman: 'John Doe',
  viceChairman: 'Jane Smith',
  status: 'Planning',
  progress: 0,
  startDate: '2024-01-01',
  endDate: '2024-12-31',
  budget: 100000,
});

// Update a project
await projectsAPI.update('proj-001', {
  status: 'In Progress',
  progress: 50,
});
```

### 3. Using the useDatabase Hook

```typescript
import { useDatabase } from '../hooks/useDatabase';
import { projectsAPI } from '../utils/database';

function MyComponent() {
  const { data, loading, error, refetch } = useDatabase(() => projectsAPI.getAll());

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {data?.map(project => (
        <div key={project.id}>{project.projectTitle}</div>
      ))}
      <button onClick={refetch}>Refresh</button>
    </div>
  );
}
```

## Next Steps for Developers

To fully integrate the database into all components, update each content component to:

1. Import the appropriate API from `/utils/database.ts`
2. Use the `useDatabase` hook or `useState`/`useEffect` to fetch data
3. Replace hardcoded data with fetched data
4. Add loading and error states
5. Update create/edit/delete handlers to call the API

### Example Component Migration

Before:
```typescript
const projects = [
  { id: 1, title: 'Project A' },
  { id: 2, title: 'Project B' },
];
```

After:
```typescript
import { useDatabase } from '../hooks/useDatabase';
import { projectsAPI } from '../utils/database';

function ProjectsComponent() {
  const { data: projects, loading, error } = useDatabase(() => projectsAPI.getAll());

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <div>
      {projects?.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
```

## Important Notes

- The KV store is persistent across sessions
- All API calls are authenticated using the Supabase public anon key
- Error messages are logged to the console for debugging
- The seed data includes sample projects, budget items, expenses, archives, and personnel

## Files Modified/Created

### Created Files:
1. `/utils/database.ts` - Database API wrapper (includes authAPI)
2. `/hooks/useDatabase.ts` - React hook for database operations
3. `/utils/seedData.ts` - Database seeding utility (includes user accounts)
4. `/components/DatabaseInit.tsx` - Database initialization UI component
5. `/supabase/functions/server/auth-utils.tsx` - Password hashing and session utilities
6. `/DATABASE_INTEGRATION_GUIDE.md` - This documentation file

### Modified Files:
1. `/supabase/functions/server/index.tsx` - Added all API endpoints including authentication
2. `/App.tsx` - Added seed database import and state
3. `/components/DashboardContent.tsx` - Added DatabaseInit component
4. `/contexts/AuthContext.tsx` - **Updated to use database instead of hardcoded users**
5. `/components/LoginPage.tsx` - Updated to handle async login

### No Files Deleted

## Authentication Migration Summary

**Before**: User accounts were hardcoded in `/contexts/AuthContext.tsx` with plain text passwords stored in localStorage.

**After**: 
- User accounts are stored in the Supabase database with hashed passwords
- Session tokens are generated on login and stored in both the database and localStorage
- Sessions are verified with the server on page load
- Passwords are hashed using SHA-256 before storage
- All 4 user accounts are automatically seeded when you initialize the database

## Support

For questions or issues related to database integration, refer to:
- Supabase documentation: https://supabase.com/docs
- Hono framework documentation: https://hono.dev/