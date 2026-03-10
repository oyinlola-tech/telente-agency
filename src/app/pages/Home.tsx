import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight, Code, Smartphone, Palette, Cloud, TrendingUp, Users, CheckCircle2, ShieldCheck, Workflow, Zap } from 'lucide-react';
import { companyInfo } from '../data/mockData';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import svgPaths from "../../imports/svg-o2qg4vmwj9";
import { servicesAPI, testimonialsAPI } from '../services/api';
import type { Service, Testimonial } from '../types/api';

const iconMap: Record<string, any> = {
  Code,
  Smartphone,
  Palette,
  Cloud,
  TrendingUp,
  Users,
};

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 lg:pt-24 pb-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--bg-primary)]" />
      
      <div className="relative max-w-[1400px] mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-[var(--primary)]/10 text-[var(--primary)] px-4 py-2 rounded-full text-sm font-['Roboto_Mono:Medium',sans-serif] font-medium uppercase">
              Software Engineering Agency
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[var(--text-primary)] leading-tight uppercase" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
              Engineering Software That Scales
            </h1>
            
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed font-['Roboto_Flex:Regular',sans-serif]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
              Software engineering agency based in Okitipupa, Ondo State, Nigeria. We design, build, and run reliable products and platforms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/projects"
                className="group bg-[var(--primary)] text-[#0f0f0f] px-8 py-4 rounded-xl font-['Roboto_Mono:Medium',sans-serif] font-medium text-lg uppercase inline-flex items-center justify-center gap-2 hover:opacity-90 transition-all"
              >
                View Projects
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              
              <Link
                to="/contact"
                className="bg-[var(--card-bg)] border-2 border-[var(--card-border)] text-[var(--text-primary)] px-8 py-4 rounded-xl font-['Roboto_Mono:Medium',sans-serif] font-medium text-lg uppercase inline-flex items-center justify-center hover:border-[var(--primary)] transition-colors"
              >
                Contact Us
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl lg:text-4xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[var(--primary)]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                  {companyInfo.projectsCompleted}
                </div>
                <div className="text-sm text-[var(--text-secondary)] mt-1">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[var(--primary)]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                  {companyInfo.happyClients}
                </div>
                <div className="text-sm text-[var(--text-secondary)] mt-1">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[var(--primary)]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                  {companyInfo.employees}
                </div>
                <div className="text-sm text-[var(--text-secondary)] mt-1">Team Members</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-square lg:aspect-auto lg:h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)]/20 to-transparent z-10" />
              <ImageWithFallback
                src="/telente-agency.jpg"
                alt="Telente Technologies Team"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-[var(--card-bg)] border border-[var(--card-border)] p-6 rounded-xl shadow-2xl backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="bg-[var(--primary)] p-3 rounded-lg">
                  <CheckCircle2 className="text-[#0f0f0f]" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[var(--text-primary)]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                    98%
                  </div>
                  <div className="text-sm text-[var(--text-secondary)]">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection({ services, loading, error }: { services: Service[]; loading: boolean; error: string }) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="bg-[var(--primary)]/10 text-[var(--primary)] px-4 py-2 rounded-full text-sm font-['Roboto_Mono:Medium',sans-serif] font-medium uppercase inline-block mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[var(--text-primary)] uppercase max-w-3xl mx-auto" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Software Engineering Services
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mt-4 max-w-2xl mx-auto font-['Roboto_Flex:Regular',sans-serif]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            We deliver end to end engineering to take products from discovery to launch and long term operations.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading && (
            <div className="col-span-full text-center text-[var(--text-secondary)]">Loading services...</div>
          )}
          {error && !loading && (
            <div className="col-span-full text-center text-red-500">{error}</div>
          )}
          {!loading && !error && services.map((service) => {
            const Icon = (service.icon && iconMap[service.icon]) || Code;
            const features = Array.isArray(service.features) ? service.features : [];
            return (
              <div
                key={service.id}
                className="group bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-8 hover:border-[var(--primary)] transition-all hover:-translate-y-1"
              >
                <div className="bg-[var(--primary)]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--primary)] transition-colors">
                  <Icon className="text-[var(--primary)] group-hover:text-[#0f0f0f] transition-colors" size={32} />
                </div>
                
                <h3 className="text-2xl font-['Roboto_Flex:Medium',sans-serif] font-medium text-[var(--text-primary)] uppercase mb-3" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                  {service.title}
                </h3>
                
                <p className="text-[var(--text-secondary)] mb-6 font-['Roboto_Flex:Regular',sans-serif] leading-relaxed" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-2 text-[var(--text-secondary)] text-sm">
                      <CheckCircle2 className="text-[var(--primary)]" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/services"
                  className="group/link inline-flex items-center gap-2 text-[var(--primary)] font-['Roboto_Mono:Medium',sans-serif] font-medium uppercase text-sm hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="transition-transform" size={16} />
                </Link>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="bg-[var(--card-bg)] border-2 border-[var(--card-border)] text-[var(--text-primary)] px-8 py-4 rounded-xl font-['Roboto_Mono:Medium',sans-serif] font-medium uppercase inline-flex items-center gap-2 hover:border-[var(--primary)] transition-colors"
          >
            View All Services
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function OperationsFocusSection() {
  const focusAreas = [
    {
      title: 'Operational Clarity',
      description: 'We design systems that expose real time status, metrics, and ownership.',
      icon: Workflow,
    },
    {
      title: 'Reliable Delivery',
      description: 'Software built for uptime, predictable performance, and safe data handling.',
      icon: ShieldCheck,
    },
    {
      title: 'Faster Execution',
      description: 'Automation and smart tooling help teams move faster without losing control.',
      icon: Zap,
    },
  ];

  return (
    <section className="py-20 px-4 bg-[var(--bg-secondary)]">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-12">
          <span className="bg-[var(--primary)]/10 text-[var(--primary)] px-4 py-2 rounded-full text-sm font-['Roboto_Mono:Medium',sans-serif] font-medium uppercase inline-block mb-4">
            What We Focus On
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[var(--text-primary)] uppercase max-w-4xl mx-auto" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Practical software that makes daily operations simple
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mt-4 max-w-3xl mx-auto font-['Roboto_Flex:Regular',sans-serif]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            We help teams replace manual processes with reliable systems that scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute right-6 top-6 h-12 w-12 rounded-full bg-[var(--primary)]/10" />
                <div className="bg-[var(--primary)]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Icon className="text-[var(--primary)]" size={28} />
                </div>
                <h3 className="text-xl font-['Roboto_Flex:Medium',sans-serif] font-medium text-[var(--text-primary)] uppercase mb-3" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                  {item.title}
                </h3>
                <p className="text-[var(--text-secondary)] font-['Roboto_Flex:Regular',sans-serif] leading-relaxed" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
  const reasons = [
    {
      title: 'Reliable Systems',
      description: 'We build stable software that performs under real operational pressure.',
      icon: ShieldCheck,
    },
    {
      title: 'Simple and Practical Technology',
      description: 'Tools are designed to be easy to adopt while solving the real day to day problems.',
      icon: Workflow,
    },
    {
      title: 'Built for Growing Businesses',
      description: 'We support teams scaling from startup operations to enterprise scale logistics.',
      icon: Zap,
    },
    {
      title: 'Transparency and Efficiency',
      description: 'Our products deliver visibility, trust, and faster decision making.',
      icon: CheckCircle2,
    },
  ];
  
  return (
    <section className="py-20 px-4">
      <div className="max-w-[1400px] mx-auto">
        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[var(--primary)]/10" />
          <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-[var(--primary)]/5" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[var(--text-primary)] uppercase mb-12" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
              Why Choose Telente Technologies
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div key={reason.title} className="bg-[var(--bg-secondary)] rounded-2xl p-8 border border-[var(--card-border)]">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-[var(--primary)]/10 w-12 h-12 rounded-xl flex items-center justify-center">
                        <Icon className="text-[var(--primary)]" size={24} />
                      </div>
                      <h3 className="text-xl font-['Roboto_Flex:Medium',sans-serif] font-medium text-[var(--text-primary)] uppercase" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                        {reason.title}
                      </h3>
                    </div>
                    <p className="text-[var(--text-secondary)] font-['Roboto_Flex:Regular',sans-serif] leading-relaxed" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                      {reason.description}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-[#0f0f0f] text-[var(--nav-active)] px-6 py-3 rounded-full font-['Roboto_Mono:Medium',sans-serif] uppercase hover:opacity-90 transition-opacity"
              >
                Learn More
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-[var(--card-border)] px-6 py-3 rounded-full font-['Roboto_Mono:Medium',sans-serif] uppercase text-[var(--text-primary)] hover:border-[var(--primary)] transition-colors"
              >
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection({ testimonials, loading, error }: { testimonials: Testimonial[]; loading: boolean; error: string }) {
  return (
    <section className="py-20 px-4" id="testimonials">
      <div className="max-w-[1400px] mx-auto">
        <div className="bg-[var(--card-bg)] rounded-2xl p-8 lg:p-12 mb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[var(--text-primary)] uppercase" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
              Testimonials
            </h2>
            
            <a href="#share-testimonial" className="inline-flex items-center gap-3 bg-[var(--bg-secondary)] border border-[#262626] px-6 py-4 rounded-full hover:border-[var(--primary)] transition-colors">
              <div className="p-2 bg-[#0f0f0f] border border-[#262626] rounded-full">
                <svg className="size-6" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
                  <path clipRule="evenodd" d={svgPaths.p3261280} fill="var(--nav-active, #E7BEB1)" fillRule="evenodd" />
                </svg>
              </div>
              <span className="font-['Roboto_Mono:Medium',sans-serif] font-medium text-[var(--text-secondary)] uppercase">Share a Testimonial</span>
            </a>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" id="testimonials-list">
          {loading && (
            <div className="col-span-full text-center text-[var(--text-secondary)]">Loading testimonials...</div>
          )}
          {error && !loading && (
            <div className="col-span-full text-center text-red-500">{error}</div>
          )}
          {!loading && !error && testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-[var(--card-bg)] rounded-2xl overflow-hidden flex flex-col">
              <div className="p-8 flex-1">
                <h3 className="text-xl font-['Roboto_Flex:Medium',sans-serif] font-medium text-[var(--text-primary)] uppercase mb-4" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                  {testimonial.content.split('!')[0]}!
                </h3>
                <p className="text-[var(--text-secondary)] font-['Roboto_Flex:Regular',sans-serif] leading-relaxed" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                  {testimonial.content.split('!').slice(1).join('!')}
                </p>
                <div className="mt-4 text-[var(--primary)] text-sm font-['Roboto_Mono:Medium',sans-serif] uppercase">
                  {Array.from({ length: testimonial.rating ?? 5 }, (_, i) => (
                    <span key={`${testimonial.id}-star-${i}`}>★</span>
                  ))}
                </div>
              </div>
              
              <div className="bg-[var(--bg-secondary)] px-8 py-6 flex items-center justify-between">
                <div>
                  <div className="font-['Roboto_Flex:Medium',sans-serif] font-medium text-[var(--text-primary)]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                    {testimonial.name}
                  </div>
                  {(testimonial.role || testimonial.company) && (
                    <div className="text-sm text-[var(--text-secondary)] font-['Roboto_Flex:Regular',sans-serif]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                      {testimonial.role || testimonial.company}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialSubmission({ onSubmitted }: { onSubmitted: (t: Testimonial) => void }) {
  const [form, setForm] = useState({
    name: '',
    company: '',
    rating: 5,
    content: '',
  });
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setSaving(true);
    setError('');
    setMessage('');
    try {
      const payload = {
        name: form.name.trim(),
        company: form.company.trim(),
        rating: form.rating,
        content: form.content.trim(),
      };
      const saved = await testimonialsAPI.createPublic(payload);
      onSubmitted(saved);
      setForm({ name: '', company: '', rating: 5, content: '' });
      setMessage('Thanks for your feedback. Your testimonial has been submitted.');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit testimonial.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-[var(--bg-secondary)]" id="share-testimonial">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
        <div className="space-y-4">
          <span className="bg-[var(--primary)]/10 text-[var(--primary)] px-4 py-2 rounded-full text-sm font-['Roboto_Mono:Medium',sans-serif] font-medium uppercase inline-block">
            Share Your Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[var(--text-primary)] uppercase" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Leave a Testimonial
          </h2>
          <p className="text-[var(--text-secondary)] font-['Roboto_Flex:Regular',sans-serif] leading-relaxed" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Tell us how Telente Technologies helped your team ship better software. Your feedback helps other teams choose the right engineering partner.
          </p>
        </div>

        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-8 space-y-4">
          {error && <div className="text-sm text-red-500">{error}</div>}
          {message && <div className="text-sm text-[var(--text-secondary)]">{message}</div>}
          <input
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            placeholder="Your name"
            className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-xl px-4 py-3"
          />
          <div className="grid sm:grid-cols-2 gap-3">
            <input
              value={form.company}
              onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
              placeholder="Company (optional)"
              className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-xl px-4 py-3"
            />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-[var(--text-secondary)]">Rating</span>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setForm((prev) => ({ ...prev, rating: value }))}
                  className={`h-9 w-9 rounded-lg border text-sm font-['Roboto_Mono:Medium',sans-serif] ${
                    form.rating >= value
                      ? 'bg-[var(--primary)] text-[#0f0f0f] border-[var(--primary)]'
                      : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] border-[var(--card-border)]'
                  }`}
                  aria-label={`Rate ${value}`}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
          <textarea
            value={form.content}
            onChange={(event) => setForm((prev) => ({ ...prev, content: event.target.value }))}
            placeholder="Your testimonial"
            rows={4}
            className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-xl px-4 py-3"
          />
          <button
            onClick={handleSubmit}
            disabled={saving}
            className="w-full bg-[var(--primary)] text-[#0f0f0f] px-6 py-3 rounded-xl font-['Roboto_Mono:Medium',sans-serif] uppercase disabled:opacity-60"
          >
            {saving ? 'Submitting...' : 'Submit Testimonial'}
          </button>
        </div>
      </div>
    </section>
  );
}

function VisionSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-[1200px] mx-auto text-center">
        <span className="bg-[var(--primary)]/10 text-[var(--primary)] px-4 py-2 rounded-full text-sm font-['Roboto_Mono:Medium',sans-serif] font-medium uppercase inline-block mb-4">
          Vision
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[var(--text-primary)] uppercase mb-6" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
          Building practical technology for businesses across Africa
        </h2>
        <p className="text-lg text-[var(--text-secondary)] font-['Roboto_Flex:Regular',sans-serif] leading-relaxed" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
          Our long term vision is to build a trusted ecosystem of software products that help African businesses run smarter operations, gain transparency, and scale with confidence.
        </p>
      </div>
    </section>
  );
}

function FaqSection() {
  const faqs = [
    {
      question: 'Is Telente Logistic built for small logistics teams?',
      answer: 'Yes. The platform is designed to be simple for small teams while scaling to larger operations.',
    },
    {
      question: 'Can customers track deliveries themselves?',
      answer: 'Yes. Telente Logistic supports customer updates with live status and automated notifications.',
    },
    {
      question: 'Do you offer customization for specific workflows?',
      answer: 'Yes. We tailor workflows, reports, and integrations based on business needs.',
    },
    {
      question: 'Is the product cloud based?',
      answer: 'Yes. The system is designed for reliable cloud operations with secure access.',
    },
  ];

  return (
    <section className="py-20 px-4 bg-[var(--bg-secondary)]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-10">
          <span className="bg-[var(--primary)]/10 text-[var(--primary)] px-4 py-2 rounded-full text-sm font-['Roboto_Mono:Medium',sans-serif] font-medium uppercase inline-block mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[var(--text-primary)] uppercase" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Frequently Asked Questions
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6">
              <h3 className="text-lg font-['Roboto_Flex:Medium',sans-serif] font-medium text-[var(--text-primary)] mb-2" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                {faq.question}
              </h3>
              <p className="text-[var(--text-secondary)] font-['Roboto_Flex:Regular',sans-serif]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-[1400px] mx-auto">
        <div className="bg-gradient-to-br from-[var(--primary)] to-[#a86552] rounded-3xl p-12 lg:p-20 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[#0f0f0f] uppercase mb-6" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg md:text-xl text-[#0f0f0f]/80 mb-8 max-w-2xl mx-auto font-['Roboto_Flex:Regular',sans-serif]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Let's discuss how Telente Technologies can help you achieve your product and platform goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#0f0f0f] text-[var(--nav-active)] px-8 py-4 rounded-xl font-['Roboto_Mono:Medium',sans-serif] font-medium text-lg uppercase inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              Contact Us Today
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/about"
              className="bg-white/10 backdrop-blur-sm border-2 border-[#0f0f0f]/20 text-[#0f0f0f] px-8 py-4 rounded-xl font-['Roboto_Mono:Medium',sans-serif] font-medium text-lg uppercase inline-flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [services, setServices] = useState<Service[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [servicesLoading, setServicesLoading] = useState(true);
  const [testimonialsLoading, setTestimonialsLoading] = useState(true);
  const [servicesError, setServicesError] = useState('');
  const [testimonialsError, setTestimonialsError] = useState('');

  useEffect(() => {
    let active = true;
    servicesAPI.getAll()
      .then((data) => {
        if (active) {
          setServices(Array.isArray(data) ? data : []);
        }
      })
      .catch(() => {
        if (active) setServicesError('Unable to load services right now.');
      })
      .finally(() => {
        if (active) setServicesLoading(false);
      });

    testimonialsAPI.getAll()
      .then((data) => {
        if (active) {
          setTestimonials(Array.isArray(data) ? data : []);
        }
      })
      .catch(() => {
        if (active) setTestimonialsError('Unable to load testimonials right now.');
      })
      .finally(() => {
        if (active) setTestimonialsLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <HeroSection />
      <OperationsFocusSection />
      <ServicesSection services={services} loading={servicesLoading} error={servicesError} />
      <WhyChooseUsSection />
      <TestimonialsSection testimonials={testimonials} loading={testimonialsLoading} error={testimonialsError} />
      <TestimonialSubmission onSubmitted={(testimonial) => setTestimonials((prev) => [testimonial, ...prev])} />
      <VisionSection />
      <FaqSection />
      <CTASection />
    </div>
  );
}
