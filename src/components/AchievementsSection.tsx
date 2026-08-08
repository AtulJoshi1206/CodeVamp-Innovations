import { motion } from 'framer-motion';

const metrics = [
  { value: '2', label: 'Published Papers', category: 'Research' },
  { value: '500+', label: 'Students Mentored', category: 'Leadership' },
  { value: '40%+', label: 'Faster SLA Turnaround', category: 'Operations' },
  { value: '99.9%', label: 'Uptime SLA', category: 'Systems' },
  { value: '99.9%', label: 'NLP Accuracy', category: 'Research' },
  { value: '10+', label: 'Hackathons Organized', category: 'Community' },
  { value: '31+', label: 'Courses Migrated & Owned', category: 'Product' },
];

export const AchievementsSection = () => {
  return (
    <section className="py-24" id="achievements">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-accent-gold-500" />
            <span className="text-accent-gold-500 font-bold tracking-[0.3em] text-xs uppercase">Proof of Impact</span>
          </div>
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center leading-[0.85] tracking-tighter">
            Quantified <br /> <span className="text-gray-600">Success</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.05, ease: "easeOut" }}
              className="card-glow-gold p-8 flex flex-col items-center text-center group"
            >
              <span className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {metric.value}
              </span>
              <span className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-1">
                {metric.category}
              </span>
              <span className="text-gray-400 text-sm font-medium">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
