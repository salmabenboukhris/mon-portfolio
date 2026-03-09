import { profile } from '@/data/profile';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <section className="flex flex-col gap-12 py-10">
      <Helmet>
        <title>{`${profile.name} — Portfolio`}</title>
        <meta name="description" content={profile.about} />
      </Helmet>
      
      <div className="grid gap-10 md:grid-cols-[1fr_300px] items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-cv-accent">
              {profile.name}
            </h1>
            <p className="text-xl md:text-2xl font-medium text-cv-primary">
              {profile.role}
            </p>
          </div>
          
          <p className="text-lg text-cv-gray max-w-2xl leading-relaxed">
            {profile.about}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/projects" className="premium-button flex items-center gap-2">
              Voir mes projets <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="px-6 py-2 border-2 border-cv-primary text-cv-primary rounded-full font-medium hover:bg-cv-primary/5 transition-all">
              Me contacter
            </Link>
          </div>

          <div className="flex gap-5 items-center pt-2">
            {profile.socials.map((social) => (
              <a 
                key={social.label} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cv-gray hover:text-cv-primary transition-colors"
                title={social.label}
              >
                {social.label === 'GitHub' && <Github size={24} />}
                {social.label === 'LinkedIn' && <Linkedin size={24} />}
              </a>
            ))}
            <a href={`mailto:${profile.email}`} className="text-cv-gray hover:text-cv-primary transition-colors" title="Email">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="aspect-square rounded-3xl bg-cv-light-accent/30 overflow-hidden border-2 border-cv-primary/20 rotate-3 transition-transform hover:rotate-0 duration-500 shadow-xl">
             <img src="/photo profil modifier.png" alt={profile.name} className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-cv-primary/10 rounded-full blur-2xl -z-10"></div>
          <div className="absolute -top-4 -right-4 w-32 h-32 bg-cv-accent/10 rounded-full blur-2xl -z-10"></div>
        </div>
      </div>

      <div className="section-divider"></div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Compétences clés</h2>
        <div className="flex flex-wrap gap-3">
          {profile.skills.map((skill) => (
            <span key={skill} className="px-5 py-2 bg-cv-sidebar text-cv-accent rounded-xl text-sm font-semibold border border-cv-primary/5 shadow-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
