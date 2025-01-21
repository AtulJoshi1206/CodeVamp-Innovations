import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Using icons for hamburger menu
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

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
          {/* Logo */}
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

          {/* Hamburger menu icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-purple-400 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Desktop Navbar Links */}
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
            >
              Resume
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mt-4 bg-gray-800 rounded-lg shadow-lg">
            <ul className="flex flex-col divide-y divide-gray-700">
              {navLinks.map(({ path, label, isHash }) => {
                const Component = isHash ? HashLink : Link;
                return (
                  <li key={path} className="py-3 px-4">
                    <Component
                      to={path}
                      smooth
                      className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors block"
                      onClick={() => setIsOpen(false)} // Close menu on link click
                    >
                      {label}
                    </Component>
                  </li>
                );
              })}
              <li className="py-3 px-4">
                <a
                  href="https://drive.google.com/file/d/1yrkxXSgeburmzjyDbmBKDaU7kC00GVmt/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors block"
                  onClick={() => setIsOpen(false)} // Close menu on resume link click
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
