import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { blogsAPI } from '../services/api';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Blogs() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;
    blogsAPI.getAll()
      .then((data) => {
        if (active) setBlogs(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        if (active) setError('Unable to load blogs right now.');
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
            Our Blog
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[var(--text-primary)] uppercase mb-6" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Insights & Updates
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto font-['Roboto_Flex:Regular',sans-serif]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Stay updated with the latest in technology, development trends, and industry insights from our team.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading && (
            <div className="col-span-full text-center text-[var(--text-secondary)]">Loading blogs...</div>
          )}
          {error && !loading && (
            <div className="col-span-full text-center text-red-500">{error}</div>
          )}
          {!loading && !error && blogs.map(blog => (
            <article key={blog.id} className="group bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl overflow-hidden hover:border-[var(--primary)] transition-all">
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[var(--primary)] text-[#0f0f0f] px-4 py-2 rounded-lg text-sm font-['Roboto_Mono:Medium',sans-serif] font-medium uppercase">
                  {blog.category}
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)] mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-['Roboto_Flex:Medium',sans-serif] font-medium text-[var(--text-primary)] uppercase mb-3 line-clamp-2" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                  {blog.title}
                </h3>
                
                <p className="text-[var(--text-secondary)] mb-6 font-['Roboto_Flex:Regular',sans-serif] leading-relaxed line-clamp-3" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
                  {blog.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-[var(--card-border)]">
                  <div className="flex items-center gap-2">
                    <User size={16} className="text-[var(--primary)]" />
                    <div>
                      <div className="text-sm font-['Roboto_Flex:Medium',sans-serif] text-[var(--text-primary)]">{blog.author}</div>
                      <div className="text-xs text-[var(--text-secondary)]">{blog.authorRole}</div>
                    </div>
                  </div>
                  
                  <button className="text-[var(--primary)] hover:gap-2 inline-flex items-center gap-1 transition-all">
                    <span className="font-['Roboto_Mono:Medium',sans-serif] font-medium uppercase text-sm">Read</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
