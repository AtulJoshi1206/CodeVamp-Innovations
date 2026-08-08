import { motion } from 'framer-motion';
import React from 'react';

interface CaseStudyProps {
  heroMetric: string;
  heroLabel: string;
  problem: string[];
  approach: string[];
  outcome: string[];
  subProjects: Array<{ title: string; desc: string; metric: string }>;
}

export const CaseStudyCard: React.FC<CaseStudyProps> = ({
  heroMetric,
  heroLabel,
  problem,
  approach,
  outcome,
  subProjects
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="rounded-3xl bg-gradient-to-br from-card to-surface-0 border border-white/10 p-12 md:p-16 space-y-12"
    >
      {/* Hero Metric */}
      <div className="flex items-baseline gap-6">
        <div className="flex flex-col">
          <span className="text-6xl md:text-7xl font-serif-display text-gradient">
            {heroMetric}
          </span>
          <span className="text-sm uppercase tracking-widest text-gray-500 mt-2">
            {heroLabel}
          </span>
        </div>
      </div>

      {/* Problem-Approach-Outcome Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Problem */}
        <div>
          <h4 className="font-serif-display text-xl text-accent-primary-400 mb-4">
            Problem
          </h4>
          <ul className="space-y-2">
            {problem.map((p, i) => (
              <li key={i} className="text-sm text-gray-400 flex gap-3">
                <span className="text-accent-gold-500 flex-shrink-0">◆</span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Approach */}
        <div>
          <h4 className="font-serif-display text-xl text-accent-primary-400 mb-4">
            Approach
          </h4>
          <ul className="space-y-2">
            {approach.map((a, i) => (
              <li key={i} className="text-sm text-gray-400 flex gap-3">
                <span className="text-accent-gold-500 flex-shrink-0">◆</span>
                {a}
              </li>
            ))}
          </ul>
        </div>

        {/* Outcome */}
        <div>
          <h4 className="font-serif-display text-xl text-accent-primary-400 mb-4">
            Outcome
          </h4>
          <ul className="space-y-2">
            {outcome.map((o, i) => (
              <li key={i} className="text-sm text-gray-400 flex gap-3">
                <span className="text-accent-gold-500 flex-shrink-0">◆</span>
                {o}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sub-Project Tiles */}
      {subProjects.length > 0 && (
        <div className="pt-8 border-t border-white/5">
          <h4 className="font-serif-display text-sm uppercase tracking-widest text-gray-500 mb-6">
            Key Projects
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {subProjects.map((proj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/10 transition-colors"
              >
                <h5 className="font-bold text-white text-sm mb-1">{proj.title}</h5>
                <p className="text-xs text-gray-400 mb-2">{proj.desc}</p>
                <span className="text-xs font-bold text-accent-gold-500">{proj.metric}</span>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};
