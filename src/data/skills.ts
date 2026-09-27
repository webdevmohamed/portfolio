export interface Skill {
  name: string;
  cat: 'frontend' | 'backend' | 'cloud';
  icon: string; // simple-icons slug
  note?: string;
}

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'Vue.js', cat: 'frontend', icon: 'vuedotjs' },
  { name: 'Nuxt', cat: 'frontend', icon: 'nuxt' },
  { name: 'Inertia.js', cat: 'frontend', icon: 'inertia' },
  { name: 'JavaScript', cat: 'frontend', icon: 'javascript' },
  { name: 'TypeScript', cat: 'frontend', icon: 'typescript' },
  { name: 'Tailwind CSS', cat: 'frontend', icon: 'tailwindcss' },
  { name: 'HTML5', cat: 'frontend', icon: 'html5' },
  { name: 'CSS', cat: 'frontend', icon: 'css' },
  // Backend
  { name: 'PHP', cat: 'backend', icon: 'php' },
  { name: 'Laravel', cat: 'backend', icon: 'laravel' },
  { name: 'MySQL', cat: 'backend', icon: 'mysql' },
  { name: 'PostgreSQL', cat: 'backend', icon: 'postgresql' },
  { name: 'Node.js', cat: 'backend', icon: 'nodedotjs' },
  { name: 'REST APIs', cat: 'backend', icon: 'openapiinitiative' },
  { name: 'Strapi', cat: 'backend', icon: 'strapi' },
  // Cloud, tools & AI
  { name: 'Git', cat: 'cloud', icon: 'git' },
  { name: 'Linux', cat: 'cloud', icon: 'linux' },
  { name: 'Apache', cat: 'cloud', icon: 'apachedolphinscheduler', note: 'HTTPD' },
  { name: 'Docker', cat: 'cloud', icon: 'docker' },
  { name: 'AWS S3', cat: 'cloud', icon: 'googlecloud', note: 'S3' },
  { name: 'Stripe', cat: 'cloud', icon: 'stripe' },
  { name: 'Algolia', cat: 'cloud', icon: 'algolia' },
  { name: 'OpenAI API', cat: 'cloud', icon: 'claude', note: 'AI' },
  { name: 'Claude API', cat: 'cloud', icon: 'anthropic' },
];
