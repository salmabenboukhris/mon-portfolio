import type { Certification } from '@/data/certifications';
import clsx from 'clsx';
import { ExternalLink, Calendar, Building2, ShieldCheck } from 'lucide-react';

function mmYYYY(s: string) {
  if (!s || !s.includes('-')) return s;
  const [y, m] = s.split('-');
  return `${m}/${y}`;
}

export default function CertificationCard({ c }: { c: Certification }) {
  const isExpired = c.status === 'expired' || (c.expiryDate && c.expiryDate < c.issueDate);

  return (
    <article
      className={clsx(
        'glass-card p-6 group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col',
        isExpired && 'opacity-60 saturate-50'
      )}
      aria-label={`Certification ${c.title}`}
    >
      <div className="relative flex-grow space-y-4">
        {/* Status Badge */}
        {c.status && (
          <div className="absolute -top-2 -right-2">
            <span className={clsx(
              "text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full shadow-sm border",
              c.status === 'active' ? "bg-cv-light-accent text-cv-accent border-cv-primary/10" : "bg-red-100 text-red-600 border-red-200"
            )}>
              {c.status}
            </span>
          </div>
        )}

        <div className="flex items-start gap-4">
          <div className="w-16 h-16 shrink-0 glass-card bg-white p-2 flex items-center justify-center border-cv-primary/5 transition-transform group-hover:scale-110">
            {c.image ? (
              <img
                src={c.image}
                alt={c.imageAlt ?? c.title}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            ) : (
              <ShieldCheck className="text-cv-primary" size={32} />
            )}
          </div>
          
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-cv-accent leading-snug group-hover:text-cv-primary transition-colors">
              {c.title}
            </h3>
            <p className="text-sm font-medium text-cv-primary flex items-center gap-1.5">
              <Building2 size={14} /> {c.issuer}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs text-cv-gray">
          <span className="flex items-center gap-1.5">
            <Calendar size={13} /> {mmYYYY(c.issueDate)}
            {c.expiryDate && ` → ${mmYYYY(c.expiryDate)}`}
          </span>
          {c.credentialId && (
            <span className="font-mono text-[10px] bg-cv-sidebar px-1.5 py-0.5 rounded">
              ID: {c.credentialId}
            </span>
          )}
        </div>

        {c.skills && c.skills.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-2">
            {c.skills.map((skill) => (
              <span key={skill} className="text-[10px] bg-cv-primary/5 text-cv-accent px-2 py-0.5 rounded border border-cv-primary/5">
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>

      {c.credentialUrl && (
        <div className="mt-6 pt-4 border-t border-cv-primary/5">
          <a
            href={c.credentialUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-bold text-cv-primary flex items-center gap-1.5 hover:underline"
          >
            Vérifier l'authenticité <ExternalLink size={14} />
          </a>
        </div>
      )}
      
      {isExpired && (
        <div className="mt-2 text-[10px] font-bold text-red-500 uppercase">
          Certification Expirée
        </div>
      )}
    </article>
  );
}
