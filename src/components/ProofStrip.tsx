import { motion } from 'framer-motion';
import { FileText, Users, Zap, Award } from 'lucide-react';

const stats = [
    {
        icon: <FileText className="w-5 h-5 text-accent-gold" />,
        label: "31+ Courses Migrated",
        sub: "AIT Platform Rollout"
    },
    {
        icon: <Users className="w-5 h-5 text-accent-primary" />,
        label: "100+ Monthly Participants",
        sub: "Peer Connect Matching"
    },
    {
        icon: <Zap className="w-5 h-5 text-accent-primary" />,
        label: "5+ Claude Skills Built",
        sub: "AI Workflow Automation"
    },
    {
        icon: <Award className="w-5 h-5 text-accent-gold" />,
        label: "25%+ Efficiency Gains",
        sub: "Business Process Optimization"
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
