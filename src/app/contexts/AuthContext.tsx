import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { authAPI } from '../services/api';
import type { AuthUser } from '../types/api';

interface AuthContextType {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  otpId: string | null;
  pendingEmail: string | null;
  login: (email: string, password: string) => Promise<string>;
  verifyOtp: (code: string) => Promise<void>;
  updateOtpId: (nextOtpId: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [otpId, setOtpId] = useState<string | null>(() => sessionStorage.getItem('pendingOtpId'));
  const [pendingEmail, setPendingEmail] = useState<string | null>(() => sessionStorage.getItem('pendingOtpEmail'));

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem('adminToken');
    if (token) {
      authAPI.verifyToken()
        .then(response => {
          if (response.valid && response.user) {
            setUser(response.user);
          } else {
            localStorage.removeItem('adminToken');
          }
        })
        .catch(() => {
          localStorage.removeItem('adminToken');
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  const login = async (email: string, password: string) => {
    const response = await authAPI.login({ email, password });
    const nextOtpId = response.otpId;
    if (!nextOtpId) {
      throw new Error('OTP was not issued.');
    }
    sessionStorage.setItem('pendingOtpId', nextOtpId);
    sessionStorage.setItem('pendingOtpEmail', email);
    setOtpId(nextOtpId);
    setPendingEmail(email);
    return nextOtpId;
  };

  const verifyOtp = async (code: string) => {
    const pendingOtpId = otpId || sessionStorage.getItem('pendingOtpId');
    if (!pendingOtpId) {
      throw new Error('OTP session expired. Please login again.');
    }
    const response = await authAPI.verifyOtp({ otpId: pendingOtpId, code });
    localStorage.setItem('adminToken', response.token);
    sessionStorage.removeItem('pendingOtpId');
    sessionStorage.removeItem('pendingOtpEmail');
    setOtpId(null);
    setPendingEmail(null);
    setUser(response.user);
  };

  const updateOtpId = (nextOtpId: string) => {
    sessionStorage.setItem('pendingOtpId', nextOtpId);
    setOtpId(nextOtpId);
  };

  const logout = () => {
    authAPI.logout();
    sessionStorage.removeItem('pendingOtpId');
    sessionStorage.removeItem('pendingOtpEmail');
    setOtpId(null);
    setPendingEmail(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      isLoading,
      otpId,
      pendingEmail,
      login,
      verifyOtp,
      updateOtpId,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
