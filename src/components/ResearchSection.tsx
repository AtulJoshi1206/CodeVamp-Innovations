import { motion } from 'framer-motion';
import { FileText, ArrowUpRight, Award } from 'lucide-react';
import { researches } from '../data/research';

export const ResearchSection = () => {
  return (
    <section className="py-24 bg-card/20" id="research">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-accent-amber" />
            <span className="text-accent-amber font-bold tracking-[0.3em] text-xs uppercase">Academic Rigor</span>
          </div>
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-[0.85] tracking-tighter">
            Research & <br /> <span className="text-gray-600">Publications</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {researches.map((paper, index) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="bg-card border border-white/5 p-8 rounded-3xl relative overflow-hidden group hover:border-accent-amber/50 transition-colors"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <FileText className="w-24 h-24 text-accent-amber" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <span className="px-3 py-1 bg-accent-amber/5 text-accent-amber text-[10px] font-bold uppercase tracking-wider rounded-full border border-accent-amber/10">
                    Journal Paper
                  </span>
                  {paper.isCorrespondingAuthor && (
                    <span className="flex items-center gap-1 px-3 py-1 bg-white/5 text-gray-400 text-[10px] font-bold uppercase tracking-wider rounded-full border border-white/10">
                      <Award className="w-3 h-3" /> Corresponding Author
                    </span>
                  )}
                </div>

                <h4 className="text-xl md:text-2xl font-bold text-white mb-4 leading-snug group-hover:text-accent-amber transition-colors duration-500">
                  {paper.title}
                </h4>

                <p className="text-sm text-gray-400 mb-6 font-medium">
                  {paper.authors.map((author, i) => (
                    <span key={author} className={author === 'Atul Joshi' ? 'text-white underline decoration-accent-amber underline-offset-4' : ''}>
                      {author}{i < paper.authors.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500 font-bold uppercase text-[10px] tracking-widest text-nowrap">Journal:</span>
                    <span className="text-gray-300">{paper.journal} (Vol. {paper.volume}, Issue {paper.issue})</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500 font-bold uppercase text-[10px] tracking-widest text-nowrap">DOI:</span>
                    <span className="text-accent-amber/80 font-mono text-[11px] break-all">{paper.doi}</span>
                  </div>
                </div>

                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white font-bold hover:text-accent-amber transition-colors group/link"
                >
                  Read Paper
                  <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
