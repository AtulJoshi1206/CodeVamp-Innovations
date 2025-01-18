import React from 'react';
import { Brain, Code2, Database, Wrench, Globe } from 'lucide-react';

const skills = {
  languages: [
    { name: 'Python', proficiency: 'Expert', projects: ['CodeVamp Platform', 'NLP Project'] },
    { name: 'C++', proficiency: 'Advanced', projects: ['Search Rule Engine'] },
    { name: 'JavaScript', proficiency: 'Expert', projects: ['Weather App'] },
  ],
  frameworks: [
    { name: 'Flask', proficiency: 'Expert', projects: ['CodeVamp Platform'] },
    { name: 'TensorFlow', proficiency: 'Advanced', projects: ['Healthcare Chatbot'] },
    { name: 'PyTorch', proficiency: 'Intermediate', projects: ['NLP Projects'] },
  ],
  databases: [
    { name: 'MongoDB', proficiency: 'Expert', projects: ['CodeVamp Platform'] },
    { name: 'PostgreSQL', proficiency: 'Advanced', projects: ['Weather App'] },
    { name: 'DynamoDB', proficiency: 'Intermediate', projects: ['Search Engine'] },
  ],
  tools: [
    { name: 'Git', proficiency: 'Expert', projects: ['All Projects'] },
    { name: 'Docker', proficiency: 'Advanced', projects: ['CodeVamp Platform'] },
    { name: 'AWS', proficiency: 'Advanced', projects: ['Multiple Projects'] },
  ],
};

const SkillCard = ({ skill, icon: Icon }: any) => (
  <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
    <div className="flex items-center space-x-4 mb-4">
      <Icon className="w-6 h-6 text-purple-500" />
      <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
    </div>
    <div className="space-y-2">
      <p className="text-purple-400 text-sm">{skill.proficiency}</p>
      <div className="text-gray-400 text-sm">
        Projects: {skill.projects.join(', ')}
      </div>
    </div>
  </div>
);

export const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-20 pb-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-white mb-12">Technical Skills</h1>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-purple-400 mb-6 flex items-center">
              <Code2 className="w-6 h-6 mr-2" />
              Programming Languages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.languages.map((skill) => (
                <SkillCard key={skill.name} skill={skill} icon={Code2} />
              ))}
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-purple-400 mb-6 flex items-center">
              <Brain className="w-6 h-6 mr-2" />
              Frameworks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.frameworks.map((skill) => (
                <SkillCard key={skill.name} skill={skill} icon={Brain} />
              ))}
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-purple-400 mb-6 flex items-center">
              <Database className="w-6 h-6 mr-2" />
              Databases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.databases.map((skill) => (
                <SkillCard key={skill.name} skill={skill} icon={Database} />
              ))}
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-purple-400 mb-6 flex items-center">
              <Wrench className="w-6 h-6 mr-2" />
              Tools & Technologies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.tools.map((skill) => (
                <SkillCard key={skill.name} skill={skill} icon={Wrench} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};