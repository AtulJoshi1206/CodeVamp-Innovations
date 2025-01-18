import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Brain, Cloud, Thermometer, MessageSquare } from 'lucide-react';
import { projects } from '../data/projects';

const iconMap: { [key: string]: any } = {
  'codevamp-platform': Code2,
  'search-rule-engine': Brain,
  'nlp-project': Cloud,
  'weather-app': Thermometer,
  'healthcare-chatbot': MessageSquare,
};

export const ProjectsSection = () => {
  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const Icon = iconMap[project.id] || Code2;
            return (
              <Link to={`/projects/${project.id}`} key={project.id} className="group">
                <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                  <div className="relative h-48">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Icon className="w-6 h-6 text-purple-500" />
                      <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-gray-700 text-purple-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};