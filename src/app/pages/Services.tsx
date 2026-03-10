import { Link } from 'react-router';
import { Code, Smartphone, Palette, Cloud, TrendingUp, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { servicesData } from '../data/mockData';

const iconMap: Record<string, any> = {
  Code,
  Smartphone,
  Palette,
  Cloud,
  TrendingUp,
  Users,
};

export default function Services() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-32 lg:pt-24 pb-20 px-4">
      <div className="max-w-[1400px] mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <span className="bg-[var(--primary)]/10 text-[var(--primary)] px-4 py-2 rounded-full text-sm font-['Roboto_Mono:Medium',sans-serif] font-medium uppercase inline-block mb-4">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[var(--text-primary)] uppercase mb-6" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Comprehensive Digital Solutions
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto font-['Roboto_Flex:Regular',sans-serif]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            We provide end-to-end technology solutions to help businesses thrive in the digital age. From concept to deployment, we're with you every step of the way.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {servicesData.map((service, idx) => {
            const Icon = iconMap[service.icon] || Code;
            return (
              <div
                key={service.id}
                className="group bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-10 hover:border-[var(--primary)] transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-[var(--primary)]/10 w-20 h-20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[var(--primary)] transition-colors">
                    <Icon className="text-[var(--primary)] group-hover:text-[#0f0f0f] transition-colors" size={40} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-['Roboto_Flex:Medium',sans-serif] font-medium text-[var(--text-primary)] uppercase mb-4" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                      {service.title}
                    </h3>
                    
                    <p className="text-[var(--text-secondary)] mb-6 font-['Roboto_Flex:Regular',sans-serif] leading-relaxed text-lg" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="text-sm font-['Roboto_Mono:Medium',sans-serif] font-medium text-[var(--text-primary)] uppercase mb-2">Key Features:</div>
                      {service.features.map((feature, fidx) => (
                        <div key={fidx} className="flex items-center gap-2 text-[var(--text-secondary)]">
                          <CheckCircle2 className="text-[var(--primary)]" size={18} />
                          <span className="font-['Roboto_Flex:Regular',sans-serif]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[var(--text-primary)] uppercase mb-4" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto font-['Roboto_Flex:Regular',sans-serif]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            We tailor our services to meet your specific business needs. Let's discuss how we can help you achieve your goals.
          </p>
          <Link
            to="/contact"
            className="bg-[var(--primary)] text-[#0f0f0f] px-8 py-4 rounded-xl font-['Roboto_Mono:Medium',sans-serif] font-medium text-lg uppercase inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            Get In Touch
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
