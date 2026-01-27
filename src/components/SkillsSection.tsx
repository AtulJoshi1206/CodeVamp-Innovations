import React from 'react';
import { Code2, Brain, Database, Server, Cloud } from 'lucide-react';

const skillCategories = [
  {
    category: 'Languages',
    icon: Code2,
    skills: [
      { name: 'Python', level: 'Expert', projects: ['CodeVamp', 'Search Rule Engine', 'NLP Systems'] },
      { name: 'JavaScript/TypeScript', level: 'Expert', projects: ['Frontend', 'Full-Stack'] },
      { name: 'C++', level: 'Advanced', projects: ['Systems Programming'] },
    ]
  },
  {
    category: 'Backend & Frameworks',
    icon: Server,
    skills: [
      { name: 'Flask', level: 'Expert', projects: ['CodeVamp', 'Search Engine', 'APIs'] },
      { name: 'Node.js/Express', level: 'Advanced', projects: ['APIs', 'Real-time Apps'] },
      { name: 'REST APIs', level: 'Expert', projects: ['All Backend Projects'] },
    ]
  },
  {
    category: 'AI/ML & NLP',
    icon: Brain,
    skills: [
      { name: 'TensorFlow/PyTorch', level: 'Advanced', projects: ['Healthcare Chatbot', 'ML Research'] },
      { name: 'NLP', level: 'Advanced', projects: ['Meeting Summarizer', 'Language Translator'] },
      { name: 'IndicBERT/Transformers', level: 'Intermediate', projects: ['Language Research'] },
    ]
  },
  {
    category: 'Data & Storage',
    icon: Database,
    skills: [
      { name: 'MongoDB', level: 'Expert', projects: ['CodeVamp', 'Search Engine', 'All Apps'] },
      { name: 'PostgreSQL/SQL', level: 'Advanced', projects: ['Relational Data'] },
      { name: 'Redis', level: 'Intermediate', projects: ['Caching'] },
    ]
  },
  {
    category: 'Cloud & DevOps',
    icon: Cloud,
    skills: [
      { name: 'AWS', level: 'Advanced', projects: ['EC2, S3, Deployment'] },
      { name: 'Docker', level: 'Advanced', projects: ['CodeVamp', 'Containerization'] },
      { name: 'GCP', level: 'Intermediate', projects: ['Cloud Functions'] },
    ]
  },
];

const SkillGroup = ({ category, icon: Icon, skills }: any) => (
  <div className="bg-gray-800 rounded-lg p-6">
    <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
      <Icon className="w-6 h-6 text-purple-500 mr-3" />
      {category}
    </h3>
    <div className="space-y-4">
      {skills.map((skill: any) => (
        <div key={skill.name} className="border-l-2 border-purple-500 pl-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-white font-medium">{skill.name}</h4>
            <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full">
              {skill.level}
            </span>
          </div>
          <p className="text-sm text-gray-400">{skill.projects.join(', ')}</p>
        </div>
      ))}
    </div>
  </div>
);

export const SkillsSection = () => {
  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Stack</h2>
          <p className="text-gray-400 max-w-3xl">
            Only technologies verified through production systems and real projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((group) => (
            <SkillGroup
              key={group.category}
              category={group.category}
              icon={group.icon}
              skills={group.skills}
            />
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg p-8 border border-purple-500/20">
          <h3 className="text-2xl font-bold text-white mb-6">Core Competencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-purple-400 font-semibold mb-2">Systems Engineering</h4>
              <p className="text-gray-400 text-sm">Scalable architectures, distributed systems, performance optimization</p>
            </div>
            <div>
              <h4 className="text-purple-400 font-semibold mb-2">Full-Stack Development</h4>
              <p className="text-gray-400 text-sm">End-to-end applications, APIs, real-time features, cloud deployment</p>
            </div>
            <div>
              <h4 className="text-purple-400 font-semibold mb-2">AI/ML Engineering</h4>
              <p className="text-gray-400 text-sm">NLP systems, language models, model optimization, research</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
