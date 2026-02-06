import React, { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="perspective-1000 w-full h-full">
      <div
        className={`relative w-full h-full transform-style-3d transition-transform duration-700 cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onMouseEnter={handleFlip}
        onMouseLeave={handleFlip}
      >
        {/* Front */}
        <div className="absolute inset-0 w-full h-full backface-hidden bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <button className="w-full btn-primary text-center">View Details</button>
        </div>

        {/* Back */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 rounded-xl p-6 flex flex-col justify-between text-white">
          <div>
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm mb-4 opacity-90">{project.longDescription || project.description}</p>
            <ul className="text-sm space-y-1 mb-4 list-disc list-inside opacity-90">
              {(project.features || ['Feature one', 'Feature two', 'Feature three']).map((feat, idx) => (
                <li key={idx}>{feat}</li>
              ))}
            </ul>
          </div>
          <div className="flex gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-white text-blue-600 text-center px-3 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Live
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-white/20 text-white text-center px-3 py-2 rounded-lg font-medium hover:bg-white/30 transition-colors"
              >
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
