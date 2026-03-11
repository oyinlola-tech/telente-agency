import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import { Logo } from './Logo';
import { appConfig } from '../config/appConfig';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { servicesAPI } from '../services/api';
import type { Service } from '../types/api';

export function Footer() {
  const [services, setServices] = useState<Service[]>([]);
  const [servicesError, setServicesError] = useState('');

  useEffect(() => {
    let active = true;
    servicesAPI.getAll()
      .then((data) => {
        if (active) setServices(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        if (active) setServicesError('Unable to load services right now.');
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <footer className="bg-[var(--nav-bg)] border-t border-[var(--nav-border)] mt-20">
      <div className="max-w-[1820px] mx-auto px-4 md:px-8 lg:px-[50px] py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo />
            <p className="text-[var(--text-secondary)] text-[16px] leading-[1.6] mt-4" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
              Software engineering agency based in Okitipupa, Ondo State, Nigeria. Building reliable products, platforms, and cloud systems for growing businesses.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="https://facebook.com/share/1FtGkb9dtR/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="bg-[#0f0f0f] p-2 rounded-lg text-[var(--nav-active)] hover:opacity-80 transition-opacity">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com/oyinlola141" target="_blank" rel="noopener noreferrer" className="bg-[#0f0f0f] p-2 rounded-lg text-[var(--nav-active)] hover:opacity-80 transition-opacity">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com/oyinlola.eth" target="_blank" rel="noopener noreferrer" className="bg-[#0f0f0f] p-2 rounded-lg text-[var(--nav-active)] hover:opacity-80 transition-opacity">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com/in/oluwayemioyinlola" target="_blank" rel="noopener noreferrer" className="bg-[#0f0f0f] p-2 rounded-lg text-[var(--nav-active)] hover:opacity-80 transition-opacity">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[var(--text-primary)] text-[20px] uppercase mb-4" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-[var(--text-secondary)] hover:text-[var(--nav-active)] transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-[var(--text-secondary)] hover:text-[var(--nav-active)] transition-colors">Services</Link></li>
              <li><Link to="/projects" className="text-[var(--text-secondary)] hover:text-[var(--nav-active)] transition-colors">Projects</Link></li>
              <li><Link to="/about" className="text-[var(--text-secondary)] hover:text-[var(--nav-active)] transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-[var(--text-secondary)] hover:text-[var(--nav-active)] transition-colors">Careers</Link></li>
              <li><Link to="/blogs" className="text-[var(--text-secondary)] hover:text-[var(--nav-active)] transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[var(--text-primary)] text-[20px] uppercase mb-4" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
              Our Services
            </h3>
            <ul className="space-y-3">
              {servicesError && (
                <li className="text-[var(--text-secondary)]">{servicesError}</li>
              )}
              {!servicesError && services.length === 0 && (
                <li className="text-[var(--text-secondary)]">No services yet.</li>
              )}
              {!servicesError && services.slice(0, 6).map((service) => (
                <li key={service.id} className="text-[var(--text-secondary)]">
                  {service.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[var(--text-primary)] text-[20px] uppercase mb-4" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-[var(--text-secondary)]">
                <MapPin size={20} className="shrink-0 mt-1 text-[var(--nav-active)]" />
                <span>Okitipupa, Ondo State, Nigeria</span>
              </li>
              <li className="flex items-center gap-2 text-[var(--text-secondary)]">
                <Phone size={20} className="shrink-0 text-[var(--nav-active)]" />
                <span>+234 913 351 9489</span>
              </li>
              <li className="flex items-center gap-2 text-[var(--text-secondary)]">
                <Mail size={20} className="shrink-0 text-[var(--nav-active)]" />
                <span>info@telente.site</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--nav-border)] mt-12 pt-8 text-center">
          <p className="text-[var(--text-secondary)] text-[14px]">
            © 2026 {appConfig.companyName}. All rights reserved. | Crafted in Okitipupa, Ondo State
          </p>
        </div>
      </div>
    </footer>
  );
}
