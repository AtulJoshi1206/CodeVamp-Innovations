import React from 'react';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

const internships = [
  
  {
    id: 'wecode',
    company: 'WeCode',
    role: 'Mentor',
    period: 'August 2024 - Present',
    description: 'Mentored 300+ students and guided 50+ projects to successful completion.',
    highlights: [
      'Organized multiple hackathons and coding competitions',
      'Provided technical guidance on full-stack development',
      'Improved student project success rate by 40%',
    ],
    skills: ['Mentorship', 'Project Management', 'Full Stack Development'],
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'infosys',
    company: 'Infosys Springboard',
    role: 'Project Intern',
    period: 'Apr 2024 - Aug 2024',
    description: 'Developed a meeting summarizer using cutting-edge NLP technologies.',
    highlights: [
      'Implemented backend services with 99.9% transcription accuracy',
      'Integrated Whisper and OpenAI APIs for enhanced functionality',
      'Practiced Agile methodologies in a team environment',
    ],
    skills: ['NLP', 'Python', 'FFmpeg', 'OpenAI API', 'Agile'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'bharat',
    company: 'Bharat Intern',
    role: 'Web Developer',
    period: 'June 2024 - August 2024',
    description: 'Created scalable web applications using modern technologies.',
    highlights: [
      'Developed responsive web interfaces',
      'Implemented RESTful APIs',
      'Optimized application performance',
    ],
    skills: ['React', 'Node.js', 'REST APIs', 'Performance Optimization'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

const InternshipCard = ({ internship }: any) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden">
    <img
      src={internship.image}
      alt={internship.company}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-white">{internship.company}</h3>
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
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-purple-400 mb-2">Highlights</h4>
          <ul className="space-y-2">
            {internship.highlights.map((highlight: string) => (
              <li key={highlight} className="flex items-start text-gray-400">
                <ChevronRight className="w-4 h-4 mr-2 mt-1 text-purple-500" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-purple-400 mb-2">Skills</h4>
          <div className="flex flex-wrap gap-2">
            {internship.skills.map((skill: string) => (
              <span
                key={skill}
                className="px-3 py-1 text-sm bg-gray-700 text-purple-300 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const InternshipsPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-20 pb-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-white mb-12">Internships & Experience</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {internships.map((internship) => (
            <InternshipCard key={internship.id} internship={internship} />
          ))}
        </div>
      </div>
    </div>
  );
};