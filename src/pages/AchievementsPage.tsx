import React from 'react';
import { Trophy, Award, Star, Code2 } from 'lucide-react';

const achievements = [
  {
    category: 'Competitive Coding',
    icon: Code2,
    items: [
      'Solved 600+ challenges on LeetCode',
      'Ranked among top 100 in college',
      'Achieved 5-star rating on HackerRank',
      'Participated in 20+ coding competitions',
    ],
  },
  {
    category: 'Certifications',
    icon: Award,
    items: [
      '15+ Google Cloud Platform badges',
      'AWS Certified Cloud Practitioner',
      'MongoDB University Certifications',
      'TensorFlow Developer Certificate',
    ],
  },
  {
    category: 'Open Source',
    icon: Star,
    items: [
      'Active contributor in GSSOC',
      'Participated in Hacktoberfest 2023',
      'Multiple accepted pull requests',
      'Maintained personal open-source projects',
    ],
  },
  {
    category: 'Leadership',
    icon: Trophy,
    items: [
      'Organized 10+ college technical events',
      'Led team of 5 in hackathon projects',
      'Mentored 300+ students in programming',
      'Conducted workshops on web development',
    ],
  },
];

const AchievementCard = ({ achievement }: any) => {
  const Icon = achievement.icon;
  
  return (
    <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-all">
      <div className="flex items-center space-x-4 mb-6">
        <div className="p-3 bg-purple-500/10 rounded-lg">
          <Icon className="w-6 h-6 text-purple-500" />
        </div>
        <h3 className="text-xl font-semibold text-white">{achievement.category}</h3>
      </div>
      <ul className="space-y-4">
        {achievement.items.map((item: string) => (
          <li key={item} className="flex items-start text-gray-400">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-3" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const AchievementsPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-20 pb-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-white mb-12">Achievements</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.category} achievement={achievement} />
          ))}
        </div>
      </div>
    </div>
  );
};