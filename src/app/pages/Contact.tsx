import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { companyInfo } from '../data/mockData';
import { contactAPI } from '../services/api';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      await contactAPI.submit(formData);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-32 lg:pt-24 pb-20 px-4">
      <div className="max-w-[1400px] mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <span className="bg-[var(--primary)]/10 text-[var(--primary)] px-4 py-2 rounded-full text-sm font-['Roboto_Mono:Medium',sans-serif] font-medium uppercase inline-block mb-4">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[var(--text-primary)] uppercase mb-6" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto font-['Roboto_Flex:Regular',sans-serif]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Have a project in mind or questions about our services? We'd love to hear from you. Reach out and let's start a conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-8">
              <h2 className="text-2xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[var(--text-primary)] uppercase mb-8" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--primary)]/10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="text-[var(--primary)]" size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-['Roboto_Mono:Medium',sans-serif] font-medium text-[var(--text-primary)] uppercase mb-1">Location</div>
                    <div className="text-[var(--text-secondary)] font-['Roboto_Flex:Regular',sans-serif]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                      {companyInfo.location}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--primary)]/10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="text-[var(--primary)]" size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-['Roboto_Mono:Medium',sans-serif] font-medium text-[var(--text-primary)] uppercase mb-1">Phone</div>
                    <div className="text-[var(--text-secondary)] font-['Roboto_Flex:Regular',sans-serif]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                      {companyInfo.phone}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--primary)]/10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="text-[var(--primary)]" size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-['Roboto_Mono:Medium',sans-serif] font-medium text-[var(--text-primary)] uppercase mb-1">Email</div>
                    <div className="text-[var(--text-secondary)] font-['Roboto_Flex:Regular',sans-serif]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                      {companyInfo.email}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-8">
              <h3 className="text-xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[var(--text-primary)] uppercase mb-4" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                Office Hours
              </h3>
              <div className="space-y-2 text-[var(--text-secondary)] font-['Roboto_Flex:Regular',sans-serif]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-8">
            <h2 className="text-2xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[var(--text-primary)] uppercase mb-8" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
              Send Us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-['Roboto_Mono:Medium',sans-serif] font-medium text-[var(--text-primary)] uppercase mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:border-[var(--primary)] focus:outline-none transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-['Roboto_Mono:Medium',sans-serif] font-medium text-[var(--text-primary)] uppercase mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:border-[var(--primary)] focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-['Roboto_Mono:Medium',sans-serif] font-medium text-[var(--text-primary)] uppercase mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:border-[var(--primary)] focus:outline-none transition-colors"
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-['Roboto_Mono:Medium',sans-serif] font-medium text-[var(--text-primary)] uppercase mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:border-[var(--primary)] focus:outline-none transition-colors"
                  placeholder="What is this regarding?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-['Roboto_Mono:Medium',sans-serif] font-medium text-[var(--text-primary)] uppercase mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:border-[var(--primary)] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>
              
              {status === 'success' && (
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-green-600">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
              
              {status === 'error' && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-red-600">
                  Failed to send message. Please try again later.
                </div>
              )}
              
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-[var(--primary)] text-[#0f0f0f] px-8 py-4 rounded-xl font-['Roboto_Mono:Medium',sans-serif] font-medium text-lg uppercase inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
