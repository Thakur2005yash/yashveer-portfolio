import React from 'react';
import cvFile from '../assets/cv.pdf';

const Resume = () => {
  const experiences = [
   
    {
      id: 1,
      position: 'Full Stack Developer',
      company: 'Digital Solutions Co.',
      duration: 'Jun 2022 - Dec 2022',
      location: 'India',
      responsibilities: [
        'Built responsive web applications using React and Node.js',
        'Developed RESTful APIs and integrated with third-party services',
        'Participated in agile development cycle with 2-week sprints',
        'Collaborated with UX team to implement pixel-perfect designs'
      ]
    },
    {
      id: 3,
      position: 'Junior Web Developer',
      company: 'StartUp Hub',
      duration: 'Feb 2022 - May 2022',
      location: 'India',
      responsibilities: [
        'Developed frontend components using React and Tailwind CSS',
        'Fixed bugs and implemented new features based on client feedback',
        'Learned full-stack development from experienced mentors',
        'Contributed to open-source projects'
      ]
    }
  ];

  const skills = [
    { category: 'Frontend', skills: ['React', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Bootstrap'] },
    { category: 'Backend', skills: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs', 'GraphQL'] },
    { category: 'Database', skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'] },
    { category: 'Tools & Technologies', skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'VS Code'] },
    { category: 'Soft Skills', skills: ['Leadership', 'Communication', 'Problem Solving', 'Teamwork', 'Mentoring'] }
  ];

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-black/50">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Resume
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          My professional experience and skill set
        </p>

        {/* Download Resume Button */}
        <div className="flex justify-center mb-12">
     <a
  href={cvFile}
  download="My_Resume.pdf"
  className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
>
  <span>📥</span>
  Download Full Resume (PDF)
  <span className="group-hover:translate-x-1 transition-transform">→</span>
</a>

        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            Work Experience
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative bg-white dark:bg-gray-800 rounded-lg p-6 pl-8 border-l-4 border-blue-500 hover:shadow-lg transition-shadow"
              >
                {/* Timeline dot */}
                <div className="absolute -left-3.5 top-6 w-6 h-6 bg-blue-500 rounded-full border-4 border-gray-50 dark:border-gray-900" />
                
                <div className="mb-3">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {exp.position}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">
                    {exp.company}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                  <span>📅 {exp.duration}</span>
                  <span>📍 {exp.location}</span>
                </div>

                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-700 dark:text-gray-300">
                      <span className="text-blue-500 font-bold">▸</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
