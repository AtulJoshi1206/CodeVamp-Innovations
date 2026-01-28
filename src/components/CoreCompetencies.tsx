import { motion } from 'framer-motion';
import { Server, Code2, Brain } from 'lucide-react';
import { useRef, useState } from 'react';

const competencies = [
    {
        title: 'Systems Engineering',
        description: 'Scalable architectures, distributed systems, performance optimization.',
        icon: Server,
        color: 'text-accent-cyan',
        bg: 'bg-accent-cyan/10'
    },
    {
        title: 'Full-Stack Development',
        description: 'End-to-end applications, APIs, real-time features, cloud deployment.',
        icon: Code2,
        color: 'text-white',
        bg: 'bg-white/10'
    },
    {
        title: 'AI/ML Engineering',
        description: 'NLP systems, language models, model optimization, research.',
        icon: Brain,
        color: 'text-accent-amber',
        bg: 'bg-accent-amber/10'
    }
];

const CompetencyCard = ({ item, index }: { item: any; index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;
        setRotate({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setRotate({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ rotateX: rotate.x, rotateY: rotate.y }}
            className="group p-10 rounded-[2.5rem] bg-card border border-white/5 hover:border-white/20 transition-all duration-500 relative overflow-hidden preserve-3d"
            style={{ transformStyle: 'preserve-3d' }}
        >
            <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <item.icon className={`w-7 h-7 ${item.color}`} />
            </div>
            <h4 className="text-2xl font-bold text-white mb-6 tracking-tight translate-z-20">{item.title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed translate-z-10">
                {item.description}
            </p>
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </motion.div>
    );
};

export const CoreCompetencies = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <div className="h-px w-12 bg-accent-cyan" />
                            <span className="text-accent-cyan font-bold tracking-[0.3em] text-xs uppercase">Expertise</span>
                        </motion.div>
                        <h3 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[0.85] tracking-tighter">
                            Core <br /> <span className="text-gray-600">Competencies</span>
                        </h3>
                        <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                            Bridging the gap between high-scale systems architecture and cutting-edge artificial intelligence.
                        </p>
                    </div>

                    <div className="flex-[2] grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
                        {competencies.map((item, index) => (
                            <CompetencyCard key={item.title} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
