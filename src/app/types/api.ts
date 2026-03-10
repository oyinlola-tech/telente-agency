export interface AuthUser {
  id: string;
  username: string;
  email?: string;
  role: string;
}

export interface AuthLoginResponse {
  otpRequired: boolean;
  otpId: string;
  message: string;
}

export interface AuthVerifyResponse {
  valid: boolean;
  user: AuthUser | null;
}

export interface AuthVerifyOtpResponse {
  token: string;
  user: AuthUser;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  features?: string[];
}

export interface Project {
  id: string;
  title: string;
  client?: string;
  category?: string;
  description: string;
  technologies?: string[];
  image?: string;
  testimonial?: string;
  results?: string[];
}

export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author?: string;
  authorRole?: string;
  date?: string | null;
  category?: string;
  readTime?: string;
  image?: string;
  tags?: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  image?: string;
  linkedin?: string;
  twitter?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  company?: string;
  content: string;
  rating?: number;
  image?: string;
}

export interface Career {
  id: string;
  title: string;
  department?: string;
  location?: string;
  type?: string;
  description: string;
  requirements?: string[];
  responsibilities?: string[];
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  createdAt?: string;
}

export type Settings = Record<string, unknown>;
