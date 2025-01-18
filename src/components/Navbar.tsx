import React from 'react';
import { Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export const Navbar = () => {
  const navLinks = [
    { path: '/', label: 'Home', isHash: false },
    { path: '/about', label: 'About', isHash: false },
    { path: '/#skills', label: 'Skills', isHash: true },
    { path: '/#projects', label: 'Projects', isHash: true },
    { path: '/#internships', label: 'Internships', isHash: true },
    { path: '/#achievements', label: 'Achievements', isHash: true },
    { path: '/#contact', label: 'Contact', isHash: true },
  ];

  return (
    <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 relative overflow-hidden rounded-full">
              <img
                src="https://github.com/AtulJoshi1206/images/blob/main/WhatsApp%20Image%202024-01-12%20at%2012.55.50_c546061e.jpg?raw=true"
                alt="Vampire Icon"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-bold text-white">
              CodeVamp Innovations
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ path, label, isHash }) => {
              const Component = isHash ? HashLink : Link;
              return (
                <Component
                  key={path}
                  to={path}
                  smooth
                  className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors"
                >
                  {label}
                </Component>
              );
            })}
            <a
              href="https://drive.google.com/file/d/1yrkxXSgeburmzjyDbmBKDaU7kC00GVmt/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors"
              download
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
