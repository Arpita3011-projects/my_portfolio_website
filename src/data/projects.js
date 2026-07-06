import heroImage from '../assets/images/hero.png'

export const projectsContent = {
  eyebrow: 'Projects',
  title: 'Projects I have Built',
  filters: ['All', 'Full Stack', 'Frontend', 'Backend'],
  projects: [
    {
      title: 'Airbnb - Inspired Property Rental System',
      category: 'Full Stack',
      featured: true,
      image: heroImage,
      description:
        'A full-stack web application inspired by Airbnb featuring user authentication, property listings, CRUD operations, image uploads, booking functionality, and a responsive user interface.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      links: {
        github: 'https://github.com/Arpita3011-projects/Airbnb_3011',
        demo: 'https://airbnb-inspired-property-rental-system.onrender.com',
      },
    },
    {
      title: 'Banking Management System',
      category: 'Backend',
      featured: false,
      image: heroImage,
      description:
        'A console-based banking application developed using Java and Object-Oriented Programming concepts. It supports account creation, deposits, withdrawals, balance inquiry, and other basic banking operations.',
      technologies: ['Java', 'Object-Oriented Programming (OOP)'],
      links: {
        github: 'https://github.com/Arpita3011-projects/ATM-Management-System-Java-MiniProject-',
        demo: undefined,
      },
    },
  ],
}




