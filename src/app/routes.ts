import { createBrowserRouter } from 'react-router';
import Root from './Root';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import VerifyOtp from './pages/VerifyOtp';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'services', Component: Services },
      { path: 'projects', Component: Projects },
      { path: 'about', Component: About },
      { path: 'blogs', Component: Blogs },
      { path: 'careers', Component: Careers },
      { path: 'contact', Component: Contact },
      { path: '*', Component: NotFound },
    ],
  },
  {
    path: '/admin-secret-login-2026',
    Component: AdminLogin,
  },
  {
    path: '/verify-otp',
    Component: VerifyOtp,
  },
  {
    path: '/admin/dashboard',
    Component: AdminDashboard,
  },
]);
