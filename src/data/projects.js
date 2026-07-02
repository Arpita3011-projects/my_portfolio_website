import heroImage from '../assets/images/hero.png'

export const projectsContent = {
  eyebrow: 'Projects',
  title: 'Selected work that balances craft and product thinking',
  intro:
    'These projects highlight the kinds of interfaces, systems, and product moments I enjoy building most—clear, usable, and thoughtfully designed.',
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
      github: 'https://github.com',
      demo: 'https://vercel.com',
    },
    {
      title: 'Lumen Analytics',
      category: 'Frontend',
      featured: false,
      image: heroImage,
      description:
        'An insight-rich dashboard designed for clarity, speed, and intuitive exploration of product metrics.',
      technologies: ['React', 'TypeScript', 'Framer Motion', 'Chart.js'],
      github: 'https://github.com',
      demo: 'https://vercel.com',
    },
    {
      title: 'Atlas Commerce',
      category: 'Backend',
      featured: false,
      image: heroImage,
      description:
        'A commerce platform backend focused on reliable APIs, resilient data flows, and thoughtful integrations.',
      technologies: ['Express', 'MongoDB', 'REST APIs', 'JWT'],
      github: 'https://github.com',
      demo: 'https://vercel.com',
    },
    {
      title: 'Aurelia Finance',
      category: 'Full Stack',
      featured: true,
      image: heroImage,
      description:
        'A premium finance experience combining a modern UI with secure account workflows and real-time data updates.',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://vercel.com',
    },
  ],
}
