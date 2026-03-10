// API Service Layer for Telente Technologies
const API_BASE_URL = import.meta.env.VITE_API_URL;

if (!API_BASE_URL) {
  throw new Error('VITE_API_URL is not set. Define it in your .env file.');
}

// Helper function to make API calls
class ApiError extends Error {
  status: number;
  data?: unknown;

  constructor(message: string, status: number, data?: unknown) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

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
    let errorMessage = `API Error: ${response.statusText}`;
    let errorData: unknown;
    try {
      errorData = await response.json();
      if (errorData && typeof errorData === 'object' && 'error' in errorData) {
        errorMessage = String((errorData as { error?: string }).error || errorMessage);
      }
    } catch (err) {
      // ignore JSON parse errors
    }
    throw new ApiError(errorMessage, response.status, errorData);
  }

  return response.json();
}

async function uploadFile(endpoint: string, file: File): Promise<{ url: string; filename: string; size: number; mimeType: string }> {
  const token = localStorage.getItem('adminToken');
  const formData = new FormData();
  formData.append('file', file);

  const headers: HeadersInit = {
    ...(token && { 'Authorization': `Bearer ${token}` }),
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: 'POST',
    body: formData,
    headers,
  });

  if (!response.ok) {
    let errorMessage = `API Error: ${response.statusText}`;
    try {
      const errorData = await response.json();
      if (errorData && typeof errorData === 'object' && 'error' in errorData) {
        errorMessage = String((errorData as { error?: string }).error || errorMessage);
      }
    } catch (err) {
      // ignore JSON parse errors
    }
    throw new ApiError(errorMessage, response.status);
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
  getAllAdmin: () => apiCall<Testimonial[]>('/testimonials/admin'),
  getById: (id: string) => apiCall<Testimonial>(`/testimonials/${id}`),
  createPublic: (data: Partial<Testimonial>) => apiCall<Testimonial>('/testimonials/public', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  create: (data: Partial<Testimonial>) => apiCall<Testimonial>('/testimonials', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  approve: (id: string) => apiCall<Testimonial>(`/testimonials/${id}/approve`, {
    method: 'PUT',
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

export const uploadsAPI = {
  uploadImage: (file: File) => uploadFile('/uploads/images', file),
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
