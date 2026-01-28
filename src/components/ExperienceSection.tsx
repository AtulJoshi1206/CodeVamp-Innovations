import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { internships } from '../data/internships';

export const ExperienceSection = () => {
  return (
    <section className="py-24 bg-background" id="experience">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-accent-cyan" />
            <span className="text-accent-cyan font-bold tracking-[0.3em] text-xs uppercase text-left">Journey</span>
          </div>
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-[0.85] tracking-tighter">
            Professional <br /> <span className="text-gray-600">Experience</span>
          </h3>
        </motion.div>

        <div className="space-y-8">
          {internships.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="relative pl-8 md:pl-12 border-l border-white/10 group"
            >
              <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-accent-cyan shadow-[0_0_10px_rgba(34,211,238,0.5)] group-hover:scale-150 transition-transform" />
              <div className="bg-card border border-white/5 p-8 rounded-3xl hover:border-white/10 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-accent-cyan transition-colors duration-500">{exp.role}</h4>
                    <div className="flex items-center gap-2 text-accent-cyan font-medium">
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-4">
                  {exp.highlights.slice(0, 3).map((highlight, i) => (
                    <li key={i} className="flex items-start gap-4 text-gray-400 leading-relaxed">
                      <div className="h-[1px] w-4 bg-accent-cyan/50 mt-3 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};