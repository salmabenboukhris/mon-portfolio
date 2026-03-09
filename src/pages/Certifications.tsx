import { certifications } from '@/data/certifications';
import { useMemo, useState } from 'react';
import CertificationCard from '@/components/CertificationCard';
import { Helmet } from 'react-helmet-async';
import { Search, Award } from 'lucide-react';

export default function CertificationsPage() {
  const [q, setQ] = useState('');
  const list = useMemo(
    () =>
      certifications
        .filter((c) =>
          [c.title, c.issuer, ...(c.tags ?? []), ...(c.skills ?? [])]
            .join(' ')
            .toLowerCase()
            .includes(q.toLowerCase()),
        )
        .sort((a, b) => b.issueDate.localeCompare(a.issueDate)),
    [q],
  );

  return (
    <section className="space-y-12 py-10">
      <Helmet>
        <title>{`Certifications — Portfolio`}</title>
        <meta name="description" content="Certifications, badges et compétences validées." />
      </Helmet>
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <h2 className="text-4xl font-extrabold text-cv-accent flex items-center gap-3">
            <Award className="text-cv-primary" size={32} /> Certifications
          </h2>
          <p className="text-cv-gray">Mes diplômes et certifications professionnelles.</p>
        </div>
        
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-cv-gray group-focus-within:text-cv-primary transition-colors" size={18} />
          <input
            placeholder="Rechercher (ex: AWS, Java...)"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="w-full md:w-80 pl-11 pr-4 py-3 glass-card bg-white/50 border-cv-primary/10 focus:outline-none focus:ring-2 focus:ring-cv-primary/20 transition-all rounded-xl shadow-sm"
            aria-label="Filtrer les certifications"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {list.map((c) => (
          <CertificationCard key={c.title + c.issueDate} c={c} />
        ))}
      </div>
      
      {list.length === 0 && (
        <div className="text-center py-20 glass-card">
          <p className="text-cv-gray text-lg">Aucune certification ne correspond à votre recherche.</p>
        </div>
      )}
    </section>
  );
}
