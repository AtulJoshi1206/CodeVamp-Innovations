import { motion } from 'framer-motion';
import { FileText, Users, Zap, Award } from 'lucide-react';

const stats = [
    {
        icon: <FileText className="w-5 h-5 text-accent-amber" />,
        label: "2 Published Papers",
        sub: "Corresponding Author"
    },
    {
        icon: <Zap className="w-5 h-5 text-accent-cyan" />,
        label: "1,000+ API req/s",
        sub: "Production Infrastructure"
    },
    {
        icon: <Users className="w-5 h-5 text-accent-cyan" />,
        label: "500+ Mentored",
        sub: "Students across Tech"
    },
    {
        icon: <Award className="w-5 h-5 text-accent-amber" />,
        label: "DOI Published",
        sub: "Academic Credibility"
    }
];

export const ProofStrip = () => {
    return (
        <div className="bg-card/20 backdrop-blur-sm py-12 overflow-hidden border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                            className="flex items-center gap-4"
                        >
                            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                                {stat.icon}
                            </div>
                            <div>
                                <div className="font-bold text-white text-lg leading-tight">{stat.label}</div>
                                <div className="text-gray-500 text-xs uppercase tracking-wider mt-1 font-bold">{stat.sub}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
