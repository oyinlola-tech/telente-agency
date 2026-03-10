import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import { Lock, User, Eye, EyeOff } from 'lucide-react';
import { Logo } from '../components/Logo';

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(credentials.email, credentials.password);
      navigate('/verify-otp');
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex justify-center mb-6">
            <Logo />
          </div>
          <h1 className="text-3xl md:text-4xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[var(--text-primary)] uppercase mb-2" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Admin Portal
          </h1>
          <p className="text-[var(--text-secondary)] font-['Roboto_Flex:Regular',sans-serif]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Secure access for authorized personnel only
          </p>
        </div>

        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-['Roboto_Mono:Medium',sans-serif] font-medium text-[var(--text-primary)] uppercase mb-2">
                Email
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]">
                  <User size={20} />
                </div>
                <input
                  type="email"
                  id="email"
                  value={credentials.email}
                  onChange={(e) => setCredentials(prev => ({ ...prev, email: e.target.value }))}
                  required
                  className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-xl pl-12 pr-4 py-3 text-[var(--text-primary)] focus:border-[var(--primary)] focus:outline-none transition-colors"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-['Roboto_Mono:Medium',sans-serif] font-medium text-[var(--text-primary)] uppercase mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]">
                  <Lock size={20} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                  required
                  className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-xl pl-12 pr-12 py-3 text-[var(--text-primary)] focus:border-[var(--primary)] focus:outline-none transition-colors"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-red-600 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[var(--primary)] text-[#0f0f0f] px-8 py-4 rounded-xl font-['Roboto_Mono:Medium',sans-serif] font-medium text-lg uppercase hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-[var(--text-secondary)]">
            <p>Default Admin Credentials:</p>
            <p className="mt-1 font-['Roboto_Mono:Medium',sans-serif]">Email: admin@telente.local | Password: admin123</p>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-[var(--text-secondary)]">
          <p>This page is accessible only at: <code className="bg-[var(--card-bg)] px-2 py-1 rounded">/admin-secret-login-2026</code></p>
        </div>
      </div>
    </div>
  );
}
