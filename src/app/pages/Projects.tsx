import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { projectsAPI } from '../services/api';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import type { Project } from '../types/api';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const categories = useMemo(() => {
    const unique = new Set<string>();
    projects.forEach((project) => {
      if (project.category) {
        unique.add(project.category);
      }
    });
    return ['All', ...Array.from(unique)];
  }, [projects]);

  useEffect(() => {
    let active = true;
    projectsAPI.getAll()
      .then((data) => {
        if (active) setProjects(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        if (active) setError('Unable to load projects right now.');
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-32 lg:pt-24 pb-20 px-4">
      <div className="max-w-[1400px] mx-auto">
        {/* Hero */}
        <div className="text-center mb-12">
          <span className="bg-[var(--primary)]/10 text-[var(--primary)] px-4 py-2 rounded-full text-sm font-['Roboto_Mono:Medium',sans-serif] font-medium uppercase inline-block mb-4">
            Our Work
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[var(--text-primary)] uppercase mb-6" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Featured Projects
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto font-['Roboto_Flex:Regular',sans-serif]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Explore our portfolio of successful projects delivered to clients across various industries.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-xl font-['Roboto_Mono:Medium',sans-serif] font-medium uppercase transition-all ${
                filter === cat
                  ? 'bg-[var(--primary)] text-[#0f0f0f]'
                  : 'bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--text-secondary)] hover:border-[var(--primary)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {loading && (
            <div className="col-span-full text-center text-[var(--text-secondary)]">Loading projects...</div>
          )}
          {error && !loading && (
            <div className="col-span-full text-center text-red-500">{error}</div>
          )}
          {!loading && !error && filteredProjects.map(project => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl overflow-hidden hover:border-[var(--primary)] transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[var(--primary)] text-[#0f0f0f] px-4 py-2 rounded-lg text-sm font-['Roboto_Mono:Medium',sans-serif] font-medium uppercase">
                  {project.category}
                </div>
              </div>
              
              <div className="p-8">
                <div className="text-sm text-[var(--text-secondary)] mb-2 font-['Roboto_Mono:Medium',sans-serif] uppercase">
                  Client: {project.client || 'Not specified'}
                </div>
                <h3 className="text-2xl font-['Roboto_Flex:Medium',sans-serif] font-medium text-[var(--text-primary)] uppercase mb-4" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                  {project.title}
                </h3>
                
                <p className="text-[var(--text-secondary)] mb-6 font-['Roboto_Flex:Regular',sans-serif] leading-relaxed" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {(Array.isArray(project.technologies) ? project.technologies : []).map((tech: string) => (
                    <span
                      key={tech}
                      className="bg-[var(--bg-secondary)] px-3 py-1 rounded-lg text-sm text-[var(--text-secondary)] font-['Roboto_Mono:Medium',sans-serif]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="border-t border-[var(--card-border)] pt-6 space-y-2">
                  <div className="text-sm font-['Roboto_Mono:Medium',sans-serif] font-medium text-[var(--text-primary)] uppercase">Results:</div>
                  {(Array.isArray(project.results) ? project.results : []).map((result: string, idx: number) => (
                    <div key={`${result}-${idx}`} className="flex items-center gap-2 text-[var(--text-secondary)] text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
                      {result}
                    </div>
                  ))}
                </div>

                <div className="pt-6 text-[var(--primary)] font-['Roboto_Mono:Medium',sans-serif] uppercase text-sm inline-flex items-center gap-2">
                  View Product
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-[var(--primary)] to-[#a86552] rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[#0f0f0f] uppercase mb-4" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Have a Project in Mind?
          </h2>
          <p className="text-lg text-[#0f0f0f]/80 mb-8 max-w-2xl mx-auto font-['Roboto_Flex:Regular',sans-serif]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Let's bring your vision to life. Contact us to discuss your project requirements.
          </p>
          <Link
            to="/contact"
            className="bg-[#0f0f0f] text-[var(--nav-active)] px-8 py-4 rounded-xl font-['Roboto_Mono:Medium',sans-serif] font-medium text-lg uppercase inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            Start Your Project
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
