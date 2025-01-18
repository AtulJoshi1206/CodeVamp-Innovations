import React, { useState } from 'react';
import { Mail, Github, Linkedin, Code2, BookOpen, Send } from 'lucide-react';

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/AtulJoshi1206',
    label: 'GitHub',
    username: '@atuljoshi',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/atul-joshi-54928018a/',
    label: 'LinkedIn',
    username: 'Atul Joshi',
  },
  {
    icon: Code2,
    href: 'https://leetcode.com/u/Atul_joshi/',
    label: 'LeetCode',
    username: '@atuljoshi',
  },
  {
    icon: BookOpen,
    href: 'https://www.geeksforgeeks.org/user/atuljoshi1206/',
    label: 'GeeksforGeeks',
    username: '@atuljoshi',
  },
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/xbllvjow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12">Get in Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-purple-400 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-gray-400">
                  <Mail className="w-6 h-6 text-purple-500" />
                  <span>atul.joshi1206@gmail.com</span>
                </div>
                
                {socialLinks.map(({ icon: Icon, href, label, username }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <Icon className="w-6 h-6 text-purple-500" />
                    <span>{username}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-purple-400 mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="flex items-center justify-center space-x-2 w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};