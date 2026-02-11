import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      issuer: 'Udemy',
      date: 'January 2024',
      badge: '🎓',
      skills: ['React', 'Node.js', 'MongoDB', 'Express'],
      verificationUrl: '#'
    },
    {
      id: 2,
      title: 'React Advanced Patterns',
      issuer: 'Frontend Masters',
      date: 'November 2023',
      badge: '⚛️',
      skills: ['React', 'State Management', 'Performance'],
      verificationUrl: '#'
    },
    {
      id: 3,
      title: 'JavaScript ES6+ Masterclass',
      issuer: 'Coding.com',
      date: 'August 2023',
      badge: '✨',
      skills: ['JavaScript', 'ES6', 'Async/Await'],
      verificationUrl: '#'
    },
    {
      id: 4,
      title: 'Cloud Computing with AWS',
      issuer: 'AWS Training',
      date: 'June 2023',
      badge: '☁️',
      skills: ['AWS', 'Cloud Architecture', 'Deployment'],
      verificationUrl: '#'
    },
    {
      id: 5,
      title: 'Database Management (SQL & NoSQL)',
      issuer: 'DataCamp',
      date: 'April 2023',
      badge: '🗄️',
      skills: ['PostgreSQL', 'MongoDB', 'Redis'],
      verificationUrl: '#'
    },
    {
      id: 6,
      title: 'Web Design & UX Principles',
      issuer: 'Interaction Design Foundation',
      date: 'February 2023',
      badge: '🎨',
      skills: ['UI/UX', 'Design Thinking', 'Responsive Design'],
      verificationUrl: '#'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-black/50">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Certifications
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Professional certifications and course completions
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group h-full bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{cert.badge}</span>
                <a
                  href={cert.verificationUrl}
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-semibold"
                >
                  Verify
                </a>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {cert.title}
              </h3>
              
              <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mb-2">
                {cert.issuer}
              </p>
              
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                {cert.date}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
