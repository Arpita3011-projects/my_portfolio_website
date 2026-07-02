import heroImage from '../assets/images/hero.png'

export const projectsContent = {
  eyebrow: 'Projects',
  title: 'A curated collection of thoughtful product work',
  intro:
    'These projects blend strong interfaces, reliable systems, and polished interactions into stories that feel premium and easy to use.',
  filters: ['All', 'Full Stack', 'Frontend', 'Backend'],
  projects: [
    {
      title: 'Northstar Studio',
      category: 'Full Stack',
      featured: true,
      image: heroImage,
      description:
        'A refined digital studio experience with an editorial layout, fast content delivery, and a polished admin workflow.',
      technologies: ['React', 'Node.js', 'Tailwind CSS', 'PostgreSQL'],
      github: 'https://github.com/yourname/northstar-studio',
      demo: 'https://example.com/northstar-studio',
    },
    {
      title: 'Lumen Analytics',
      category: 'Frontend',
      featured: false,
      image: heroImage,
      description:
        'An insight-rich dashboard designed for clarity, speed, and intuitive exploration of product metrics.',
      technologies: ['React', 'TypeScript', 'Framer Motion', 'Chart.js'],
      github: 'https://github.com/yourname/lumen-analytics',
      demo: 'https://example.com/lumen-analytics',
    },
    {
      title: 'Atlas Commerce',
      category: 'Backend',
      featured: false,
      image: heroImage,
      description:
        'A commerce platform backend focused on reliable APIs, resilient data flows, and thoughtful integrations.',
      technologies: ['Express', 'MongoDB', 'REST APIs', 'JWT'],
      github: 'https://github.com/yourname/atlas-commerce',
      demo: 'https://example.com/atlas-commerce',
    },
    {
      title: 'Aurelia Finance',
      category: 'Full Stack',
      featured: true,
      image: heroImage,
      description:
        'A premium finance experience combining a modern UI with secure account workflows and real-time data updates.',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com/yourname/aurelia-finance',
      demo: 'https://example.com/aurelia-finance',
    },
  ],
}
