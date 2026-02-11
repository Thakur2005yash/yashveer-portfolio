import React from 'react';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: 'Bachelor of Technology (B.Tech)',
      institution: 'Lovely Professional University',
      field: 'Computer Science & Engineering',
      year: '2023 - 2027',
      cgpa: '8.5',
      description: 'Specialized in Web Development and Full-Stack Development'
    },
    {
      id: 2,
      degree: 'Senior Secondary (12th)',
      institution: 'B.L.S International School',
      field: 'Science Stream',
      year: '2022 - 2023',
      percentage: '80%',
      description: 'Physics, Chemistry, Mathematics'
    },
    {
      id: 3,
      degree: 'Secondary (10th)',
      institution: 'B.L.S International School',
      field: 'General',
      year: '2016 - 2018',
      percentage: '95%',
      description: 'Strong foundation in academics'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-black/30">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Education
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          My academic journey and qualifications
        </p>

        <div className="grid md:grid-cols-1 gap-8">
          {educationData.map((education, index) => (
            <div
              key={education.id}
              className="relative bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow"
            >
              {/* Timeline marker */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500 text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {education.degree}
                  </h3>
                  <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mt-1">
                    {education.institution}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    {education.field}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {education.year}
                  </p>
                  <div className="mt-3 flex gap-4">
                    {education.cgpa && (
                      <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-semibold">
                        CGPA: {education.cgpa}
                      </span>
                    )}
                    {education.percentage && (
                      <span className="inline-block bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-semibold">
                        {education.percentage}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mt-3">
                    {education.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
