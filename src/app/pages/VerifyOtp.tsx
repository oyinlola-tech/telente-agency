import { type FormEvent, useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { ArrowLeft, RefreshCw, ShieldCheck } from 'lucide-react';
import { Logo } from '../components/Logo';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../components/ui/input-otp';
import { authAPI } from '../services/api';
import { useAuth } from '../contexts/AuthContext';

const RESEND_SECONDS = 30;

export default function VerifyOtp() {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [resendIn, setResendIn] = useState(RESEND_SECONDS);
  const navigate = useNavigate();
  const { verifyOtp, otpId, pendingEmail, updateOtpId } = useAuth();

  const destination = useMemo(() => pendingEmail || 'your inbox', [pendingEmail]);
  const isComplete = code.length === 6;

  useEffect(() => {
    if (resendIn <= 0) {
      return;
    }

    const timer = window.setTimeout(() => {
      setResendIn((prev) => prev - 1);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [resendIn]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!isComplete) {
      setError('Please enter the 6-digit code.');
      return;
    }

    setError('');
    setIsVerifying(true);

    try {
      await verifyOtp(code);
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Verification failed. Please try again.');
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResend = async () => {
    if (resendIn > 0) {
      return;
    }

    if (!otpId) {
      setError('OTP session expired. Please login again.');
      return;
    }

    setIsResending(true);
    setError('');

    try {
      const response = await authAPI.resendOtp({ otpId });
      updateOtpId(response.otpId);
      setResendIn(RESEND_SECONDS);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to resend OTP. Please try again.');
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] relative overflow-hidden">
      <div className="absolute -top-32 -right-24 h-80 w-80 rounded-full bg-[#f1d6cc] opacity-40 blur-3xl" />
      <div className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-[#e6ece8] opacity-70 blur-3xl" />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-5xl grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-8 md:p-10 shadow-[0_18px_40px_rgba(0,0,0,0.06)]">
            <div className="flex items-center justify-between">
              <Logo />
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--bg-secondary)] px-4 py-2 text-xs font-['Roboto_Mono:Medium',sans-serif] text-[var(--text-secondary)] uppercase">
                <ShieldCheck size={16} />
                Secure Step
              </span>
            </div>

            <h1
              className="mt-8 text-3xl md:text-4xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[var(--text-primary)] uppercase"
              style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}
            >
              Verify OTP
            </h1>
            <p
              className="mt-3 text-[var(--text-secondary)] font-['Roboto_Flex:Regular',sans-serif]"
              style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}
            >
              Enter the 6-digit security code sent to <span className="text-[var(--text-primary)]">{destination}</span> to continue.
            </p>

            <div className="mt-10 grid gap-6">
              <div className="rounded-2xl border border-dashed border-[var(--card-border)] bg-[var(--bg-secondary)] p-6">
                <h2 className="text-sm font-['Roboto_Mono:Medium',sans-serif] uppercase text-[var(--text-secondary)]">Why this matters</h2>
                <p className="mt-3 text-sm text-[var(--text-secondary)]">
                  We use one-time passcodes to confirm it is really you before sensitive actions.
                </p>
                <ul className="mt-4 flex flex-col gap-2 text-sm text-[var(--text-primary)]">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                    Code expires in 5 minutes.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                    Each code can be used once.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                    Request a new code if needed.
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-between rounded-2xl border border-[var(--card-border)] px-4 py-3 text-sm text-[var(--text-secondary)]">
                <span>Not your email?</span>
                <Link
                  to="/oyin/login"
                  className="font-['Roboto_Mono:Medium',sans-serif] uppercase text-[var(--primary)] hover:opacity-80"
                >
                  Change Login
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-8 md:p-10 shadow-[0_18px_40px_rgba(0,0,0,0.06)]">
            <div className="flex items-center justify-between text-sm text-[var(--text-secondary)]">
              <Link
                to="/oyin/login"
                className="inline-flex items-center gap-2 font-['Roboto_Mono:Medium',sans-serif] uppercase hover:text-[var(--primary)]"
              >
                <ArrowLeft size={16} />
                Back
              </Link>
              <span className="font-['Roboto_Mono:Medium',sans-serif] uppercase">OTP Verification</span>
            </div>

            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <div>
                <label className="block text-sm font-['Roboto_Mono:Medium',sans-serif] uppercase text-[var(--text-primary)] mb-3">
                  Security Code
                </label>
                <InputOTP
                  maxLength={6}
                  value={code}
                  onChange={(value) => setCode(value)}
                  containerClassName="justify-between"
                  className="w-full"
                >
                  <InputOTPGroup className="w-full justify-between">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <InputOTPSlot
                        key={index}
                        index={index}
                        className="h-12 w-12 rounded-xl border border-[var(--card-border)] bg-[var(--bg-secondary)] text-lg font-['Roboto_Mono:Medium',sans-serif] text-[var(--text-primary)]"
                      />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-red-600 text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={!isComplete || isVerifying}
                className="w-full bg-[var(--primary)] text-[#0f0f0f] px-8 py-4 rounded-xl font-['Roboto_Mono:Medium',sans-serif] font-medium text-lg uppercase hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isVerifying ? 'Verifying...' : 'Verify Code'}
              </button>
            </form>

            <div className="mt-8 flex flex-col gap-3 text-sm text-[var(--text-secondary)]">
              <p>Did not receive the code?</p>
              <button
                type="button"
                onClick={handleResend}
                disabled={resendIn > 0 || isResending}
                className="inline-flex items-center gap-2 font-['Roboto_Mono:Medium',sans-serif] uppercase text-[var(--primary)] disabled:text-[var(--text-secondary)]"
              >
                <RefreshCw size={16} />
                {resendIn > 0 ? `Resend in ${resendIn}s` : isResending ? 'Resending...' : 'Resend Code'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
