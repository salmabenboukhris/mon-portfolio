import { education } from '@/data/education';
import { Helmet } from 'react-helmet-async';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export default function EducationPage() {
  return (
    <section className="space-y-12 py-10">
      <Helmet>
        <title>{`Formations — ${education[0].school}`}</title>
        <meta name="description" content="Parcours académique et diplômes." />
      </Helmet>
      
      <div className="space-y-4">
        <h2 className="text-4xl font-extrabold text-cv-accent">Formation Académique</h2>
        <div className="h-1 w-20 bg-cv-primary rounded-full"></div>
      </div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-cv-light-accent before:to-transparent">
        {education.map((edu, idx) => (
          <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            {/* Dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-cv-light-accent bg-white text-cv-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <GraduationCap size={20} />
            </div>
            
            {/* Content Card */}
            <div className="w-[calc(100%-4rem)] md:w-[45%] glass-card p-6 transition-all duration-300 hover:shadow-xl">
              <div className="flex flex-col gap-1 mb-3">
                <span className="text-sm font-bold text-cv-primary flex items-center gap-1.5">
                  <Calendar size={14} /> {edu.start} — {edu.end || 'Présent'}
                </span>
                <h3 className="text-xl font-bold text-cv-accent">{edu.degree}</h3>
                {edu.field && <p className="text-cv-primary font-medium">{edu.field}</p>}
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-cv-gray text-sm">
                  <span className="flex items-center gap-1.5"><MapPin size={14} /> {edu.location}</span>
                  <span className="font-semibold text-cv-accent">{edu.school}</span>
                </div>
                
                {edu.highlights && edu.highlights.length > 0 && (
                  <ul className="mt-3 space-y-1">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="text-sm text-cv-gray flex items-start gap-2">
                        <span className="mt-1.5 block w-1.5 h-1.5 rounded-full bg-cv-primary shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
