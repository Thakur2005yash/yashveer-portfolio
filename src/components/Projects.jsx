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
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://via.placeholder.com/600x400/4F46E5/FFFFFF?text=E-Commerce',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://via.placeholder.com/600x400/10B981/FFFFFF?text=Task+Manager',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      category: 'frontend',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities with beautiful data visualizations.',
      image: 'https://via.placeholder.com/600x400/F59E0B/FFFFFF?text=Weather+App',
      tech: ['JavaScript', 'API Integration', 'Chart.js'],
      category: 'frontend',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Blog Platform',
      description: 'A modern blogging platform with markdown support, user authentication, and a clean, minimalist design focused on content readability.',
      image: 'https://via.placeholder.com/600x400/8B5CF6/FFFFFF?text=Blog+Platform',
      tech: ['Next.js', 'PostgreSQL', 'Prisma'],
      category: 'fullstack',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A stunning portfolio website with smooth animations, responsive design, and optimized performance for showcasing creative work.',
      image: 'https://via.placeholder.com/600x400/EC4899/FFFFFF?text=Portfolio',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      category: 'frontend',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'API REST Service',
      description: 'A robust RESTful API service with comprehensive documentation, authentication, and scalable architecture for enterprise applications.',
      image: 'https://via.placeholder.com/600x400/059669/FFFFFF?text=API+Service',
      tech: ['Node.js', 'Express', 'PostgreSQL', 'Docker'],
      category: 'backend',
      liveUrl: '#',
      githubUrl: '#'
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
