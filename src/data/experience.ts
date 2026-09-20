export interface ExperienceItem {
  company: string;
  period: string;
  location: string;
  /** i18n keys under experience.jobs.<id> */
  id: 'ulandu' | 'cysval';
  points: string[];
  techs: string[];
  clients: { name: string; logo: string; url: string; alt: string }[];
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
      {
        name: 'Hiwood',
        logo: '/clients/hiwood.png',
        url: 'https://hiwood.com',
        alt: 'Cliente Hiwood — plataforma inmobiliaria desarrollada con Laravel y Nuxt',
      },
      {
        name: 'Utande',
        logo: '/clients/utande.png',
        url: 'https://utande.net',
        alt: 'Cliente Utande — soluciones digitales desarrolladas con Laravel y Vue',
      },
      {
        name: 'Avioparts',
        logo: '/clients/avioparts.png',
        url: 'https://avioparts.com',
        alt: 'Cliente Avioparts — e-commerce aeronáutico con búsqueda Algolia',
      },
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
      {
        name: 'Ociotour',
        logo: '/clients/ociotour.png',
        url: 'https://ociotour.es',
        alt: 'Cliente Ociotour — buscador turístico integrado en la plataforma de Renfe',
      },
      {
        name: 'Renfe',
        logo: '/clients/renfe.png',
        url: 'https://renfeviajes.renfe.com',
        alt: 'Renfe — buscadores de alta concurrencia integrados en la plataforma de reservas',
      },
    ],
  },
];
