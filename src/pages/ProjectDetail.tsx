import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { projects } from '../data/projects';

export const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 pt-20 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <Link to="/" className="text-purple-400 hover:text-purple-300">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-20 pb-16">
      <div className="container mx-auto px-6">
        <Link to="/#projects" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8">
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Projects
        </Link>

        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-96 object-cover"
          />
          <div className="p-8">
            <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
            <p className="text-gray-300 mb-8">{project.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-2xl font-semibold text-purple-400 mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-gray-700 text-purple-300 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-purple-400 mb-4">Key Features</h2>
                <ul className="space-y-2">
                  {project.features.map(feature => (
                    <li key={feature} className="flex items-start text-gray-300">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold text-purple-400 mb-4">Challenges</h2>
                <ul className="space-y-2">
                  {project.challenges.map(challenge => (
                    <li key={challenge} className="flex items-start text-gray-300">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-purple-400 mb-4">Achievements</h2>
                <ul className="space-y-2">
                  {project.achievements.map(achievement => (
                    <li key={achievement} className="flex items-start text-gray-300">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">Images</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Project Image ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
