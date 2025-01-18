import React from 'react';
import { Code2, Brain, Cloud, Thermometer, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'codevamp-platform',
    title: 'CodeVamp Online Coding Platform',
    description: 'A comprehensive coding platform supporting multiple languages with real-time compilation and execution.',
    icon: Code2,
    technologies: ['Python', 'MongoDB', 'Flask', 'React'],
    thumbnail: 'https://github.com/AtulJoshi1206/images/blob/main/356855265-88777264-9b9b-49fc-9a09-27eac15a5b50.png?raw=true',
    images: [
      'https://github.com/AtulJoshi1206/images/blob/main/356855278-9e269f4a-bcb4-4afc-a8dd-bd8a66600851.png?raw=true',
      'https://github.com/AtulJoshi1206/images/blob/main/356855265-88777264-9b9b-49fc-9a09-27eac15a5b50.png?raw=true',
      'https://github.com/AtulJoshi1206/images/blob/main/356855305-20a021cf-4b7a-4547-ab6b-3e542bccabe2.png?raw=true',
      'https://github.com/AtulJoshi1206/images/blob/main/356855328-a3513681-1f74-4538-846a-c94a59788c2f.png?raw=true',
      'https://github.com/AtulJoshi1206/images/blob/main/356867046-e2848252-2928-4330-a60c-16c945477d3c.png?raw=true'
    ]
  },
  {
    id: 'search-rule-engine',
    title: 'Search Rule Engine with AST',
    description: 'Advanced search engine utilizing Abstract Syntax Trees for real-time rule creation and modification.',
    icon: Brain,
    technologies: ['Python', 'MongoDB', 'Flask', 'Streamlit'],
    thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'nlp-project',
    title: 'Infosys NLP Project',
    description: 'Meeting summarizer using FFmpeg, Whisper, and OpenAI API with 99.9% transcription accuracy.',
    icon: Cloud,
    technologies: ['Python', 'OpenAI', 'FFmpeg', 'Whisper'],
    thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'weather-app',
    title: 'Weather Monitoring Application',
    description: 'Real-time weather monitoring system using OpenWeatherMap API and MongoDB Atlas.',
    icon: Thermometer,
    technologies: ['Python', 'MongoDB', 'APIs', 'React'],
    thumbnail: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'healthcare-chatbot',
    title: 'Healthcare Chatbot',
    description: 'AI-driven chatbot providing medical assistance and information using advanced NLP.',
    icon: MessageSquare,
    technologies: ['Python', 'TensorFlow', 'NLP', 'React'],
    thumbnail: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

const ProjectCard = ({ project }: any) => (
  <Link to={`/projects/${project.id}`} className="group">
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
          <project.icon className="w-6 h-6 text-purple-500" />
          <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
            {project.title}
          </h3>
        </div>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string) => (
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

export const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-20 pb-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-white mb-12">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};