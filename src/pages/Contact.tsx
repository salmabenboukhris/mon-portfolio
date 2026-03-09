import { profile } from '@/data/profile';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section className="space-y-12 py-10">
      <Helmet>
        <title>{`Contact — ${profile.name}`}</title>
        <meta name="description" content="Contactez-moi pour toute opportunité de stage ou collaboration." />
      </Helmet>
      
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-extrabold text-cv-accent">Me Contacter</h2>
        <p className="text-cv-gray max-w-2xl mx-auto">
          Je suis actuellement à la recherche d'un stage de fin d'études. N'hésitez pas à me contacter pour discuter de vos projets ou d'opportunités de collaboration.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-8">
          <div className="glass-card p-8 space-y-6">
            <h3 className="text-2xl font-bold text-cv-accent flex items-center gap-3">
              <MessageSquare className="text-cv-primary" /> Coordonnées
            </h3>
            
            <div className="space-y-4">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-4 p-4 rounded-xl border border-cv-primary/5 hover:bg-cv-light-accent/10 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-cv-primary/10 flex items-center justify-center text-cv-primary group-hover:bg-cv-primary group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-cv-gray uppercase tracking-widest">Email</p>
                  <p className="text-cv-accent font-medium">{profile.email}</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 p-4 rounded-xl border border-cv-primary/5">
                <div className="w-10 h-10 rounded-lg bg-cv-primary/10 flex items-center justify-center text-cv-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-cv-gray uppercase tracking-widest">Téléphone</p>
                  <p className="text-cv-accent font-medium">+212 7 62 03 11 27</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-xl border border-cv-primary/5">
                <div className="w-10 h-10 rounded-lg bg-cv-primary/10 flex items-center justify-center text-cv-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-cv-gray uppercase tracking-widest">Localisation</p>
                  <p className="text-cv-accent font-medium">{profile.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-8">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-cv-accent ml-1">Nom</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-cv-primary/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-cv-primary/20 transition-all" placeholder="Votre nom" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-cv-accent ml-1">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-cv-primary/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-cv-primary/20 transition-all" placeholder="votre@email.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-cv-accent ml-1">Sujet</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-cv-primary/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-cv-primary/20 transition-all" placeholder="Objet de votre message" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-cv-accent ml-1">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-cv-primary/10 bg-white/50 focus:outline-none focus:ring-2 focus:ring-cv-primary/20 transition-all resize-none" placeholder="Comment puis-je vous aider ?"></textarea>
            </div>
            <button type="submit" className="premium-button w-full flex items-center justify-center gap-2 py-4">
              Envoyer le message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
