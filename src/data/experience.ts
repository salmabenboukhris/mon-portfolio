export type Experience = {
  title: string;
  organization: string;
  location?: string;
  period: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    title: 'Secrétaire Générale',
    organization: 'RUMI Social Club',
    location: 'Marrakech',
    period: '2024 - Présent',
    highlights: [
      'Organisation des activités et événements du club',
      'Communication et gestion administrative',
      'Leadership et coordination du travail d’équipe',
    ],
  },
];
