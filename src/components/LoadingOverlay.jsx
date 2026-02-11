import React, { useState, useEffect } from 'react';

const LoadingOverlay = () => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setVisible(false), 600);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black text-white transition-opacity duration-600 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-2 animate-pulse">Yashveer Singh</h1>
          <p className="text-lg md:text-xl opacity-70">Full-Stack Developer</p>
        </div>
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingOverlay;
