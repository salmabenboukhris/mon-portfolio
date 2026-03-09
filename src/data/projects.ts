export type Project = {
  title: string;
  period?: string;
  tags: string[];
  summary: string;
  link?: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: 'Gestion d’une Coopérative Agricole',
    period: '2026',
    tags: ['Java', 'Swing', 'Desktop'],
    summary: 'Application desktop développée avec Java Swing pour la gestion intégrée d’une coopérative agricole.',
  },
  {
    title: 'Gestion des achats d’un hôtel',
    period: '2025',
    tags: ['SQL', 'MERISE', 'Database'],
    summary: 'Conception et implémentation d’une base de données relationnelle pour la gestion hôtelière.',
  },
  {
    title: 'Application web Laravel',
    period: '2025',
    tags: ['PHP', 'Laravel', 'Web'],
    summary: 'Développement d’une application web avec système d’authentification et gestion de contenu.',
  },
  {
    title: 'Plateforme de cours en ligne',
    period: '2025',
    tags: ['Full Stack', 'Education'],
    summary: 'Conception d’interfaces pour administrateurs et utilisateurs pour la gestion de cours en ligne.',
  },
  {
    title: 'Réseau multi-sites',
    period: '2025',
    tags: ['Networking', 'Cisco'],
    summary: 'Conception et configuration d’une infrastructure réseau répartie sur plusieurs sites.',
  },
];
