export interface ExperienceItem {
  company: string;
  period: string;
  location: string;
  /** i18n keys under experience.jobs.<id> */
  id: 'ulandu' | 'cysval';
  points: string[];
  techs: string[];
  clients: {
    name: string;
    logo: string;
    url: string;
    alt: string;
    /**
     * Optional height override. Every logo shares the default height, but the
     * source aspect ratios range from 1.26:1 to 8.7:1 — without a nudge the
     * widest wordmark renders twice as wide as its neighbours and a stacked
     * lockup shrinks to a speck. Assets are black-on-transparent, so the
     * brightness(0) invert(1) filter in Experience.astro renders them white.
     */
    logoClass?: string;
  }[];
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
      {
        name: 'Bendita Burger',
        logo: '/clients/benditaburger.png',
        url: 'https://benditaburger.es',
        alt: 'Cliente Bendita Burger — web de pedidos y reservas',
        logoClass: 'h-5',
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
      {
        name: 'GetYourGuide',
        logo: '/clients/getyourguide.png',
        url: 'https://www.getyourguide.com',
        alt: 'Cliente GetYourGuide — plataforma de tours y actividades',
        logoClass: 'h-10 md:h-11',
      },
    ],
  },
];
