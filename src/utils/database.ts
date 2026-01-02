import { projectId, publicAnonKey } from './supabase/info';

const BASE_URL = `https://${projectId}.supabase.co/functions/v1/make-server-0521b783`;

async function fetchFromServer(
  endpoint: string,
  options: RequestInit = {},
  requireAuth = true
) {
  let headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${publicAnonKey}`, // Always send anon key
    ...(options.headers as Record<string, string>),
  };

  if (requireAuth) {
    // Send session token in a DIFFERENT header
    const sessionToken = localStorage.getItem('sessionToken');

    if (!sessionToken) {
      throw new Error('No active session');
    }

    headers['X-Session-Token'] = sessionToken; // Custom header
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`API Error: ${error}`);
  }

  return response.json();
}

export const authAPI = {
  login: async (username: string, password: string) =>
    fetchFromServer(
      '/auth/login',
      {
        method: 'POST',
        body: JSON.stringify({ username, password }),
      },
      false
    ),
  logout: async (sessionToken: string) => fetchFromServer('/auth/logout', {
    method: 'POST',
    headers: {
      'X-Session-Token': sessionToken, // Use custom header
    },
  }),
  verifySession: async (sessionToken: string) =>
    fetchFromServer(
      '/auth/verify', 
      {
        headers: {
          'X-Session-Token': sessionToken, // Use custom header
        },
      },
      false
    ),
  // ... rest stays the same

  getUsers: async () => fetchFromServer('/auth/users'),
  createUser: async (data: any) => fetchFromServer('/auth/users', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  updateUser: async (username: string, data: any) => fetchFromServer(`/auth/users/${username}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  deleteUser: async (username: string) => fetchFromServer(`/auth/users/${username}`, {
    method: 'DELETE',
  }),
};

// Projects API
export const projectsAPI = {
  getAll: async () => fetchFromServer('/projects'),
  getById: async (id: string) => fetchFromServer(`/projects/${id}`),
  create: async (data: any) => fetchFromServer('/projects', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  update: async (id: string, data: any) => fetchFromServer(`/projects/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  delete: async (id: string) => fetchFromServer(`/projects/${id}`, {
    method: 'DELETE',
  }),
};

// Budget Preparation API
export const budgetAPI = {
  getLineItems: async () => fetchFromServer('/budget/line-items'),
  createLineItem: async (data: any) => fetchFromServer('/budget/line-items', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  updateLineItem: async (id: string, data: any) => fetchFromServer(`/budget/line-items/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  deleteLineItem: async (id: string) => fetchFromServer(`/budget/line-items/${id}`, {
    method: 'DELETE',
  }),
  getFunds: async () => fetchFromServer('/budget/funds'),
  createFund: async (data: any) => fetchFromServer('/budget/funds', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
};

// Expense Verification API
export const expensesAPI = {
  getAll: async () => fetchFromServer('/expenses'),
  getById: async (id: string) => fetchFromServer(`/expenses/${id}`),
  create: async (data: any) => fetchFromServer('/expenses', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  update: async (id: string, data: any) => fetchFromServer(`/expenses/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  verify: async (id: string, data: any) => fetchFromServer(`/expenses/${id}/verify`, {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  flag: async (id: string, data: any) => fetchFromServer(`/expenses/${id}/flag`, {
    method: 'POST',
    body: JSON.stringify(data),
  }),
};

// Archives API
export const archivesAPI = {
  getCategories: async () => fetchFromServer('/archives/categories'),
  createCategory: async (data: any) => fetchFromServer('/archives/categories', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  getDocuments: async (category: string) => fetchFromServer(`/archives/documents?category=${category}`),
  createDocument: async (data: any) => fetchFromServer('/archives/documents', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  updateDocument: async (id: string, data: any) => fetchFromServer(`/archives/documents/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  deleteDocument: async (id: string) => fetchFromServer(`/archives/documents/${id}`, {
    method: 'DELETE',
  }),
};

// Portal Management API
export const portalAPI = {
  getVerifiedExpenses: async () => fetchFromServer('/portal/verified-expenses'),
  getLineItems: async () => fetchFromServer('/portal/line-items'),
  getArchives: async () => fetchFromServer('/portal/archives'),
};

// Personnel API
export const personnelAPI = {
  getAll: async () => fetchFromServer('/personnel'),
  getById: async (id: string) => fetchFromServer(`/personnel/${id}`),
  create: async (data: any) => fetchFromServer('/personnel', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  update: async (id: string, data: any) => fetchFromServer(`/personnel/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  delete: async (id: string) => fetchFromServer(`/personnel/${id}`, {
    method: 'DELETE',
  }),
  getCommittees: async () => fetchFromServer('/personnel/committees'),
  createCommittee: async (data: any) => fetchFromServer('/personnel/committees', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
};