import { Outlet, NavLink } from 'react-router-dom';
import { profile } from '@/data/profile';

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-cv-primary/10">
        <nav className="mx-auto max-w-5xl flex items-center justify-between p-4 px-6">
          <NavLink to="/" className="text-xl font-bold text-cv-accent tracking-tighter">
            {profile.name}
          </NavLink>
          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/projects" className={({isActive}) => isActive ? "text-cv-primary font-semibold" : "text-cv-gray hover:text-cv-primary transition-colors"}>Projets</NavLink>
            <NavLink to="/experience" className={({isActive}) => isActive ? "text-cv-primary font-semibold" : "text-cv-gray hover:text-cv-primary transition-colors"}>Parcours</NavLink>
            <NavLink to="/certifications" className={({isActive}) => isActive ? "text-cv-primary font-semibold" : "text-cv-gray hover:text-cv-primary transition-colors"}>Certifications</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? "text-cv-primary font-semibold" : "text-cv-gray hover:text-cv-primary transition-colors"}>Contact</NavLink>
          </div>
          {/* Mobile menu could be added here */}
        </nav>
      </header>
      
      <main className="flex-grow mx-auto max-w-5xl w-full p-6 md:p-10">
        <div className="animate-fade-in-up">
          <Outlet />
        </div>
      </main>
      
      <footer className="bg-cv-sidebar border-t border-cv-primary/10 py-10 text-center">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-cv-gray text-sm">
            © {new Date().getFullYear()} • {profile.name} • Marrakech, Maroc
          </p>
        </div>
      </footer>
    </div>
  );
}
