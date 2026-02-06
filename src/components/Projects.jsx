import React, { useState, useRef, useEffect } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    let scrollAmount = 1;
    let animationId;

    const scroll = () => {
      if (!isPaused) {
        container.scrollLeft += scrollAmount;
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with React, Node.js, and MongoDB. Features user authentication, payment processing with Stripe, and admin dashboard for inventory management.',
      image: 'https://images.unsplash.com/photo-1563013542-302247633-73d44b8e94d8f?auto=format&fit=crop&w=600&h=400',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      category: 'fullstack',
      liveUrl: 'https://ayushxpal-portfolio.vercel.app/ecommerce',
      githubUrl: 'https://github.com/ayushxpal/ayushxpal-portfolio'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React, Firebase, and Material-UI.',
      image: 'https://images.unsplash.com/photo-16185649935-11ab4cbd4871b83e?auto=format&fit=crop&w=600&h=400',
      tech: ['React', 'Firebase', 'Material-UI', 'Redux'],
      category: 'fullstack',
      liveUrl: 'https://ayushxpal-portfolio.vercel.app/tasks',
      githubUrl: 'https://github.com/ayushxpal/ayushxpal-portfolio'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities with beautiful data visualizations using React and Chart.js.',
      image: 'https://images.unsplash.com/photo-1550745248-5e9a331629a7?auto=format&fit=crop&w=600&h=400',
      tech: ['React', 'JavaScript', 'Chart.js', 'OpenWeather API'],
      category: 'fullstack',
      liveUrl: 'https://ayushxpal-portfolio.vercel.app/weather',
      githubUrl: 'https://github.com/ayushxpal/ayushxpal-portfolio'
    },
    {
      id: 4,
      title: 'Blog Platform',
      description: 'A modern blogging platform with markdown support, user authentication, and a clean, minimalist design focused on content readability. Built with Next.js and PostgreSQL.',
      image: 'https://images.unsplash.com/photo-15432463831-0f6ec4700b2?auto=format&fit=crop&w=600&h=400',
      tech: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
      category: 'fullstack',
      liveUrl: 'https://ayushxpal-portfolio.vercel.app/blog',
      githubUrl: 'https://github.com/ayushxpal/ayushxpal-portfolio'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A stunning portfolio website with smooth animations, responsive design, and optimized performance for showcasing creative work. Built with React, Tailwind CSS, and Framer Motion.',
      image: 'https://images.unsplash.com/photo-1557427272-ffd05d4f3?auto=format&fit=crop&w=600&h=400',
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      category: 'frontend',
      liveUrl: 'https://ayushxpal-portfolio.vercel.app',
      githubUrl: 'https://github.com/ayushxpal/ayushxpal-portfolio'
    },
    {
      id: 6,
      title: 'API REST Service',
      description: 'A robust RESTful API service with comprehensive documentation, authentication, and scalable architecture for enterprise applications. Built with Node.js, Express, PostgreSQL, and Docker.',
      image: 'https://images.unsplash.com/photo-1464334394-460e3278f8?auto=format&fit=crop&w=600&h=400',
      tech: ['Node.js', 'Express', 'PostgreSQL', 'Docker', 'JWT'],
      category: 'backend',
      liveUrl: 'https://ayushxpal-portfolio.vercel.app/api',
      githubUrl: 'https://github.com/ayushxpal/ayushxpal-portfolio'
    }
  ];

  const filteredProjects = projects;

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-black/50">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">Featured Projects</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          A selection of my recent work and personal projects
        </p>
        
        {/* Auto-scrolling carousel */}
        <div
          ref={scrollContainerRef}
          className="relative overflow-x-auto scrollbar-thin mb-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex space-x-6 py-4">
            {projects.map((project) => (
              <div key={project.id} className="flex-none w-80 h-96">
                <ProjectCard project={{
                  ...project,
                  technologies: project.tech,
                  longDescription: project.description,
                  features: ['Responsive design', 'Modern tech stack', 'Clean code', 'User-friendly UI'],
                }} />
              </div>
            ))}
          </div>
        </div>  
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
