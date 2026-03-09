import { projects } from '@/data/projects';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Github, LaptopIcon } from 'lucide-react';

export default function Projects() {
  return (
    <section className="space-y-12 py-10">
      <Helmet>
        <title>{`Projets — ${projects.length} Réalisations`}</title>
        <meta name="description" content="Découvrez mes projets académiques et personnels en informatique." />
      </Helmet>
      
      <div className="space-y-4">
        <h2 className="text-4xl font-extrabold text-cv-accent text-center">Mes Projets</h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <div key={idx} className="glass-card flex flex-col p-6 group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="mb-4 w-12 h-12 rounded-2xl bg-cv-primary/10 flex items-center justify-center text-cv-primary group-hover:bg-cv-primary group-hover:text-white transition-colors duration-300">
              <LaptopIcon size={24} />
            </div>
            
            <div className="flex-grow space-y-3">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-cv-accent group-hover:text-cv-primary transition-colors">
                  {project.title}
                </h3>
                <span className="text-xs font-bold text-cv-primary px-2 py-1 bg-cv-light-accent/30 rounded-md">
                  {project.period}
                </span>
              </div>
              
              <p className="text-cv-gray text-sm line-clamp-3">
                {project.summary}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-cv-gray bg-cv-sidebar px-2 py-0.5 rounded border border-cv-primary/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex gap-3 pt-4 border-t border-cv-primary/5">
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-cv-gray hover:text-cv-primary transition-colors flex items-center gap-1.5 text-xs font-medium">
                  <Github size={16} /> Code
                </a>
              )}
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-cv-gray hover:text-cv-primary transition-colors flex items-center gap-1.5 text-xs font-medium">
                  <ExternalLink size={16} /> Démo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
