import React from 'react';

const CodingProfiles = () => {
  const profiles = [
    {
      name: 'GitHub',
      username: 'yashveer',
      icon: '🐙',
      url: 'https://github.com/yashveer',
      description: 'Open source contributions and projects',
      stats: { label: 'Repositories', value: '50+' }
    },
    {
      name: 'LeetCode',
      username: 'yashveer',
      icon: '💻',
      url: 'https://leetcode.com/yashveer',
      description: 'Problem solving and algorithms',
      stats: { label: 'Problems Solved', value: '200+' }
    },
    {
      name: 'Codeforces',
      username: 'yashveer',
      icon: '⚡',
      url: 'https://codeforces.com/profile/yashveer',
      description: 'Competitive programming',
      stats: { label: 'Rating', value: '1600+' }
    },
    {
      name: 'HackerRank',
      username: 'yashveer',
      icon: '🏆',
      url: 'https://hackerrank.com/yashveer',
      description: 'Coding challenges and certifications',
      stats: { label: 'Badges', value: '15+' }
    },
    {
      name: 'Stack Overflow',
      username: 'yashveer',
      icon: '📚',
      url: 'https://stackoverflow.com/users/123456/yashveer',
      description: 'Community contributions',
      stats: { label: 'Reputation', value: '1k+' }
    },
    {
      name: 'Dev.to',
      username: 'yashveer',
      icon: '✍️',
      url: 'https://dev.to/yashveer',
      description: 'Blog posts and tutorials',
      stats: { label: 'Articles', value: '25+' }
    }
  ];

  return (
    <section id="coding-profiles" className="py-20 bg-white dark:bg-black">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Coding Profiles
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          My presence across coding platforms and communities
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-white/10 rounded-xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="text-3xl mr-3">{profile.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {profile.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      @{profile.username}
                    </p>
                  </div>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {profile.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  {profile.stats.label}
                </span>
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                  {profile.stats.value}
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Feel free to connect with me on any of these platforms!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
