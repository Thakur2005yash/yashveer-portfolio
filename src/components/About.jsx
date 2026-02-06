import React from 'react';

const About = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python',
    'HTML/CSS', 'Tailwind CSS', 'Git', 'MongoDB', 'PostgreSQL'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://via.placeholder.com/400x400/4F46E5/FFFFFF?text=Ayush+Pal"
                alt="Ayush Pal" 
                className="rounded-2xl shadow-xl w-full max-w-md mx-auto"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Building Digital Experiences
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a passionate full-stack developer with a keen eye for design and a love for creating 
                seamless user experiences. With expertise in modern web technologies, I transform ideas into 
                powerful, scalable applications.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                My journey in web development started with curiosity and has evolved into a career focused on 
                innovation and continuous learning. I specialize in building responsive, accessible, and 
                performant web applications that make a difference.
              </p>
              
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 text-gray-900">Technical Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-3xl font-bold text-blue-600 mb-2">3+</h4>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-blue-600 mb-2">50+</h4>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
