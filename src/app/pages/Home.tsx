import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight, Code, Smartphone, Palette, Cloud, TrendingUp, Users, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '../data/mockData';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import svgPaths from "../../imports/svg-o2qg4vmwj9";
import { servicesAPI, testimonialsAPI } from '../services/api';

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
                Okitipupa's Premier Tech Agency
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[var(--text-primary)] leading-tight uppercase" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
              Building Digital Solutions for Tomorrow
            </h1>
            
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed font-['Roboto_Flex:Regular',sans-serif]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
              Leading web and application engineering agency based in Okitipupa, Ondo State, Nigeria. We transform ideas into powerful digital experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="group bg-[var(--primary)] text-[#0f0f0f] px-8 py-4 rounded-xl font-['Roboto_Mono:Medium',sans-serif] font-medium text-lg uppercase inline-flex items-center justify-center gap-2 hover:opacity-90 transition-all"
              >
                Get Started
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              
              <Link
                to="/projects"
                className="bg-[var(--card-bg)] border-2 border-[var(--card-border)] text-[var(--text-primary)] px-8 py-4 rounded-xl font-['Roboto_Mono:Medium',sans-serif] font-medium text-lg uppercase inline-flex items-center justify-center hover:border-[var(--primary)] transition-colors"
              >
                View Projects
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
                src="https://images.unsplash.com/photo-1540058404349-2e5fabf32d75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlcnMlMjB0ZWFtd29yayUyMG9mZmljZSUyMG5pZ2VyaWF8ZW58MXx8fHwxNzczMTIyNjE1fDA&ixlib=rb-4.1.0&q=80&w=1080"
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

function ServicesSection({ services, loading, error }: { services: any[]; loading: boolean; error: string }) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="bg-[var(--primary)]/10 text-[var(--primary)] px-4 py-2 rounded-full text-sm font-['Roboto_Mono:Medium',sans-serif] font-medium uppercase inline-block mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[var(--text-primary)] uppercase max-w-3xl mx-auto" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Comprehensive Digital Solutions
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mt-4 max-w-2xl mx-auto font-['Roboto_Flex:Regular',sans-serif]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            We offer a full range of technology services to help your business succeed in the digital world.
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
            const Icon = iconMap[service.icon] || Code;
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

function WhyChooseUsSection() {
  const reasons = [
    {
      title: 'Expertise in Cutting-Edge Technologies',
      description: 'Telente Technologies ensures your projects are powered by state-of-the-art technologies, guaranteeing innovation and future-proof solutions.',
    },
    {
      title: 'Proven Track Record of Success',
      description: 'We demonstrate a consistent ability to meet and exceed client expectations, providing reliable and effective solutions tailored to diverse needs.',
    },
    {
      title: 'Client-Centric Approach',
      description: 'At Telente Technologies, we prioritize understanding our clients\' unique requirements, fostering transparent communication throughout the development process.',
    },
    {
      title: 'Dedicated Team of Professionals',
      description: 'Our professionals bring a wealth of expertise to the table, ensuring the delivery of top-notch, scalable, and secure solutions for your business.',
    },
  ];
  
  return (
    <section className="py-20 px-4">
      <div className="max-w-[1400px] mx-auto">
        <div className="bg-[var(--card-bg)] border-2 border-[var(--card-border)] rounded-3xl p-8 lg:p-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[var(--text-primary)] uppercase mb-12" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Reasons to Choose Telente Technologies for Your Digital Journey
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((reason, idx) => (
              <div key={idx} className="bg-[var(--bg-secondary)] rounded-2xl p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-['Roboto_Flex:Medium',sans-serif] font-medium text-[var(--text-primary)] uppercase mb-3" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                    {reason.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] font-['Roboto_Flex:Regular',sans-serif] leading-relaxed" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                    {reason.description}
                  </p>
                </div>
                
                <button className="inline-flex items-center gap-2 bg-[#0f0f0f] border border-[#262626] text-[var(--nav-active)] px-6 py-3 rounded-full font-['Roboto_Flex:Regular',sans-serif] hover:border-[var(--primary)] transition-colors">
                  <div className="p-2 bg-[#0f0f0f] border border-[#262626] rounded-full">
                    <svg className="size-6" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
                      <path clipRule="evenodd" d={svgPaths.p3261280} fill="var(--nav-active, #E7BEB1)" fillRule="evenodd" />
                    </svg>
                  </div>
                  <span>Learn More</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection({ testimonials, loading, error }: { testimonials: any[]; loading: boolean; error: string }) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-[1400px] mx-auto">
        <div className="bg-[var(--card-bg)] rounded-2xl p-8 lg:p-12 mb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[var(--text-primary)] uppercase" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
              Testimonials
            </h2>
            
            <button className="inline-flex items-center gap-3 bg-[var(--bg-secondary)] border border-[#262626] px-6 py-4 rounded-full hover:border-[var(--primary)] transition-colors">
              <div className="p-2 bg-[#0f0f0f] border border-[#262626] rounded-full">
                <svg className="size-6" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
                  <path clipRule="evenodd" d={svgPaths.p3261280} fill="var(--nav-active, #E7BEB1)" fillRule="evenodd" />
                </svg>
              </div>
              <span className="font-['Roboto_Mono:Medium',sans-serif] font-medium text-[var(--text-secondary)] uppercase">All Testimonials</span>
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              </div>
              
              <div className="bg-[var(--bg-secondary)] px-8 py-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-[var(--primary)]">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-['Roboto_Flex:Medium',sans-serif] font-medium text-[var(--text-primary)]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-[var(--text-secondary)] font-['Roboto_Flex:Regular',sans-serif]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                
                <button className="p-3 bg-[var(--card-bg)] border border-[#333] rounded-full hover:border-[var(--primary)] transition-colors">
                  <svg className="size-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d={svgPaths.p2e1cc100} stroke="var(--nav-active, #E7BEB1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </button>
              </div>
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
            Let's discuss how Telente Technologies can help you achieve your digital goals.
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
  const [services, setServices] = useState<any[]>([]);
  const [testimonials, setTestimonials] = useState<any[]>([]);
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
      <ServicesSection services={services} loading={servicesLoading} error={servicesError} />
      <WhyChooseUsSection />
      <TestimonialsSection testimonials={testimonials} loading={testimonialsLoading} error={testimonialsError} />
      <CTASection />
    </div>
  );
}
