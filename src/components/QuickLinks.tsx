import React from 'react';
import { User, Code, Briefcase, Trophy, Mail, Brain, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const links = [
  { icon: User, label: 'About Me', href: '/about', isPage: true },
  { icon: Brain, label: 'Skills', href: '/#skills', isPage: false },
  { icon: Code, label: 'Projects', href: '/#projects', isPage: false },
  { icon: Briefcase, label: 'Experience', href: '/#internships', isPage: false },
  { icon: Trophy, label: 'Research', href: '/#research', isPage: false },
  { icon: Mail, label: 'Contact', href: '/#contact', isPage: false },
  {
    icon: FileText,
    label: 'Resume',
    href: 'https://drive.google.com/file/d/1yrkxXSgeburmzjyDbmBKDaU7kC00GVmt/view?usp=drive_link',
    isPage: false,
    isExternal: true,
  },
];

export const QuickLinks = () => {
  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8">
          {links.map(({ icon: Icon, label, href, isPage, isExternal }) => {
            if (isExternal) {
              // Render external link with <a> tag
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center space-y-4 text-gray-400 hover:text-purple-500 transition-all duration-300"
                >
                  <div className="relative p-6 bg-gray-800 rounded-full group-hover:bg-gray-700 transition-colors">
                    <div className="absolute inset-0 rounded-full bg-purple-500 opacity-0 group-hover:opacity-20 transition-opacity" />
                    <Icon className="w-8 h-8" />
                  </div>
                  <span className="font-medium">{label}</span>
                </a>
              );
            }

            const Component = isPage ? Link : HashLink;
            return (
              <Component
                key={label}
                to={href}
                smooth
                className="group flex flex-col items-center space-y-4 text-gray-400 hover:text-purple-500 transition-all duration-300"
              >
                <div className="relative p-6 bg-gray-800 rounded-full group-hover:bg-gray-700 transition-colors">
                  <div className="absolute inset-0 rounded-full bg-purple-500 opacity-0 group-hover:opacity-20 transition-opacity" />
                  <Icon className="w-8 h-8" />
                </div>
                <span className="font-medium">{label}</span>
              </Component>
            );
          })}
        </div>
      </div>
    </div>
  );
};
