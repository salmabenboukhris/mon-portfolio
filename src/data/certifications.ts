export type Certification = {
  title: string;
  issuer: string;
  issueDate: string; // "YYYY-MM"
  expiryDate?: string; // "YYYY-MM"
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  tags?: string[];
  image?: string; // "/certs/aws-saa.webp"
  imageAlt?: string; // "Badge AWS SAA"
  status?: 'active' | 'expired' | 'revoked';
};

export const certifications: Certification[] = [
  {
    title: 'Certification Informatique',
    issuer: 'FST Marrakech',
    issueDate: '2026-03',
    image: '/Screenshot 2026-03-08 220959.png',
    imageAlt: 'Certification Screenshot',
    status: 'active',
  },
];
