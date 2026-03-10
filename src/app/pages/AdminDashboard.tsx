
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

