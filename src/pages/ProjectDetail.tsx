import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Github, ExternalLink, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';

export const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
        <Link to="/" className="text-accent-cyan flex items-center gap-2 hover:underline">
          <ChevronLeft /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent-cyan/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent-amber/10 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12 group">
            <div className="p-2 rounded-full border border-white/5 group-hover:bg-white/10">
              <ChevronLeft size={20} />
            </div>
            <span className="text-sm font-bold uppercase tracking-widest">Back to Gallery</span>
          </Link>

          <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="h-px w-8 bg-accent-cyan" />
                <div className="flex gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="text-[10px] font-bold text-accent-cyan uppercase tracking-widest">{tech}</span>
                  ))}
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-8"
              >
                {project.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl"
              >
                {project.description}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex gap-4"
            >
              <button className="h-20 w-20 rounded-full bg-white text-background flex items-center justify-center hover:bg-accent-cyan transition-colors">
                <Github size={32} />
              </button>
              <button className="h-20 w-20 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-background transition-all">
                <ExternalLink size={32} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Media & Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="aspect-video rounded-[3rem] overflow-hidden border border-white/5"
              >
                <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
              </motion.div>

              <div className="space-y-12 pr-0 lg:pr-12">
                <div>
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-4">
                    <div className="h-10 w-1 bg-accent-cyan rounded-full" />
                    Key Features
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map(feature => (
                      <div key={feature} className="p-6 rounded-3xl bg-card border border-white/5 flex items-start gap-4">
                        <div className="mt-1 h-2 w-2 rounded-full bg-accent-cyan shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                        <span className="text-gray-400 text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-4">
                    <div className="h-10 w-1 bg-accent-amber rounded-full" />
                    Engineering Challenges
                  </h2>
                  <div className="space-y-4">
                    {project.challenges.map(challenge => (
                      <div key={challenge} className="p-6 rounded-3xl bg-card border border-white/5 border-l-accent-amber border-l-2">
                        <p className="text-gray-400 text-sm leading-relaxed">{challenge}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-8">
              <div className="p-10 rounded-[2.5rem] bg-card border border-white/5 sticky top-32">
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 mb-8 text-center">Impact & Results</h3>
                <div className="space-y-10">
                  {project.achievements.map((achievement, i) => (
                    <div key={i} className="flex flex-col items-center text-center">
                      <span className="text-4xl font-bold text-white mb-2">{achievement.split(' ')[0]}</span>
                      <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{achievement.split(' ').slice(1).join(' ')}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-12 border-t border-white/5 flex flex-col gap-4">
                  <button className="w-full py-5 rounded-2xl bg-accent-cyan text-background font-bold text-sm uppercase tracking-widest hover:scale-[1.02] transition-transform">
                    View Live Demo
                  </button>
                  <button className="w-full py-5 rounded-2xl border border-white/10 font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-background transition-all">
                    Documentation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-32 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <span className="text-gray-600 font-bold uppercase tracking-[0.4em] text-xs mb-8 block">Up Next</span>
          <Link to="/#projects" className="group">
            <h3 className="text-5xl md:text-8xl font-bold text-white mb-10 hover:text-accent-cyan transition-colors">Check out more <br /> works <ArrowRight className="inline-block w-12 h-12 md:w-20 md:h-20 group-hover:translate-x-4 transition-transform" /></h3>
          </Link>
        </div>
      </section>
    </div>
  );
};
