export interface ExperienceItem {
  company: string;
  period: string;
  location: string;
  /** i18n keys under experience.jobs.<id> */
  id: 'ulandu' | 'cysval';
  points: string[];
  techs: string[];
  clients: { name: string; logo: string; url: string }[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'ulandu',
    company: 'Ulandu',
    period: '05/2024 → ∞',
    location: 'Talavera de la Reina · ES',
    points: ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'],
    techs: ['Laravel', 'Vue.js', 'Nuxt', 'Inertia.js', 'MySQL', 'Stripe', 'Algolia', 'OpenAI', 'AWS S3', 'Linux'],
    clients: [
      { name: 'Hiwood', logo: '/clients/hiwood.png', url: 'https://hiwood.com' },
      { name: 'Utande', logo: '/clients/utande.png', url: 'https://utande.net' },
      { name: 'Avioparts', logo: '/clients/avioparts.png', url: 'https://avioparts.com' },
    ],
  },
  {
    id: 'cysval',
    company: 'Cysval Consultoría y Servicios',
    period: '01/2021 → 01/2024',
    location: 'Calera y Chozas · ES',
    points: ['first', 'second', 'third', 'fourth', 'fifth'],
    techs: ['PHP', 'Vue.js', 'JavaScript', 'MySQL', 'REST APIs', 'Bootstrap', 'jQuery'],
    clients: [
      { name: 'Ociotour', logo: '/clients/ociotour.png', url: 'https://ociotour.es' },
      { name: 'Renfe', logo: '/clients/renfe.png', url: 'https://renfeviajes.renfe.com' },
    ],
  },
];
