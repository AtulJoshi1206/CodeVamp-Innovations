import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';
import { internships } from '../data/internships';

export const InternshipsSection = () => {
  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12">Internships & Experience</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {internships.map((internship) => (
            <Link to={`/internships/${internship.id}`} key={internship.id} className="group">
              <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img
                  src={internship.images[0]}
                  alt={internship.company}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {internship.company}
                    </h3>
                    <span className="flex items-center text-sm text-gray-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      {internship.period}
                    </span>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center text-purple-400 mb-2">
                      <Briefcase className="w-4 h-4 mr-2" />
                      <span className="font-medium">{internship.role}</span>
                    </div>
                    <p className="text-gray-400">{internship.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {internship.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm bg-gray-700 text-purple-300 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                    {internship.skills.length > 3 && (
                      <span className="px-3 py-1 text-sm bg-gray-700 text-purple-300 rounded-full">
                        +{internship.skills.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex items-center text-purple-400 group-hover:text-purple-300">
                    <span className="mr-2">View Details</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};