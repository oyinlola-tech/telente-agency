import { Outlet, useLocation } from 'react-router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

export default function Root() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen">
      {!isAdminRoute && <Navbar />}
      <Outlet />
      {!isAdminRoute && <Footer />}
    </div>
  );
}
