import React from 'react';
import { Code2, ChevronRight } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-10 bg-cover bg-center" />
      
      <div className="relative container mx-auto px-6 py-32">
        <div className="flex flex-col items-center text-center space-y-8">
        <div className="w-20 h-20 relative overflow-hidden rounded-full shadow-[0_0_25px_rgba(255,0,0,1),_0_0_50px_rgba(255,0,0,1)] transition-all duration-300">
  <img src="https://github.com/AtulJoshi1206/images/blob/main/WhatsApp%20Image%202024-01-12%20at%2012.55.50_c546061e.jpg?raw=true" alt="Vampire Icon" className="w-full h-full object-cover"/>
</div>

          
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Atul Joshi
          </h1>
          
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg">
            <img 
              src="https://github.com/AtulJoshi1206/images/blob/main/atul.jpg?raw=true" 
              alt="Atul Joshi"
              className="w-full h-full object-cover"
            />
          </div>
          
          <p className="text-2xl font-light max-w-2xl">
            Crafting Solutions with Code and Innovation
          </p>

          <p className="text-lg text-gray-300 max-w-3xl">
          I’m Atul Joshi, a dedicated software developer passionate about building innovative solutions in full-stack development, machine learning, and cloud technologies. Pursuing a B.Tech in Computer Science at Graphic Era Hill University with a CGPA of 8.4, I bring expertise in Python, Flask, MongoDB, and cloud platforms like AWS and Google Cloud.

I’ve developed impactful projects, including a Search Rule Engine using AST and a full-stack coding platform. My dream is to contribute to groundbreaking technologies while mentoring aspiring developers. Skilled in AI, NLP, backend development, and agile methodologies, I aim to drive impactful, scalable software solutions.</p>
          
          <HashLink 
            to="#projects" 
            smooth
            className="group flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <span>Explore My Work</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </HashLink>
        </div>
      </div>
    </div>
  );
};