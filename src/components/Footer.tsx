import React from 'react';
import { Github, Linkedin, Code2, BookOpen } from 'lucide-react';

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/atuljoshi',
    label: 'GitHub'
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/atuljoshi',
    label: 'LinkedIn'
  },
  {
    icon: Code2,
    href: 'https://leetcode.com/atuljoshi',
    label: 'LeetCode'
  },
  {
    icon: BookOpen,
    href: 'https://geeksforgeeks.org/user/atuljoshi',
    label: 'GeeksforGeeks'
  }
];

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-500 transition-colors duration-300"
                aria-label={label}
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} CodeVamp Innovations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}