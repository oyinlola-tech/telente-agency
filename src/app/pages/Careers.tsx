import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { MapPin, Briefcase, Clock, ArrowRight } from 'lucide-react';
import { careersAPI } from '../services/api';
import type { Career } from '../types/api';

export default function Careers() {
  const [careers, setCareers] = useState<Career[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;
    careersAPI.getAll()
      .then((data) => {
        if (active) setCareers(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        if (active) setError('Unable to load roles right now.');
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-32 lg:pt-24 pb-20 px-4">
      <div className="max-w-[1400px] mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <span className="bg-[var(--primary)]/10 text-[var(--primary)] px-4 py-2 rounded-full text-sm font-['Roboto_Mono:Medium',sans-serif] font-medium uppercase inline-block mb-4">
            Join Our Team
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[var(--text-primary)] uppercase mb-6" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Career Opportunities
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto font-['Roboto_Flex:Regular',sans-serif]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Be part of an innovative team building the future of technology in Africa. Explore open positions and join us in making a difference.
          </p>
        </div>

        {/* Open Positions */}
        <div className="space-y-6 mb-16">
          {loading && (
            <div className="text-center text-[var(--text-secondary)]">Loading roles...</div>
          )}
          {error && !loading && (
            <div className="text-center text-red-500">{error}</div>
          )}
          {!loading && !error && careers.map(job => (
            <div key={job.id} className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-8 hover:border-[var(--primary)] transition-all">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="bg-[var(--primary)] text-[#0f0f0f] px-3 py-1 rounded-lg text-sm font-['Roboto_Mono:Medium',sans-serif] font-medium uppercase">
                      {job.department}
                    </span>
                    <div className="flex items-center gap-1 text-[var(--text-secondary)] text-sm">
                      <MapPin size={16} />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[var(--text-secondary)] text-sm">
                      <Clock size={16} />
                      <span>{job.type}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-['Roboto_Flex:Medium',sans-serif] font-medium text-[var(--text-primary)] uppercase mb-3" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                    {job.title}
                  </h3>
                  
                  <p className="text-[var(--text-secondary)] mb-6 font-['Roboto_Flex:Regular',sans-serif] leading-relaxed" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                    {job.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-['Roboto_Mono:Medium',sans-serif] font-medium text-[var(--text-primary)] uppercase mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {(Array.isArray(job.requirements) ? job.requirements : []).map((req: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2 text-[var(--text-secondary)] text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-['Roboto_Mono:Medium',sans-serif] font-medium text-[var(--text-primary)] uppercase mb-3">Responsibilities:</h4>
                      <ul className="space-y-2">
                        {(Array.isArray(job.responsibilities) ? job.responsibilities : []).map((resp: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2 text-[var(--text-secondary)] text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="lg:shrink-0">
                  <Link
                    to="/contact"
                    className="bg-[var(--primary)] text-[#0f0f0f] px-8 py-4 rounded-xl font-['Roboto_Mono:Medium',sans-serif] font-medium uppercase inline-flex items-center gap-2 hover:opacity-90 transition-opacity whitespace-nowrap"
                  >
                    Apply Now
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-[var(--primary)] to-[#a86552] rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[#0f0f0f] uppercase mb-4" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Don't See Your Position?
          </h2>
          <p className="text-lg text-[#0f0f0f]/80 mb-8 max-w-2xl mx-auto font-['Roboto_Flex:Regular',sans-serif]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Link
            to="/contact"
            className="bg-[#0f0f0f] text-[var(--nav-active)] px-8 py-4 rounded-xl font-['Roboto_Mono:Medium',sans-serif] font-medium text-lg uppercase inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            Get In Touch
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
