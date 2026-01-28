import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import AtulImg from '../Images/Atul_joshi.png';

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={containerRef} className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden border-b border-white/5 bg-[#0B0F1A]">
      {/* Background elements with parallax */}
      <motion.div style={{ y: y1 }} className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-accent-cyan/10 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-accent-amber/5 blur-[140px] rounded-full animate-pulse" />
      </motion.div>

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div style={{ opacity }} className="flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-[1px] w-12 bg-accent-cyan" />
              <span className="text-accent-cyan font-bold tracking-[0.3em] text-xs uppercase text-left">
                Engineering Solutions at Scale
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-4xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.9] tracking-tighter"
            >
              Atul <span className="text-accent-cyan">Joshi</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-xl md:text-2xl text-gray-400 max-w-xl mb-12 leading-relaxed font-medium"
            >
              Architecting high-performance production systems and pioneering research in
              <span className="text-white"> Natural Language Processing</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-4 bg-white text-background px-12 py-6 rounded-full font-bold hover:bg-accent-cyan transition-all duration-500 shadow-2xl shadow-white/10 overflow-hidden"
              >
                <span className="relative z-10">Selected Work</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-accent-cyan translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="flex-1 relative group"
          >
            <div className="absolute inset-0 bg-accent-cyan/10 blur-[100px] rounded-full group-hover:bg-accent-amber/10 transition-colors duration-1000" />
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <div className="relative aspect-square max-w-[550px] mx-auto overflow-hidden rounded-[3rem] border border-white/10 bg-card p-3 shadow-2xl shadow-accent-cyan/5">
                <img
                  src={AtulImg}
                  alt="Atul Joshi"
                  className="w-full h-full object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 border-t-2 border-r-2 border-accent-cyan/30 rounded-tr-[4rem]" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-b-2 border-l-2 border-accent-amber/30 rounded-bl-[4rem]" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};