import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import { projects } from '../data/projects';

export const ProjectsSection = () => {
  const [showOther, setShowOther] = useState(false);

  const featured = projects.slice(0, 3);
  const others = projects.slice(3);

  const heroProject = featured[0];
  const sideProjects = featured.slice(1);

  return (
    <section className="py-24 overflow-hidden" id="projects">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-accent-cyan font-medium mb-4 uppercase tracking-[0.2em] text-sm text-left">Selected Work</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white leading-[0.85] tracking-tighter">
              Selected <br /> <span className="text-gray-600">Work</span>
            </h3>
          </motion.div>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          {/* Hero Project - CodeVamp */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-8 group relative overflow-hidden rounded-[2.5rem] bg-card border border-white/10 flex flex-col"
          >
            {/* Image container remains fixed height */}
            <div className="relative h-[360px] md:h-[400px] w-full overflow-hidden shrink-0">
              <motion.img
                src={heroProject.thumbnail}
                alt={heroProject.title}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-card via-card/50 to-transparent" />
              <Link to={`/projects/${heroProject.id}`} className="absolute top-8 right-8 h-12 w-12 md:h-16 md:w-16 rounded-full bg-accent-cyan flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-all duration-500 shadow-xl group-hover:scale-110 z-20">
                <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 text-background" />
              </Link>
            </div>

            {/* Text container fills remaining space and anchors content to bottom */}
            <div className="flex-1 flex flex-col justify-end relative z-10 px-8 md:px-10 pb-6 md:pb-8 -mt-24 md:-mt-32">
              <div className="flex flex-wrap gap-2 mb-3">
                {heroProject.technologies.slice(0, 4).map(tech => (
                  <span key={tech} className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md rounded-full text-white border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">{heroProject.title}</h4>
              <p className="text-gray-400 max-w-xl mb-4 line-clamp-2 text-sm">{heroProject.description}</p>
              <div className="flex items-center gap-8">
                {heroProject.achievements.slice(0, 2).map((achievement, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-white font-bold md:text-lg">{achievement.split(' ')[0]}</span>
                    <span className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">{achievement.split(' ').slice(1).join(' ')}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Side Projects - Search Rule Engine & Kumoni */}
          <div className="lg:col-span-4 flex flex-col gap-1">
            {sideProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 2 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                className="flex-1 group relative overflow-hidden rounded-[2.5rem] bg-card border border-white/10 flex flex-col justify-end min-h-[300px]"
              >
                <motion.img
                  src={project.thumbnail}
                  alt={project.title}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />

                <div className="relative z-10 p-8">
                  <h4 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-accent-cyan transition-colors duration-500">{project.title}</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span key={tech} className="text-[10px] font-bold text-accent-cyan uppercase tracking-widest">{tech}</span>
                    ))}
                  </div>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-2 leading-relaxed">{project.description}</p>
                  <div className="h-[1px] w-0 group-hover:w-full bg-accent-cyan transition-all duration-700 mt-4" />
                </div>

                <Link to={`/projects/${project.id}`} className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0 z-20">
                  <div className="p-2 rounded-full border border-accent-cyan/20">
                    <ArrowUpRight className="w-6 h-6 text-accent-cyan" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Work Toggle */}
        <div className="flex flex-col items-center mt-8">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowOther(!showOther)}
            className="flex items-center gap-3 text-gray-500 hover:text-white transition-all py-8 group"
          >
            <span className="font-bold tracking-[0.2em] uppercase text-xs">{showOther ? 'Hide Archives' : 'Explore Archives'}</span>
            <div className="p-2 rounded-full border border-white/5 group-hover:border-white/20 transition-colors">
              {showOther ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </div>
          </motion.button>

          <AnimatePresence>
            {showOther && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
                  {others.map((project, i) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                      className="group p-8 rounded-[2rem] bg-card border border-white/5 transition-all duration-300 hover:border-white/10"
                    >
                      <h5 className="text-xl font-bold text-white mb-4 group-hover:text-accent-cyan transition-colors">{project.title}</h5>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map(tech => (
                          <span key={tech} className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{tech}</span>
                        ))}
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};