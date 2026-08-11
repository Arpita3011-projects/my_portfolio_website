import heroImage from '../assets/images/hero.png'
import airbnbDemo from '../assets/images/Airbnbdemo.png'

export const projectsContent = {
  eyebrow: 'Projects',
  title: 'Projects I have Built',
  filters: ['All', 'Full Stack', 'Frontend', 'Backend'],
  projects: [
    {
      title: 'Munch — Full-Stack Food Ordering App',
      category: 'Full Stack',
      featured: true,
      image: '/Munch.png',
      description:
        'A full-stack food ordering application where users can browse and customize menu items, manage their cart, place orders, save delivery addresses, and track order status. It includes JWT authentication, role-based admin features, reviews, and business analytics.',
      technologies: [
        'React',
        'Vite',
        'Tailwind CSS',
        'JavaScript',
        'React Router',
        'Context API',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Mongoose',
        'JWT',
        'Zod',
        'PWA',
      ],
      links: {
        github: 'https://github.com/Arpita3011-projects/Munch',
        demo: 'https://munch-two-eosin.vercel.app/',
      },
    },
    {
      title: 'Airbnb - Inspired Property Rental System',
      category: 'MERN Stack',
      featured: true,
      image: airbnbDemo,
      description:
        'A full-stack web application inspired by Airbnb featuring user authentication, property listings, CRUD operations, image uploads, booking functionality, and a responsive user interface.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      links: {
        github: 'https://github.com/Arpita3011-projects/Airbnb_MERN',
        demo: 'https://airbnb-mern-b08k.onrender.com',
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




