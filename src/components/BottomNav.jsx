import React, { useState, useEffect } from 'react';

const BottomNav = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'skills-logos', label: 'Tech', icon: '💻' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'coding-profiles', label: 'Profiles', icon: '📊' },
    { id: 'contact', label: 'Contact', icon: '📧' },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 bg-white/90 dark:bg-black/80 backdrop-blur border border-gray-200 dark:border-white/10 rounded-full px-4 py-3 shadow-lg flex items-center space-x-2 md:space-x-4">
      {navItems.map(({ id, icon, label }) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className={`flex flex-col items-center justify-center min-w-[3.5rem] md:min-w-[4rem] transition-all duration-300 rounded-full px-2 py-1 md:px-3 md:py-2 ${
            activeSection === id
              ? 'text-blue-600 dark:text-blue-400 scale-110'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
          }`}
          title={label}
        >
          <span className="text-lg md:text-xl">{icon}</span>
          <span className="text-xs mt-1 hidden md:inline">{label}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;
