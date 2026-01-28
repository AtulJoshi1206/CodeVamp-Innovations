import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Layout, Cpu, Database, Globe } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Terminal,
    color: 'from-blue-500 to-cyan-400',
    skills: ['C++', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS', 'Go', 'Java', 'R']
  },
  {
    title: 'Frontend',
    icon: Layout,
    color: 'from-purple-500 to-pink-400',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'ShadCN UI', 'Figma', 'UI/UX Design Systems', 'Redux', 'Framer Motion']
  },
  {
    title: 'Backend',
    icon: Database,
    color: 'from-orange-500 to-amber-400',
    skills: ['Node.js', 'Express', 'FastAPI', 'Flask', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL']
  },
  {
    title: 'AI / ML',
    icon: Cpu,
    color: 'from-green-500 to-emerald-400',
    skills: ['Scikit-learn', 'Pandas', 'NumPy', 'Hugging Face', 'TensorFlow', 'PyTorch', 'NLP', 'Computer Vision', 'LangChain']
  },
  {
    title: 'Domains & Cloud',
    icon: Globe,
    color: 'from-red-500 to-rose-400',
    skills: ['Full-Stack Development', 'Software Development', 'AI Agents', 'AI-ML', 'GitHub', 'CI/CD', 'AWS', 'Oracle', 'Docker', 'Kubernetes']
  }
];

const SkillCard = ({ category, idx }: { category: any; idx: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: idx * 0.05, duration: 0.8, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full flex flex-col p-[1px] rounded-[1.5rem] md:rounded-[2.5rem] bg-white/5 overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 transition-opacity duration-300 pointer-events-none hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(34, 211, 238, 0.1), transparent 40%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />

      <div className="relative z-10 p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] bg-[#0B101B] h-full flex flex-col border border-white/5 transition-all duration-500 group-hover:border-accent-cyan/20">
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700`} />

        <div className="flex items-center gap-4 mb-6 md:mb-8">
          <div className="p-2 md:p-3 rounded-xl md:rounded-2xl bg-white/5 text-white group-hover:bg-accent-cyan/10 group-hover:text-accent-cyan transition-all duration-500">
            <category.icon size={20} className="md:w-6 md:h-6" />
          </div>
          <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight">{category.title}</h4>
        </div>

        <div className="flex flex-wrap gap-2 md:gap-3 mt-auto">
          {category.skills.map((skill: string) => (
            <motion.span
              key={skill}
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: '#fff',
                borderColor: 'rgba(34, 211, 238, 0.4)'
              }}
              className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl bg-white/5 border border-white/5 text-gray-400 text-[10px] font-bold uppercase tracking-widest transition-all cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const SkillsSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden" id="skills">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent-cyan/5 blur-[120px] rounded-full pointer-events-none opacity-50" />

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-accent-cyan" />
            <span className="text-accent-cyan font-bold tracking-[0.3em] text-xs uppercase text-left">Toolkit</span>
          </motion.div>
          <h3 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tighter">
            Technical <br /> <span className="text-gray-600">Competencies</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, idx) => (
            <SkillCard key={category.title} category={category} idx={idx} />
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="lg:col-span-1 hidden lg:flex items-center justify-center p-12 rounded-[2.5rem] border border-dashed border-white/10 bg-transparent relative overflow-hidden group"
          >
            <div className="text-center group-hover:scale-105 transition-transform duration-700">
              <div className="text-accent-cyan font-bold tracking-[0.2em] text-[10px] uppercase mb-6">Continuous Learning</div>
              <p className="text-gray-400 text-lg italic font-medium leading-relaxed">
                "Systematically expanding the frontier of what's possible with code & intelligence."
              </p>
            </div>
            <div className="absolute -bottom-1/2 -right-1/2 w-64 h-64 bg-accent-amber/10 blur-[80px] rounded-full group-hover:bg-accent-cyan/10 transition-colors duration-1000" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
