import React from 'react';
import { Trophy, Code2, Star, Users, Zap } from 'lucide-react';

const achievements = [
  {
    category: 'Competitive Programming',
    icon: Code2,
    metrics: [
      '600+ LeetCode problems solved',
      'Top 100 rank in university',
      '5-star HackerRank rating',
      '20+ competitive programming contests',
    ],
  },
  {
    category: 'Production Impact',
    icon: Zap,
    metrics: [
      '1,000+ API requests/second (CodeVamp)',
      '99.9% transcription accuracy (NLP)',
      '95% search accuracy (Rule Engine)',
      '500+ students mentored',
    ],
  },
  {
    category: 'Certifications',
    icon: Trophy,
    metrics: [
      'AWS Certified Cloud Practitioner',
      'Google Cloud Platform Certified',
      'MongoDB University Certification',
      'TensorFlow Developer Certificate',
    ],
  },
  {
    category: 'Open Source & Community',
    icon: Star,
    metrics: [
      'GSSOC Active Contributor',
      'Hacktoberfest Participant (2023)',
      'Multiple accepted pull requests',
      'Maintained personal open-source projects',
    ],
  },
  {
    category: 'Leadership',
    icon: Users,
    metrics: [
      '500+ students mentored (WeCode)',
      '40% improvement in project success rate',
      '10+ hackathons organized',
      'Technical workshops conducted',
    ],
  },
];

const AchievementCard = ({ category, icon: Icon, metrics }: any) => (
  <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-purple-500">
    <div className="flex items-start space-x-4">
      <div className="p-3 bg-purple-500/10 rounded-lg">
        <Icon className="w-6 h-6 text-purple-500" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-white mb-4">{category}</h3>
        <ul className="space-y-2">
          {metrics.map((metric: string) => (
            <li key={metric} className="flex items-start text-gray-300">
              <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 mr-3 flex-shrink-0" />
              <span className="text-sm">{metric}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export const AchievementsSection = () => {
  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Achievements & Recognition</h2>
          <p className="text-gray-400 max-w-3xl">
            Quantified impact across competitive programming, production systems, community contributions, and technical leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map(({ category, icon, metrics }) => (
            <AchievementCard
              key={category}
              category={category}
              icon={icon}
              metrics={metrics}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
