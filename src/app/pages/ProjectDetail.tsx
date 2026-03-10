import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { ArrowRight, MapPin, Bell, ShieldCheck, Layers, Gauge } from 'lucide-react';
import { projectsAPI } from '../services/api';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import type { Project } from '../types/api';

const featureIcons = [MapPin, Layers, Bell, ShieldCheck, Gauge];

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) return;
    let active = true;
    projectsAPI.getById(id)
      .then((data) => {
        if (active) setProject(data);
      })
      .catch(() => {
        if (active) setError('Unable to load this product right now.');
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)] pt-32 lg:pt-24 pb-20 px-4">
        <div className="max-w-[1400px] mx-auto text-[var(--text-secondary)]">Loading product...</div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)] pt-32 lg:pt-24 pb-20 px-4">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-red-500">{error || 'Product not found.'}</div>
          <Link to="/projects" className="inline-flex items-center gap-2 text-[var(--primary)] mt-4">
            Back to Products
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    );
  }

  const technologies = Array.isArray(project.technologies) ? project.technologies : [];
  const results = Array.isArray(project.results) ? project.results : [];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-32 lg:pt-24 pb-20 px-4">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <span className="bg-[var(--primary)]/10 text-[var(--primary)] px-4 py-2 rounded-full text-sm font-['Roboto_Mono:Medium',sans-serif] font-medium uppercase inline-block">
              {project.category || 'Product'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[var(--text-primary)] uppercase" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
              {project.title}
            </h1>
            <p className="text-lg text-[var(--text-secondary)] font-['Roboto_Flex:Regular',sans-serif] leading-relaxed" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span key={tech} className="bg-[var(--bg-secondary)] px-3 py-1 rounded-lg text-sm text-[var(--text-secondary)] font-['Roboto_Mono:Medium',sans-serif]">
                  {tech}
                </span>
              ))}
            </div>
            <Link
              to="/contact"
              className="group bg-[var(--primary)] text-[#0f0f0f] px-8 py-4 rounded-xl font-['Roboto_Mono:Medium',sans-serif] font-medium text-lg uppercase inline-flex items-center justify-center gap-2 hover:opacity-90 transition-all"
            >
              Request a Demo
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-6">
            <div className="rounded-2xl border border-[var(--card-border)] bg-gradient-to-br from-[var(--primary)]/15 via-transparent to-transparent p-6">
              <div className="h-80 rounded-2xl border border-[var(--card-border)] bg-[var(--bg-secondary)] overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {(project.results || []).slice(0, 5).map((result, idx) => {
            const Icon = featureIcons[idx % featureIcons.length];
            return (
              <div key={`${result}-${idx}`} className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6">
                <div className="bg-[var(--primary)]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="text-[var(--primary)]" size={24} />
                </div>
                <h3 className="text-lg font-['Roboto_Flex:Medium',sans-serif] font-medium text-[var(--text-primary)] uppercase mb-2" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                  Outcome {idx + 1}
                </h3>
                <p className="text-[var(--text-secondary)] font-['Roboto_Flex:Regular',sans-serif]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                  {result}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-8">
            <h2 className="text-2xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[var(--text-primary)] uppercase mb-4" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
              Client
            </h2>
            <div className="text-[var(--text-secondary)] font-['Roboto_Flex:Regular',sans-serif]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
              {project.client || 'Not specified'}
            </div>
            <div className="mt-6 text-sm text-[var(--text-secondary)] uppercase font-['Roboto_Mono:Medium',sans-serif]">Results</div>
            <ul className="space-y-2 mt-2">
              {results.map((result, idx) => (
                <li key={`${result}-${idx}`} className="flex items-center gap-2 text-[var(--text-secondary)]">
                  <div className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                  {result}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-8">
            <h2 className="text-2xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[var(--text-primary)] uppercase mb-4" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
              Project Summary
            </h2>
            <p className="text-[var(--text-secondary)] font-['Roboto_Flex:Regular',sans-serif] leading-relaxed" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
              {project.testimonial || 'This engagement delivered measurable operational improvements and a foundation for long term scaling.'}
            </p>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-[var(--primary)] font-['Roboto_Mono:Medium',sans-serif] uppercase text-sm"
              >
                Talk to our team
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-3xl p-10 text-center">
          <h3 className="text-2xl md:text-3xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[var(--text-primary)] uppercase mb-4" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Want a similar product for your business?
          </h3>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[var(--primary)] text-[#0f0f0f] px-8 py-4 rounded-xl font-['Roboto_Mono:Medium',sans-serif] font-medium text-lg uppercase"
          >
            Request a Demo
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
