// API Service Layer for Telente Technologies
const API_BASE_URL = import.meta.env.VITE_API_URL;

if (!API_BASE_URL) {
  throw new Error('VITE_API_URL is not set. Define it in your .env file.');
}

// Helper function to make API calls
async function apiCall<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const token = localStorage.getItem('adminToken');
  
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` }),
    ...options?.headers,
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json();
}

// Authentication APIs
export const authAPI = {
  login: (credentials: { email?: string; username?: string; password: string }) =>
    apiCall<{ otpRequired: boolean; otpId: string; message: string }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    }),
  verifyOtp: (payload: { otpId: string; code: string }) =>
    apiCall<{ token: string; user: any }>('/auth/verify-otp', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),
  resendOtp: (payload: { otpId: string }) =>
    apiCall<{ otpRequired: boolean; otpId: string; message: string }>('/auth/resend-otp', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),
    
  logout: () => {
    localStorage.removeItem('adminToken');
    return Promise.resolve();
  },
  
  verifyToken: () =>
    apiCall<{ valid: boolean; user: any }>('/auth/verify'),
};

// Services APIs
export const servicesAPI = {
  getAll: () => apiCall<any[]>('/services'),
  getById: (id: string) => apiCall<any>(`/services/${id}`),
  create: (data: any) => apiCall<any>('/services', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  update: (id: string, data: any) => apiCall<any>(`/services/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  delete: (id: string) => apiCall<void>(`/services/${id}`, {
    method: 'DELETE',
  }),
};

// Projects APIs
export const projectsAPI = {
  getAll: () => apiCall<any[]>('/projects'),
  getById: (id: string) => apiCall<any>(`/projects/${id}`),
  create: (data: any) => apiCall<any>('/projects', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  update: (id: string, data: any) => apiCall<any>(`/projects/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  delete: (id: string) => apiCall<void>(`/projects/${id}`, {
    method: 'DELETE',
  }),
};

// Blog APIs
export const blogsAPI = {
  getAll: () => apiCall<any[]>('/blogs'),
  getById: (id: string) => apiCall<any>(`/blogs/${id}`),
  create: (data: any) => apiCall<any>('/blogs', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  update: (id: string, data: any) => apiCall<any>(`/blogs/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  delete: (id: string) => apiCall<void>(`/blogs/${id}`, {
    method: 'DELETE',
  }),
};

// Team Members APIs
export const teamAPI = {
  getAll: () => apiCall<any[]>('/team'),
  getById: (id: string) => apiCall<any>(`/team/${id}`),
  create: (data: any) => apiCall<any>('/team', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  update: (id: string, data: any) => apiCall<any>(`/team/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  delete: (id: string) => apiCall<void>(`/team/${id}`, {
    method: 'DELETE',
  }),
};

// Testimonials APIs
export const testimonialsAPI = {
  getAll: () => apiCall<any[]>('/testimonials'),
  getById: (id: string) => apiCall<any>(`/testimonials/${id}`),
  create: (data: any) => apiCall<any>('/testimonials', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  update: (id: string, data: any) => apiCall<any>(`/testimonials/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  delete: (id: string) => apiCall<void>(`/testimonials/${id}`, {
    method: 'DELETE',
  }),
};

// Careers APIs
export const careersAPI = {
  getAll: () => apiCall<any[]>('/careers'),
  getById: (id: string) => apiCall<any>(`/careers/${id}`),
  create: (data: any) => apiCall<any>('/careers', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  update: (id: string, data: any) => apiCall<any>(`/careers/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  delete: (id: string) => apiCall<void>(`/careers/${id}`, {
    method: 'DELETE',
  }),
};

// Contact Form APIs
export const contactAPI = {
  submit: (data: any) => apiCall<any>('/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  getAll: () => apiCall<any[]>('/contact'),
  getById: (id: string) => apiCall<any>(`/contact/${id}`),
  delete: (id: string) => apiCall<void>(`/contact/${id}`, {
    method: 'DELETE',
  }),
};

// Site Settings APIs
export const settingsAPI = {
  get: () => apiCall<any>('/settings'),
  update: (data: any) => apiCall<any>('/settings', {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
};
