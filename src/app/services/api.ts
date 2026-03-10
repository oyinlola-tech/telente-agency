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
    apiCall<AuthLoginResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    }),
  verifyOtp: (payload: { otpId: string; code: string }) =>
    apiCall<AuthVerifyOtpResponse>('/auth/verify-otp', {
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
    apiCall<AuthVerifyResponse>('/auth/verify'),
};

// Services APIs
export const servicesAPI = {
  getAll: () => apiCall<Service[]>('/services'),
  getById: (id: string) => apiCall<Service>(`/services/${id}`),
  create: (data: Partial<Service>) => apiCall<Service>('/services', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  update: (id: string, data: Partial<Service>) => apiCall<Service>(`/services/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  delete: (id: string) => apiCall<void>(`/services/${id}`, {
    method: 'DELETE',
  }),
};

// Projects APIs
export const projectsAPI = {
  getAll: () => apiCall<Project[]>('/projects'),
  getById: (id: string) => apiCall<Project>(`/projects/${id}`),
  create: (data: Partial<Project>) => apiCall<Project>('/projects', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  update: (id: string, data: Partial<Project>) => apiCall<Project>(`/projects/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  delete: (id: string) => apiCall<void>(`/projects/${id}`, {
    method: 'DELETE',
  }),
};

// Blog APIs
export const blogsAPI = {
  getAll: () => apiCall<Blog[]>('/blogs'),
  getById: (id: string) => apiCall<Blog>(`/blogs/${id}`),
  create: (data: Partial<Blog>) => apiCall<Blog>('/blogs', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  update: (id: string, data: Partial<Blog>) => apiCall<Blog>(`/blogs/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  delete: (id: string) => apiCall<void>(`/blogs/${id}`, {
    method: 'DELETE',
  }),
};

// Team Members APIs
export const teamAPI = {
  getAll: () => apiCall<TeamMember[]>('/team'),
  getById: (id: string) => apiCall<TeamMember>(`/team/${id}`),
  create: (data: Partial<TeamMember>) => apiCall<TeamMember>('/team', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  update: (id: string, data: Partial<TeamMember>) => apiCall<TeamMember>(`/team/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  delete: (id: string) => apiCall<void>(`/team/${id}`, {
    method: 'DELETE',
  }),
};

// Testimonials APIs
export const testimonialsAPI = {
  getAll: () => apiCall<Testimonial[]>('/testimonials'),
  getById: (id: string) => apiCall<Testimonial>(`/testimonials/${id}`),
  create: (data: Partial<Testimonial>) => apiCall<Testimonial>('/testimonials', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  update: (id: string, data: Partial<Testimonial>) => apiCall<Testimonial>(`/testimonials/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  delete: (id: string) => apiCall<void>(`/testimonials/${id}`, {
    method: 'DELETE',
  }),
};

// Careers APIs
export const careersAPI = {
  getAll: () => apiCall<Career[]>('/careers'),
  getById: (id: string) => apiCall<Career>(`/careers/${id}`),
  create: (data: Partial<Career>) => apiCall<Career>('/careers', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  update: (id: string, data: Partial<Career>) => apiCall<Career>(`/careers/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  delete: (id: string) => apiCall<void>(`/careers/${id}`, {
    method: 'DELETE',
  }),
};

// Contact Form APIs
export const contactAPI = {
  submit: (data: Partial<ContactSubmission>) => apiCall<ContactSubmission>('/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  getAll: () => apiCall<ContactSubmission[]>('/contact'),
  getById: (id: string) => apiCall<ContactSubmission>(`/contact/${id}`),
  delete: (id: string) => apiCall<void>(`/contact/${id}`, {
    method: 'DELETE',
  }),
};

// Site Settings APIs
export const settingsAPI = {
  get: () => apiCall<Settings>('/settings'),
  update: (data: Settings) => apiCall<Settings>('/settings', {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
};
import type {
  AuthLoginResponse,
  AuthVerifyOtpResponse,
  AuthVerifyResponse,
  Service,
  Project,
  Blog,
  TeamMember,
  Testimonial,
  Career,
  ContactSubmission,
  Settings,
} from '../types/api';
