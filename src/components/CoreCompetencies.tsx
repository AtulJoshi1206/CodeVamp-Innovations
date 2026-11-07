import { motion } from 'framer-motion';
import { Brain, Target, GitBranch, Workflow, type LucideIcon } from 'lucide-react';
import { useRef, useState } from 'react';

interface Competency {
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
    bg: string;
    borderAccent: string;
}

const competencies: Competency[] = [
    {
        title: 'AI Engineering & Agent Reliability',
        description: 'Building agentic systems and shipping root-cause fixes upstream to Google ADK and AWS Powertools: live sessions, tool and MCP lifecycles, and state under concurrency.',
        icon: Brain,
        color: 'text-accent-gold-500',
        bg: 'bg-accent-gold-500/10',
        borderAccent: 'border-l-4 border-accent-gold-500'
    },
    {
        title: 'Product Thinking',
        description: 'Starting from the user and the business constraint, agreeing on what success means before building, and scoping the smallest system that proves the outcome.',
        icon: Target,
        color: 'text-accent-primary-500',
        bg: 'bg-accent-primary-500/10',
        borderAccent: 'border-l-4 border-accent-primary-500'
    },
    {
        title: 'Delivery & Technical Leadership',
        description: 'Owning platform migrations and AI rollouts end to end as Technical Lead (Product), from discovery and stakeholder alignment to launch and measurement.',
        icon: GitBranch,
        color: 'text-white',
        bg: 'bg-white/10',
        borderAccent: 'border-l-4 border-accent-primary-500'
    },
    {
        title: 'Business Operations & Automation',
        description: 'Replacing manual tooling with purpose-built systems and AI-driven pipelines, and turning operational data into reporting and decisions that move measurable outcomes.',
        icon: Workflow,
        color: 'text-accent-primary-500',
        bg: 'bg-accent-primary-500/10',
        borderAccent: 'border-l-4 border-accent-gold-500'
    }
];

const CompetencyCard = ({ item, index }: { item: Competency; index: number }) => {
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
            className={`group card-glow p-10 relative overflow-hidden preserve-3d hover:scale-105 hover:-translate-y-1 ${item.borderAccent}`}
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
        <section className="py-40 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col gap-4 mb-6"
                        >
                            <div className="flex items-center gap-3">
                                <div className="h-px w-12 bg-accent-primary-500" />
                                <span className="font-serif-display text-xs uppercase text-gray-500">Core Impact Areas</span>
                            </div>
                        </motion.div>
                        <h3 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[0.85] tracking-tighter">
                            Core <br /> <span className="text-gray-600">Competencies</span>
                        </h3>
                        <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                            Where AI engineering, product judgment and delivery meet: systems that solve a real business problem and keep working in production.
                        </p>
                    </div>

                    <div className="flex-[2] grid grid-cols-1 md:grid-cols-2 gap-10 perspective-1000">
                        {competencies.map((item, index) => (
                            <CompetencyCard key={item.title} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
