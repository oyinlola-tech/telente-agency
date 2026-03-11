import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight, Target, Eye, Award, Users } from 'lucide-react';
import { companyInfo } from '../data/mockData';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { teamAPI } from '../services/api';
import type { TeamMember } from '../types/api';

export default function About() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;
    teamAPI.getAll()
      .then((data) => {
        if (active) setTeam(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        if (active) setError('Unable to load team members right now.');
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
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[var(--text-primary)] uppercase mb-6" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            {companyInfo.name}
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto font-['Roboto_Flex:Regular',sans-serif]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Telente Technologies was founded with a simple belief: Technology should make everyday operations easier, smarter, and more transparent. In many parts of Africa, businesses still struggle with inefficient systems, poor tracking, and limited access to reliable digital tools. These gaps slow down growth and make it difficult for companies to operate with confidence.
          </p>
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[var(--text-primary)] uppercase" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
              Our Story
            </h2>
            <p className="text-lg text-[var(--text-secondary)] font-['Roboto_Flex:Regular',sans-serif] leading-relaxed" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
              Telente Technologies was created to change that. The company focuses on building practical technology solutions that help businesses manage their operations more efficiently. Rather than creating complicated systems that are difficult to adopt, Telente designs simple, reliable, and scalable digital tools that solve real problems.
            </p>
            <p className="text-lg text-[var(--text-secondary)] font-['Roboto_Flex:Regular',sans-serif] leading-relaxed" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
              One of the key areas Telente is focused on is logistics and operational tracking. Many logistics businesses and delivery services face challenges such as lack of real time visibility, poor communication between dispatch and customers, and limited tracking systems. These issues often lead to delays, confusion, and loss of trust.
            </p>
            <p className="text-lg text-[var(--text-secondary)] font-['Roboto_Flex:Regular',sans-serif] leading-relaxed" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
              To address this problem, Telente developed Telente Logistic, a modern logistics tracking platform designed to give businesses better control and transparency over their delivery operations. The platform allows companies to track movement, manage updates from a central admin system, and keep customers informed through automated notifications and map based tracking.
            </p>
            <p className="text-lg text-[var(--text-secondary)] font-['Roboto_Flex:Regular',sans-serif] leading-relaxed" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
              Beyond logistics, Telente Technologies aims to build a broader ecosystem of digital solutions that support growing businesses, startups, and organizations that need reliable technology infrastructure to scale. At its core, Telente believes that innovation should not be limited to large global corporations. Businesses in emerging markets deserve the same level of efficiency, clarity, and technological support.
            </p>
            <p className="text-lg text-[var(--text-secondary)] font-['Roboto_Flex:Regular',sans-serif] leading-relaxed" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
              By combining thoughtful design with practical functionality, Telente Technologies is committed to creating solutions that empower businesses to move faster, operate smarter, and serve their customers better.
            </p>
          </div>
          
          <div className="rounded-2xl overflow-hidden h-96">
            <ImageWithFallback
              src="/telente.about.jpg"
              alt="Telente Technologies Office"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-10">
            <div className="bg-[var(--primary)]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Target className="text-[var(--primary)]" size={32} />
            </div>
            <h3 className="text-2xl font-['Roboto_Flex:Medium',sans-serif] font-medium text-[var(--text-primary)] uppercase mb-4" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
              Our Mission
            </h3>
            <p className="text-[var(--text-secondary)] font-['Roboto_Flex:Regular',sans-serif] leading-relaxed" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
              To build practical and reliable technology solutions that simplify operations, improve transparency, and empower businesses to grow with confidence.
            </p>
          </div>
          
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-10">
            <div className="bg-[var(--primary)]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Eye className="text-[var(--primary)]" size={32} />
            </div>
            <h3 className="text-2xl font-['Roboto_Flex:Medium',sans-serif] font-medium text-[var(--text-primary)] uppercase mb-4" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
              Our Vision
            </h3>
            <p className="text-[var(--text-secondary)] font-['Roboto_Flex:Regular',sans-serif] leading-relaxed" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
              To become a trusted technology partner for businesses across Africa, delivering innovative digital tools that transform how companies manage logistics, operations, and digital infrastructure.
            </p>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[var(--text-primary)] uppercase mb-4" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
              Meet Our Team
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto font-['Roboto_Flex:Regular',sans-serif]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
              Talented professionals dedicated to delivering exceptional results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {loading && (
              <div className="col-span-full text-center text-[var(--text-secondary)]">Loading team...</div>
            )}
            {error && !loading && (
              <div className="col-span-full text-center text-red-500">{error}</div>
            )}
            {!loading && !error && team.map(member => (
              <div key={member.id} className="group bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl overflow-hidden hover:border-[var(--primary)] transition-all">
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-['Roboto_Flex:Medium',sans-serif] font-medium text-[var(--text-primary)] mb-1" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                    {member.name}
                  </h3>
                  <div className="text-sm text-[var(--primary)] font-['Roboto_Mono:Medium',sans-serif] uppercase mb-3">
                    {member.role}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] font-['Roboto_Flex:Regular',sans-serif]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-[var(--primary)] to-[#a86552] rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[#0f0f0f] uppercase mb-4" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Join Our Journey
          </h2>
          <p className="text-lg text-[#0f0f0f]/80 mb-8 max-w-2xl mx-auto font-['Roboto_Flex:Regular',sans-serif]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            We're always looking for talented individuals to join our team
          </p>
          <Link
            to="/careers"
            className="bg-[#0f0f0f] text-[var(--nav-active)] px-8 py-4 rounded-xl font-['Roboto_Mono:Medium',sans-serif] font-medium text-lg uppercase inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            View Open Positions
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
