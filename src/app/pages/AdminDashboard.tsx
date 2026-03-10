
import { useEffect, useMemo, useState } from 'react';
import { Navigate, Link } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import {
  LayoutDashboard, Briefcase, FolderOpen, FileText, Users,
  MessageSquare, Settings, LogOut, Menu, X, Moon, Sun,
  Edit2, Trash2, RefreshCw,
} from 'lucide-react';
import { Logo } from '../components/Logo';
import { appConfig } from '../config/appConfig';
import {
  servicesAPI,
  projectsAPI,
  blogsAPI,
  teamAPI,
  contactAPI,
  settingsAPI,
} from '../services/api';

const emptyState = {
  error: '',
  loading: true,
};

function parseList(value: string) {
  return value
    .split('\n')
    .map((item) => item.trim())
    .filter(Boolean);
}

function formatList(value: string[] | undefined) {
  return Array.isArray(value) ? value.join('\n') : '';
}

function useResourceList(fetcher: () => Promise<any[]>) {
  const [state, setState] = useState({ ...emptyState, data: [] as any[] });

  const load = async () => {
    setState((prev) => ({ ...prev, loading: true, error: '' }));
    try {
      const data = await fetcher();
      setState({ data, loading: false, error: '' });
    } catch (err) {
      setState({ data: [], loading: false, error: 'Failed to load data.' });
    }
  };

  useEffect(() => {
    load();
  }, []);

  return { ...state, reload: load };
}

function SectionHeader({ title, action }: { title: string; action?: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <h2 className="text-2xl md:text-3xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[var(--text-primary)] uppercase">
        {title}
      </h2>
      {action}
    </div>
  );
}

function InfoBanner({ message }: { message: string }) {
  return (
    <div className="bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-2xl p-4 text-sm text-[var(--text-secondary)]">
      {message}
    </div>
  );
}

function OverviewTab() {
  const [stats, setStats] = useState([
    { label: 'Services', value: '0' },
    { label: 'Projects', value: '0' },
    { label: 'Blog Posts', value: '0' },
    { label: 'Team Members', value: '0' },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const [services, projects, blogs, team] = await Promise.all([
          servicesAPI.getAll(),
          projectsAPI.getAll(),
          blogsAPI.getAll(),
          teamAPI.getAll(),
        ]);
        if (!active) return;
        setStats([
          { label: 'Services', value: String(services.length) },
          { label: 'Projects', value: String(projects.length) },
          { label: 'Blog Posts', value: String(blogs.length) },
          { label: 'Team Members', value: String(team.length) },
        ]);
      } finally {
        if (active) setLoading(false);
      }
    };
    load();
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="space-y-6">
      <SectionHeader title="Overview" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6">
            <div className="text-sm text-[var(--text-secondary)] mb-2 font-['Roboto_Mono:Medium',sans-serif] uppercase">
              {stat.label}
            </div>
            <div className="text-4xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[var(--text-primary)]">
              {loading ? '...' : stat.value}
            </div>
          </div>
        ))}
      </div>

      <InfoBanner message="Overview data is pulled from the live API. Add or update content to see counts change." />
    </div>
  );
}

