import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Calendar, Briefcase } from 'lucide-react';
import { internships } from '../data/internships';

export const InternshipDetail = () => {
  const { id } = useParams();
  const internship = internships.find(i => i.id === id);

  if (!internship) {
    return (
      <div className="min-h-screen bg-gray-900 pt-20 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Internship Not Found</h1>
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
        <Link to="/#internships" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8">
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Internships
        </Link>

        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <div className="relative h-96">
            <img
              src={internship.images[0]}
              alt={internship.company}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h1 className="text-4xl font-bold text-white mb-2">{internship.company}</h1>
              <div className="flex items-center space-x-4 text-gray-300">
                <div className="flex items-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  {internship.role}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  {internship.period}
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <p className="text-gray-300 mb-8">{internship.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold text-purple-400 mb-4">Key Highlights</h2>
                <ul className="space-y-2">
                  {internship.highlights.map(highlight => (
                    <li key={highlight} className="flex items-start text-gray-300">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-purple-400 mb-4">Skills Gained</h2>
                <div className="flex flex-wrap gap-2">
                  {internship.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-gray-700 text-purple-300 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {internship.images.length > 1 && (
              <div className="mt-8">
                <h2 className="text-2xl font-semibold text-purple-400 mb-4">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {internship.images.slice(1).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${internship.company} - ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};