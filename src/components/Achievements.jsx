import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: 'Top Contributor',
      description: 'Ranked in top 10 contributors on GitHub with 500+ commits',
      icon: '🏆',
      category: 'Open Source'
    },
    {
      id: 2,
      title: 'Problem Solver',
      description: 'Solved 1000+ coding challenges on LeetCode and HackerRank',
      icon: '🎯',
      category: 'Competitive Programming'
    },
    {
      id: 3,
      title: 'Hackathon Winner',
      description: 'Won 3 major hackathons with innovative full-stack solutions',
      icon: '🥇',
      category: 'Hackathons'
    },
    {
      id: 4,
      title: 'Tech Speaker',
      description: 'Delivered talks on React and Web Development at 5+ conferences',
      icon: '🎤',
      category: 'Speaking'
    },
    {
      id: 5,
      title: 'Mentor',
      description: 'Mentored 20+ junior developers and helped them land great jobs',
      icon: '👨‍🏫',
      category: 'Community'
    },
    {
      id: 6,
      title: 'Open Source Maintainer',
      description: 'Maintain 5+ active open-source projects with 1000+ stars',
      icon: '⭐',
      category: 'Open Source'
    },
    {
      id: 7,
      title: 'Dean\'s List',
      description: 'Featured on Dean\'s List for academic excellence 4 semesters',
      icon: '📚',
      category: 'Academic'
    },
    {
      id: 8,
      title: 'Perfect Score',
      description: 'Achieved 100% score in Advanced Web Development course',
      icon: '💯',
      category: 'Academic'
    }
  ];

  const stats = [
    { label: 'GitHub Contributions', value: '3000+', icon: '📈' },
    { label: 'Projects Completed', value: '50+', icon: '🎉' },
    { label: 'Community Members Helped', value: '500+', icon: '🤝' },
    { label: 'Technical Articles', value: '30+', icon: '📝' }
  ];

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-black/30">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Achievements & Milestones
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Recognition and accomplishments throughout my career
        </p>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6 text-center border border-blue-200 dark:border-gray-600 hover:shadow-lg transition-shadow"
            >
              <p className="text-4xl mb-3">{stat.icon}</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </p>
              <p className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600 hover:shadow-lg hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
                {achievement.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {achievement.title}
              </h3>
              
              <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                {achievement.category}
              </span>
              
              <p className="text-gray-600 dark:text-gray-300">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
