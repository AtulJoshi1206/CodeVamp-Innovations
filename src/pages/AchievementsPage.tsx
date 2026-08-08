import React from 'react';
import { Trophy, Award, Star, Code2 } from 'lucide-react';

const achievements = [
  {
    category: 'Competitive & Hackathons',
    icon: Trophy,
    items: [
      'Global Rank 18 — Spark-Wars 4.0 (Databricks x Celebal Technologies): Apache Spark, SQL, Data Engineering real-world challenges',
      'Coordinated and executed 10+ college technical events and hackathons',
      'Participated in hackathon-driven innovation and competitive problem-solving',
      'Drove 40% participation boost through community engagement',
    ],
  },
  {
    category: 'Technical Product Leadership',
    icon: Code2,
    items: [
      'Led end-to-end AIT platform ownership serving internal teams and external users',
      'Architected and deployed AI-driven automation reducing operational overhead by 40%+',
      'Designed and deployed production systems handling 31+ course migrations at scale',
      'Built algorithmic matching system (Python/NetworkX) serving 100+ monthly cross-venture participants',
    ],
  },
  {
    category: 'Open Source & Research',
    icon: Star,
    items: [
      'Active contributor to Hugging Face open-source programs',
      'Published 2 peer-reviewed research papers on Kumaoni language preservation and neural machine translation (AJOMCOR)',
      'Contributed to language digitization and cultural preservation initiatives',
      'Engaged in continuous learning and community contribution',
    ],
  },
  {
    category: 'Leadership & Mentorship',
    icon: Award,
    items: [
      'Mentored 300+ students in AI/ML principles and programming fundamentals',
      'Organized 10+ college-wide technical events and festivals',
      'Led team projects and coordinated hackathons with 40%+ participation growth',
      'Facilitated in-depth learning through workshops and hands-on mentorship',
    ],
  },
];

const AchievementCard = ({ achievement }: any) => {
  const Icon = achievement.icon;

  return (
    <div className="card-glow p-6">
      <div className="flex items-center space-x-4 mb-6">
        <div className="p-3 bg-accent-primary-500/10 rounded-lg">
          <Icon className="w-6 h-6 text-accent-primary-500" />
        </div>
        <h3 className="text-xl font-semibold text-white">{achievement.category}</h3>
      </div>
      <ul className="space-y-4">
        {achievement.items.map((item: string) => (
          <li key={item} className="flex items-start text-gray-400">
            <div className="w-1.5 h-1.5 rounded-full bg-accent-primary-500 mt-2 mr-3" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const AchievementsPage = () => {
  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-white mb-12 font-serif-display">Achievements</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.category} achievement={achievement} />
          ))}
        </div>
      </div>
    </div>
  );
};