import { Link } from 'react-router';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[var(--primary)] mb-4" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[var(--text-primary)] uppercase mb-4" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
          Page Not Found
        </h2>
        <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-md mx-auto font-['Roboto_Flex:Regular',sans-serif]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-[var(--primary)] text-[#0f0f0f] px-8 py-4 rounded-xl font-['Roboto_Mono:Medium',sans-serif] font-medium text-lg uppercase inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            <Home size={20} />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="bg-[var(--card-bg)] border-2 border-[var(--card-border)] text-[var(--text-primary)] px-8 py-4 rounded-xl font-['Roboto_Mono:Medium',sans-serif] font-medium text-lg uppercase inline-flex items-center justify-center gap-2 hover:border-[var(--primary)] transition-colors"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
