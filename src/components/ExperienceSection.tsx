import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { internships } from '../data/internships';
import { CaseStudyCard } from './CaseStudyCard';

export const ExperienceSection = () => {
  const weblifeEntry = internships.find(e => e.id === 'weblife-labs');

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
            <div className="h-px w-12 bg-accent-primary-500" />
            <span className="text-accent-primary-500 font-bold tracking-[0.3em] text-xs uppercase text-left">Journey</span>
          </div>
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-[0.85] tracking-tighter">
            Professional <br /> <span className="text-gray-600">Experience</span>
          </h3>
        </motion.div>

        {weblifeEntry && (
          <div className="mb-24">
            <CaseStudyCard
              company={weblifeEntry.company}
              role={weblifeEntry.role}
              period={weblifeEntry.period}
              heroMetric="40%+"
              heroLabel="SLA Turnaround Reduction"
              problem={[
                'Manual course migration blocked training delivery at scale',
                'ClickUp-based processes did not support product operations',
                'Cross-venture collaboration had no structured mechanism'
              ]}
              approach={[
                'Built SaaS Contract Management System (Next.js, PostgreSQL, Prisma)',
                'Engineered AI-driven course migration (31+ courses, 5+ Claude Skills)',
                'Deployed algorithmic peer-matching (Python, NetworkX, 100+ monthly users)'
              ]}
              outcome={[
                '40%+ reduction in operational SLA turnaround',
                'End-to-end AIT platform ownership (internal + external)',
                'Fully automated monthly matching with zero manual hours'
              ]}
              subProjects={[
                {
                  title: 'SaaS Contract System',
                  desc: 'Replaced legacy ClickUp tooling',
                  metric: '100% Data Migrated'
                },
                {
                  title: 'AIT Platform',
                  desc: 'Course migration & automation',
                  metric: '31+ Courses Live'
                },
                {
                  title: 'Peer Connect',
                  desc: 'Cross-venture matching algorithm',
                  metric: '100+ Monthly Participants'
                }
              ]}
            />
          </div>
        )}

        <div className="space-y-8">
          {internships.filter(e => e.id !== 'weblife-labs').map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="relative pl-8 md:pl-12 border-l border-white/5 group"
            >
              <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-accent-primary-500 shadow-[0_0_15px_rgba(99,102,241,0.6)] group-hover:scale-150 transition-transform" />
              <div className="bg-card border border-white/5 p-8 rounded-3xl hover:border-white/10 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-accent-primary transition-colors duration-500">{exp.role}</h4>
                    <div className="flex items-center gap-2 text-accent-primary-500 font-medium">
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-2 text-sm">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-accent-primary-500/10 to-accent-gold-500/10 border border-accent-primary-500/20">
                      <Calendar className="w-4 h-4 text-accent-primary-500" />
                      <span className="text-gray-300 font-medium">{exp.period}</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-4">
                  {exp.highlights.slice(0, 3).map((highlight, i) => (
                    <li key={i} className="flex items-start gap-4 text-gray-400 leading-relaxed">
                      <div className="h-[1px] w-4 bg-accent-primary-500/50 mt-3 flex-shrink-0" />
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