export type Education = {
  school: string;
  degree: string;
  field?: string;
  location?: string;
  start: string;
  end?: string;
  gpa?: string;
  courses?: string[];
  highlights?: string[];
};

export const education: Education[] = [
  {
    school: 'Faculté des Sciences et Techniques',
    degree: 'Licence Informatique — SIR',
    field: 'Systèmes Informatiques Répartis',
    location: 'Marrakech',
    start: '2025',
    end: 'Présent',
    highlights: ['Spécialisation en systèmes répartis et architecture logicielle'],
  },
  {
    school: 'Faculté des Sciences et Techniques',
    degree: 'DEUST — MIPC',
    field: 'Science Math Physique Chimie',
    location: 'Marrakech',
    start: '2023',
    end: '2025',
  },
  {
    school: 'Faculté des Sciences',
    degree: 'Première année préparatoire',
    field: 'SMPC (Sciences de la Matière Physique et Chimique)',
    location: 'Marrakech',
    start: '2022',
    end: '2023',
  },
  {
    school: 'Lycée Mhamid 9',
    degree: 'Baccalauréat Sciences Physiques',
    field: 'Option Française',
    location: 'Marrakech',
    start: '2021',
    end: '2022',
  },
];