function ServicesTab() {
  const { data, loading, error, reload } = useResourceList(servicesAPI.getAll);
  const [form, setForm] = useState({ title: '', description: '', icon: '', features: '' });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const resetForm = () => {
    setForm({ title: '', description: '', icon: '', features: '' });
    setEditingId(null);
  };

  const handleSubmit = async () => {
    setSaving(true);
    try {
      const payload = {
        title: form.title,
        description: form.description,
        icon: form.icon,
        features: parseList(form.features),
      };
      if (editingId) {
        await servicesAPI.update(editingId, payload);
      } else {
        await servicesAPI.create(payload);
      }
      resetForm();
      await reload();
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <SectionHeader
        title="Manage Services"
        action={
          <button
            onClick={() => resetForm()}
            className="bg-[var(--bg-secondary)] border border-[var(--card-border)] text-[var(--text-primary)] px-5 py-3 rounded-xl font-['Roboto_Mono:Medium',sans-serif] uppercase inline-flex items-center gap-2"
          >
            <RefreshCw size={18} />
            Clear
          </button>
        }
      />

      {error && <InfoBanner message={error} />}

      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-[var(--card-border)] flex items-center justify-between">
            <div className="text-sm text-[var(--text-secondary)] font-['Roboto_Mono:Medium',sans-serif] uppercase">Services List</div>
            <button
              onClick={reload}
              className="text-xs uppercase font-['Roboto_Mono:Medium',sans-serif] text-[var(--primary)]"
            >
              Refresh
            </button>
          </div>
          <div className="divide-y divide-[var(--card-border)]">
            {loading && <div className="p-6 text-sm text-[var(--text-secondary)]">Loading services...</div>}
            {!loading && data.length === 0 && <div className="p-6 text-sm text-[var(--text-secondary)]">No services yet.</div>}
            {data.map((service) => (
              <div key={service.id} className="p-6 flex items-start justify-between gap-4">
                <div>
                  <div className="text-lg font-['Roboto_Flex:Medium',sans-serif] text-[var(--text-primary)]">
                    {service.title}
                  </div>
                  <div className="text-sm text-[var(--text-secondary)] mt-1">
                    {service.description}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setEditingId(service.id);
                      setForm({
                        title: service.title || '',
                        description: service.description || '',
                        icon: service.icon || '',
                        features: formatList(service.features),
                      });
                    }}
                    className="p-2 text-[var(--text-secondary)] hover:text-[var(--primary)]"
                  >
                    <Edit2 size={18} />
                  </button>
                  <button
                    onClick={async () => {
                      await servicesAPI.delete(service.id);
                      reload();
                    }}
                    className="p-2 text-[var(--text-secondary)] hover:text-red-500"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6">
          <h3 className="text-lg font-['Roboto_Flex:Medium',sans-serif] text-[var(--text-primary)] uppercase mb-4">
            {editingId ? 'Edit Service' : 'Add Service'}
          </h3>
          <div className="space-y-4">
            <input
              value={form.title}
              onChange={(event) => setForm((prev) => ({ ...prev, title: event.target.value }))}
              placeholder="Service title"
              className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-xl px-4 py-3"
            />
            <textarea
              value={form.description}
              onChange={(event) => setForm((prev) => ({ ...prev, description: event.target.value }))}
              placeholder="Service description"
              rows={4}
              className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-xl px-4 py-3"
            />
            <input
              value={form.icon}
              onChange={(event) => setForm((prev) => ({ ...prev, icon: event.target.value }))}
              placeholder="Icon key (e.g., Code, Cloud)"
              className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-xl px-4 py-3"
            />
            <textarea
              value={form.features}
              onChange={(event) => setForm((prev) => ({ ...prev, features: event.target.value }))}
              placeholder="Features (one per line)"
              rows={4}
              className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-xl px-4 py-3"
            />
            <button
              onClick={handleSubmit}
              disabled={saving}
              className="w-full bg-[var(--primary)] text-[#0f0f0f] px-6 py-3 rounded-xl font-['Roboto_Mono:Medium',sans-serif] uppercase disabled:opacity-60"
            >
              {saving ? 'Saving...' : editingId ? 'Update Service' : 'Create Service'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectsTab() {
  const { data, loading, error, reload } = useResourceList(projectsAPI.getAll);
  const [form, setForm] = useState({
    title: '',
    client: '',
    category: '',
    description: '',
    technologies: '',
    image: '',
    testimonial: '',
    results: '',
  });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const resetForm = () => {
    setForm({
      title: '',
      client: '',
      category: '',
      description: '',
      technologies: '',
      image: '',
      testimonial: '',
      results: '',
    });
    setEditingId(null);
  };

  const handleSubmit = async () => {
    setSaving(true);
    try {
      const payload = {
        title: form.title,
        client: form.client,
        category: form.category,
        description: form.description,
        technologies: parseList(form.technologies),
        image: form.image,
        testimonial: form.testimonial,
        results: parseList(form.results),
      };
      if (editingId) {
        await projectsAPI.update(editingId, payload);
      } else {
        await projectsAPI.create(payload);
      }
      resetForm();
      await reload();
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <SectionHeader
        title="Manage Projects"
        action={
          <button
            onClick={() => resetForm()}
            className="bg-[var(--bg-secondary)] border border-[var(--card-border)] text-[var(--text-primary)] px-5 py-3 rounded-xl font-['Roboto_Mono:Medium',sans-serif] uppercase inline-flex items-center gap-2"
          >
            <RefreshCw size={18} />
            Clear
          </button>
        }
      />

      {error && <InfoBanner message={error} />}

      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-[var(--card-border)] flex items-center justify-between">
            <div className="text-sm text-[var(--text-secondary)] font-['Roboto_Mono:Medium',sans-serif] uppercase">Projects List</div>
            <button
              onClick={reload}
              className="text-xs uppercase font-['Roboto_Mono:Medium',sans-serif] text-[var(--primary)]"
            >
              Refresh
            </button>
          </div>
          <div className="divide-y divide-[var(--card-border)]">
            {loading && <div className="p-6 text-sm text-[var(--text-secondary)]">Loading projects...</div>}
            {!loading && data.length === 0 && <div className="p-6 text-sm text-[var(--text-secondary)]">No projects yet.</div>}
            {data.map((project) => (
              <div key={project.id} className="p-6 flex items-start justify-between gap-4">
                <div>
                  <div className="text-lg font-['Roboto_Flex:Medium',sans-serif] text-[var(--text-primary)]">
                    {project.title}
                  </div>
                  <div className="text-sm text-[var(--text-secondary)] mt-1">
                    {project.client || 'Client not specified'} · {project.category || 'General'}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setEditingId(project.id);
                      setForm({
                        title: project.title || '',
                        client: project.client || '',
                        category: project.category || '',
                        description: project.description || '',
                        technologies: formatList(project.technologies),
                        image: project.image || '',
                        testimonial: project.testimonial || '',
                        results: formatList(project.results),
                      });
                    }}
                    className="p-2 text-[var(--text-secondary)] hover:text-[var(--primary)]"
                  >
                    <Edit2 size={18} />
                  </button>
                  <button
                    onClick={async () => {
                      await projectsAPI.delete(project.id);
                      reload();
                    }}
                    className="p-2 text-[var(--text-secondary)] hover:text-red-500"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6">
          <h3 className="text-lg font-['Roboto_Flex:Medium',sans-serif] text-[var(--text-primary)] uppercase mb-4">
            {editingId ? 'Edit Project' : 'Add Project'}
          </h3>
          <div className="space-y-4">
            <input
              value={form.title}
              onChange={(event) => setForm((prev) => ({ ...prev, title: event.target.value }))}
              placeholder="Project title"
              className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-xl px-4 py-3"
            />
            <input
              value={form.client}
              onChange={(event) => setForm((prev) => ({ ...prev, client: event.target.value }))}
              placeholder="Client"
              className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-xl px-4 py-3"
            />
            <input
              value={form.category}
              onChange={(event) => setForm((prev) => ({ ...prev, category: event.target.value }))}
              placeholder="Category"
              className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-xl px-4 py-3"
            />
            <textarea
              value={form.description}
              onChange={(event) => setForm((prev) => ({ ...prev, description: event.target.value }))}
              placeholder="Project description"
              rows={3}
              className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-xl px-4 py-3"
            />
            <textarea
              value={form.technologies}
              onChange={(event) => setForm((prev) => ({ ...prev, technologies: event.target.value }))}
              placeholder="Technologies (one per line)"
              rows={3}
              className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-xl px-4 py-3"
            />
            <input
              value={form.image}
              onChange={(event) => setForm((prev) => ({ ...prev, image: event.target.value }))}
              placeholder="Image URL"
              className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-xl px-4 py-3"
            />
            <textarea
              value={form.testimonial}
              onChange={(event) => setForm((prev) => ({ ...prev, testimonial: event.target.value }))}
              placeholder="Client testimonial"
              rows={2}
              className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-xl px-4 py-3"
            />
            <textarea
              value={form.results}
              onChange={(event) => setForm((prev) => ({ ...prev, results: event.target.value }))}
              placeholder="Results (one per line)"
              rows={3}
              className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-xl px-4 py-3"
            />
            <button
              onClick={handleSubmit}
              disabled={saving}
              className="w-full bg-[var(--primary)] text-[#0f0f0f] px-6 py-3 rounded-xl font-['Roboto_Mono:Medium',sans-serif] uppercase disabled:opacity-60"
            >
              {saving ? 'Saving...' : editingId ? 'Update Project' : 'Create Project'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlogsTab() {
  const { data, loading, error, reload } = useResourceList(blogsAPI.getAll);
  const [form, setForm] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    authorRole: '',
    category: '',
    readTime: '',
    image: '',
    tags: '',
  });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const resetForm = () => {
    setForm({
      title: '',
      excerpt: '',
      content: '',
      author: '',
      authorRole: '',
      category: '',
      readTime: '',
      image: '',
      tags: '',
    });
    setEditingId(null);
  };

  const handleSubmit = async () => {
    setSaving(true);
    try {
      const payload = {
        title: form.title,
        excerpt: form.excerpt,
        content: form.content,
        author: form.author,
        authorRole: form.authorRole,
        category: form.category,
        readTime: form.readTime,
        image: form.image,
        tags: parseList(form.tags),
      };
      if (editingId) {
        await blogsAPI.update(editingId, payload);
      } else {
        await blogsAPI.create(payload);
      }
      resetForm();
      await reload();
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <SectionHeader
        title="Manage Blogs"
        action={
          <button
            onClick={() => resetForm()}
            className="bg-[var(--bg-secondary)] border border-[var(--card-border)] text-[var(--text-primary)] px-5 py-3 rounded-xl font-['Roboto_Mono:Medium',sans-serif] uppercase inline-flex items-center gap-2"
          >
            <RefreshCw size={18} />
            Clear
          </button>
        }
      />

      {error && <InfoBanner message={error} />}

      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-[var(--card-border)] flex items-center justify-between">
            <div className="text-sm text-[var(--text-secondary)] font-['Roboto_Mono:Medium',sans-serif] uppercase">Blog Posts</div>
            <button
              onClick={reload}
              className="text-xs uppercase font-['Roboto_Mono:Medium',sans-serif] text-[var(--primary)]"
            >
              Refresh
            </button>
          </div>
          <div className="divide-y divide-[var(--card-border)]">
            {loading && <div className="p-6 text-sm text-[var(--text-secondary)]">Loading blog posts...</div>}
            {!loading && data.length === 0 && <div className="p-6 text-sm text-[var(--text-secondary)]">No blog posts yet.</div>}
            {data.map((blog) => (
              <div key={blog.id} className="p-6 flex items-start justify-between gap-4">
                <div>
                  <div className="text-lg font-['Roboto_Flex:Medium',sans-serif] text-[var(--text-primary)]">
                    {blog.title}
                  </div>
                  <div className="text-sm text-[var(--text-secondary)] mt-1">
                    {blog.category || 'Uncategorized'} · {blog.readTime || 'Read time not set'}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setEditingId(blog.id);
                      setForm({
                        title: blog.title || '',
                        excerpt: blog.excerpt || '',
                        content: blog.content || '',
                        author: blog.author || '',
                        authorRole: blog.authorRole || '',
                        category: blog.category || '',
                        readTime: blog.readTime || '',
                        image: blog.image || '',
                        tags: formatList(blog.tags),
                      });
                    }}
                    className="p-2 text-[var(--text-secondary)] hover:text-[var(--primary)]"
                  >
                    <Edit2 size={18} />
                  </button>
                  <button
                    onClick={async () => {
                      await blogsAPI.delete(blog.id);
                      reload();
                    }}
                    className="p-2 text-[var(--text-secondary)] hover:text-red-500"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6">
          <h3 className="text-lg font-['Roboto_Flex:Medium',sans-serif] text-[var(--text-primary)] uppercase mb-4">
            {editingId ? 'Edit Blog Post' : 'Add Blog Post'}
          </h3>
          <div className="space-y-4">
            <input
              value={form.title}
              onChange={(event) => setForm((prev) => ({ ...prev, title: event.target.value }))}
              placeholder="Blog title"
              className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-xl px-4 py-3"
            />
            <input
              value={form.category}
              onChange={(event) => setForm((prev) => ({ ...prev, category: event.target.value }))}
              placeholder="Category"
              className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-xl px-4 py-3"
            />
            <input
              value={form.readTime}
              onChange={(event) => setForm((prev) => ({ ...prev, readTime: event.target.value }))}
              placeholder="Read time (e.g., 5 min)"
              className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-xl px-4 py-3"
            />
            <input
              value={form.author}
              onChange={(event) => setForm((prev) => ({ ...prev, author: event.target.value }))}
              placeholder="Author name"
              className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-xl px-4 py-3"
            />
            <input
              value={form.authorRole}
              onChange={(event) => setForm((prev) => ({ ...prev, authorRole: event.target.value }))}
              placeholder="Author role"
              className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-xl px-4 py-3"
            />
            <textarea
              value={form.excerpt}
              onChange={(event) => setForm((prev) => ({ ...prev, excerpt: event.target.value }))}
              placeholder="Excerpt"
              rows={2}
              className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-xl px-4 py-3"
            />
            <textarea
              value={form.content}
              onChange={(event) => setForm((prev) => ({ ...prev, content: event.target.value }))}
              placeholder="Content"
              rows={4}
              className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-xl px-4 py-3"
            />
            <input
              value={form.image}
              onChange={(event) => setForm((prev) => ({ ...prev, image: event.target.value }))}
              placeholder="Image URL"
              className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-xl px-4 py-3"
            />
            <textarea
              value={form.tags}
              onChange={(event) => setForm((prev) => ({ ...prev, tags: event.target.value }))}
              placeholder="Tags (one per line)"
              rows={2}
              className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-xl px-4 py-3"
            />
            <button
              onClick={handleSubmit}
              disabled={saving}
              className="w-full bg-[var(--primary)] text-[#0f0f0f] px-6 py-3 rounded-xl font-['Roboto_Mono:Medium',sans-serif] uppercase disabled:opacity-60"
            >
              {saving ? 'Saving...' : editingId ? 'Update Post' : 'Create Post'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamTab() {
  const { data, loading, error, reload } = useResourceList(teamAPI.getAll);
  const [form, setForm] = useState({
    name: '',
    role: '',
    bio: '',
    image: '',
    linkedin: '',
    twitter: '',
  });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const resetForm = () => {
    setForm({ name: '', role: '', bio: '', image: '', linkedin: '', twitter: '' });
    setEditingId(null);
  };

  const handleSubmit = async () => {
    setSaving(true);
    try {
      const payload = { ...form };
      if (editingId) {
        await teamAPI.update(editingId, payload);
      } else {
        await teamAPI.create(payload);
      }
      resetForm();
      await reload();
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <SectionHeader
        title="Manage Team"
        action={
          <button
            onClick={() => resetForm()}
            className="bg-[var(--bg-secondary)] border border-[var(--card-border)] text-[var(--text-primary)] px-5 py-3 rounded-xl font-['Roboto_Mono:Medium',sans-serif] uppercase inline-flex items-center gap-2"
          >
            <RefreshCw size={18} />
            Clear
          </button>
        }
      />

      {error && <InfoBanner message={error} />}

      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-[var(--card-border)] flex items-center justify-between">
            <div className="text-sm text-[var(--text-secondary)] font-['Roboto_Mono:Medium',sans-serif] uppercase">Team Members</div>
            <button
              onClick={reload}
              className="text-xs uppercase font-['Roboto_Mono:Medium',sans-serif] text-[var(--primary)]"
            >
              Refresh
            </button>
          </div>
          <div className="divide-y divide-[var(--card-border)]">
            {loading && <div className="p-6 text-sm text-[var(--text-secondary)]">Loading team...</div>}
            {!loading && data.length === 0 && <div className="p-6 text-sm text-[var(--text-secondary)]">No team members yet.</div>}
            {data.map((member) => (
              <div key={member.id} className="p-6 flex items-start justify-between gap-4">
                <div>
                  <div className="text-lg font-['Roboto_Flex:Medium',sans-serif] text-[var(--text-primary)]">
                    {member.name}
                  </div>
                  <div className="text-sm text-[var(--text-secondary)] mt-1">
                    {member.role}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setEditingId(member.id);
                      setForm({
                        name: member.name || '',
                        role: member.role || '',
                        bio: member.bio || '',
                        image: member.image || '',
                        linkedin: member.linkedin || '',
                        twitter: member.twitter || '',
                      });
                    }}
                    className="p-2 text-[var(--text-secondary)] hover:text-[var(--primary)]"
                  >
                    <Edit2 size={18} />
                  </button>
                  <button
                    onClick={async () => {
                      await teamAPI.delete(member.id);
                      reload();
                    }}
                    className="p-2 text-[var(--text-secondary)] hover:text-red-500"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6">
          <h3 className="text-lg font-['Roboto_Flex:Medium',sans-serif] text-[var(--text-primary)] uppercase mb-4">
            {editingId ? 'Edit Team Member' : 'Add Team Member'}
          </h3>
          <div className="space-y-4">
            <input
              value={form.name}
              onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
              placeholder="Full name"
              className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-xl px-4 py-3"
            />
            <input
              value={form.role}
              onChange={(event) => setForm((prev) => ({ ...prev, role: event.target.value }))}
              placeholder="Role"
              className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-xl px-4 py-3"
            />
            <textarea
              value={form.bio}
              onChange={(event) => setForm((prev) => ({ ...prev, bio: event.target.value }))}
              placeholder="Bio"
              rows={3}
              className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-xl px-4 py-3"
            />
            <input
              value={form.image}
              onChange={(event) => setForm((prev) => ({ ...prev, image: event.target.value }))}
              placeholder="Image URL"
              className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-xl px-4 py-3"
            />
            <input
              value={form.linkedin}
              onChange={(event) => setForm((prev) => ({ ...prev, linkedin: event.target.value }))}
              placeholder="LinkedIn URL"
              className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-xl px-4 py-3"
            />
            <input
              value={form.twitter}
              onChange={(event) => setForm((prev) => ({ ...prev, twitter: event.target.value }))}
              placeholder="Twitter/X URL"
              className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-xl px-4 py-3"
            />
            <button
              onClick={handleSubmit}
              disabled={saving}
              className="w-full bg-[var(--primary)] text-[#0f0f0f] px-6 py-3 rounded-xl font-['Roboto_Mono:Medium',sans-serif] uppercase disabled:opacity-60"
            >
              {saving ? 'Saving...' : editingId ? 'Update Member' : 'Create Member'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactsTab() {
  const { data, loading, error, reload } = useResourceList(contactAPI.getAll);

  return (
    <div className="space-y-6">
      <SectionHeader
        title="Contact Submissions"
        action={
          <button
            onClick={reload}
            className="bg-[var(--bg-secondary)] border border-[var(--card-border)] text-[var(--text-primary)] px-5 py-3 rounded-xl font-['Roboto_Mono:Medium',sans-serif] uppercase inline-flex items-center gap-2"
          >
            <RefreshCw size={18} />
            Refresh
          </button>
        }
      />

      {error && <InfoBanner message={error} />}

      <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl divide-y divide-[var(--card-border)]">
        {loading && <div className="p-6 text-sm text-[var(--text-secondary)]">Loading contacts...</div>}
        {!loading && data.length === 0 && <div className="p-6 text-sm text-[var(--text-secondary)]">No submissions yet.</div>}
        {data.map((item) => (
          <div key={item.id} className="p-6 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <div className="text-lg font-['Roboto_Flex:Medium',sans-serif] text-[var(--text-primary)]">
                {item.name}
              </div>
              <div className="text-sm text-[var(--text-secondary)]">{item.email}</div>
              <div className="text-sm text-[var(--text-secondary)] mt-2">
                <strong className="text-[var(--text-primary)]">Subject:</strong> {item.subject || 'No subject'}
              </div>
              <p className="text-[var(--text-secondary)] mt-2">{item.message}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={async () => {
                  await contactAPI.delete(item.id);
                  reload();
                }}
                className="px-4 py-2 bg-red-500/10 text-red-500 rounded-lg text-sm font-['Roboto_Mono:Medium',sans-serif] uppercase"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SettingsTab() {
  const [settings, setSettings] = useState<any>({});
  const [rawValue, setRawValue] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const data = await settingsAPI.get();
        if (!active) return;
        setSettings(data);
        setRawValue(JSON.stringify(data, null, 2));
      } catch (err) {
        if (!active) return;
        setError('Failed to load settings.');
      } finally {
        if (active) setLoading(false);
      }
    };
    load();
    return () => {
      active = false;
    };
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setError('');
    try {
      const nextSettings = rawValue ? JSON.parse(rawValue) : {};
      const saved = await settingsAPI.update(nextSettings);
      setSettings(saved);
      setRawValue(JSON.stringify(saved, null, 2));
    } catch (err) {
      setError('Invalid JSON or failed to save settings.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <SectionHeader title="Settings" />
      {error && <InfoBanner message={error} />}

      <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6">
        <h3 className="text-lg font-['Roboto_Flex:Medium',sans-serif] text-[var(--text-primary)] uppercase mb-4">
          Site Settings (JSON)
        </h3>
        {loading ? (
          <div className="text-sm text-[var(--text-secondary)]">Loading settings...</div>
        ) : (
          <textarea
            value={rawValue}
            onChange={(event) => setRawValue(event.target.value)}
            rows={12}
            className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-xl px-4 py-3 font-['Roboto_Mono:Regular',sans-serif] text-sm"
          />
        )}
        <div className="mt-4">
          <button
            onClick={handleSave}
            disabled={saving}
            className="bg-[var(--primary)] text-[#0f0f0f] px-6 py-3 rounded-xl font-['Roboto_Mono:Medium',sans-serif] uppercase disabled:opacity-60"
          >
            {saving ? 'Saving...' : 'Save Settings'}
          </button>
        </div>
        <div className="mt-4 text-xs text-[var(--text-secondary)]">
          Current keys: {Object.keys(settings || {}).length === 0 ? 'none' : Object.keys(settings).join(', ')}
        </div>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const { isAuthenticated, isLoading, logout, user } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center">
        <div className="text-[var(--text-primary)]">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin-secret-login-2026" replace />;
  }

  const menuItems = useMemo(() => ([
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'services', label: 'Services', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'blogs', label: 'Blogs', icon: FileText },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'contacts', label: 'Contacts', icon: MessageSquare },
    { id: 'settings', label: 'Settings', icon: Settings },
  ]), []);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <aside className={`fixed top-0 left-0 z-40 h-screen transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 w-64 bg-[var(--card-bg)] border-r border-[var(--card-border)]`}>
        <div className="h-full flex flex-col">
          <div className="p-6 border-b border-[var(--card-border)]">
            <Logo />
            <p className="text-xs text-[var(--text-secondary)] mt-2 font-['Roboto_Mono:Medium',sans-serif] uppercase">{appConfig.companyName} Admin</p>
          </div>

          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                        activeTab === item.id
                          ? 'bg-[var(--primary)] text-[#0f0f0f]'
                          : 'text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)]'
                      }`}
                    >
                      <Icon size={20} />
                      <span className="font-['Roboto_Flex:Medium',sans-serif]">{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="p-4 border-t border-[var(--card-border)] space-y-2">
            <button
              onClick={toggleTheme}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] transition-colors"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              <span className="font-['Roboto_Flex:Medium',sans-serif]">Toggle Theme</span>
            </button>

            <button
              onClick={logout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-500/10 transition-colors"
            >
              <LogOut size={20} />
              <span className="font-['Roboto_Flex:Medium',sans-serif]">Logout</span>
            </button>
          </div>
        </div>
      </aside>

      <div className={`transition-all ${sidebarOpen ? 'lg:ml-64' : ''}`}>
        <header className="bg-[var(--card-bg)] border-b border-[var(--card-border)] sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 lg:px-8 py-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden text-[var(--text-primary)]"
              >
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              <h1 className="text-2xl font-['Roboto_Flex:SemiBold',sans-serif] font-semibold text-[var(--text-primary)] uppercase">
                {menuItems.find((item) => item.id === activeTab)?.label || 'Dashboard'}
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors font-['Roboto_Mono:Medium',sans-serif] uppercase"
              >
                View Website
              </Link>
              <div className="flex items-center gap-3">
                <div className="text-right hidden sm:block">
                  <div className="text-sm font-['Roboto_Flex:Medium',sans-serif] text-[var(--text-primary)]">
                    {user?.username || 'Admin'}
                  </div>
                  <div className="text-xs text-[var(--text-secondary)]">Administrator</div>
                </div>
                <div className="w-10 h-10 bg-[var(--primary)] rounded-full flex items-center justify-center text-[#0f0f0f] font-['Roboto_Mono:Medium',sans-serif] font-medium">
                  {user?.username?.charAt(0).toUpperCase() || 'A'}
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="p-4 lg:p-8 space-y-6">
          {activeTab === 'overview' && <OverviewTab />}
          {activeTab === 'services' && <ServicesTab />}
          {activeTab === 'projects' && <ProjectsTab />}
          {activeTab === 'blogs' && <BlogsTab />}
          {activeTab === 'team' && <TeamTab />}
          {activeTab === 'contacts' && <ContactsTab />}
          {activeTab === 'settings' && <SettingsTab />}
        </main>
      </div>
    </div>
  );
}
