import { Link, useLocation } from 'react-router';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'About', path: '/about' },
    { label: 'Careers', path: '/careers' },
    { label: 'Blogs', path: '/blogs' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden lg:block fixed left-1/2 -translate-x-1/2 top-[30px] z-50 w-[95%] max-w-[1820px]">
        <div className="bg-[var(--nav-bg)] border border-[var(--nav-border)] content-stretch flex items-center justify-between pl-[50px] pr-[24px] py-[24px] rounded-[16px] backdrop-blur-sm">
          <Link to="/">
            <Logo />
          </Link>
          
          <div className="content-stretch flex gap-[16px] items-center">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-[24px] py-[18px] rounded-[12px] font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] text-[18px] text-center uppercase whitespace-nowrap transition-colors ${
                  isActive(item.path)
                    ? 'bg-[#0f0f0f] text-[var(--nav-active)]'
                    : 'bg-[#0f0f0f] text-[var(--nav-inactive)] hover:text-[var(--nav-active)]'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            <Link
              to="/contact"
              className="bg-[var(--primary)] px-[24px] py-[18px] rounded-[12px] font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] text-[#0f0f0f] text-[18px] text-center uppercase whitespace-nowrap hover:opacity-90 transition-opacity"
            >
              Contact Us
            </Link>
            
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[var(--nav-bg)] border-b border-[var(--nav-border)] backdrop-blur-sm">
        <div className="flex items-center justify-between px-4 py-4">
          <Link to="/">
            <Logo />
          </Link>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="bg-[#0f0f0f] p-3 rounded-[12px] text-[var(--nav-active)]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="bg-[var(--nav-bg)] border-t border-[var(--nav-border)] px-4 py-4">
            <div className="flex flex-col gap-2">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-[12px] font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] text-[16px] uppercase transition-colors ${
                    isActive(item.path)
                      ? 'bg-[#0f0f0f] text-[var(--nav-active)]'
                      : 'bg-[#0f0f0f] text-[var(--nav-inactive)]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-[var(--primary)] px-4 py-3 rounded-[12px] font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] text-[#0f0f0f] text-[16px] uppercase"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
