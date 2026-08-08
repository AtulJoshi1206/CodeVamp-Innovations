import { motion } from 'framer-motion';
import { FileText, Users, Zap, Award } from 'lucide-react';

const stats = [
    {
        icon: <FileText className="w-5 h-5 text-accent-gold-500" />,
        label: "31+ Courses Migrated",
        number: "31+",
        sub: "AIT Platform Rollout"
    },
    {
        icon: <Users className="w-5 h-5 text-accent-primary-500" />,
        label: "100+ Monthly Participants",
        number: "100+",
        sub: "Peer Connect Matching"
    },
    {
        icon: <Zap className="w-5 h-5 text-accent-primary-500" />,
        label: "5+ Claude Skills Built",
        number: "5+",
        sub: "AI Workflow Automation"
    },
    {
        icon: <Award className="w-5 h-5 text-accent-gold-500" />,
        label: "25%+ Efficiency Gains",
        number: "25%+",
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
                            className="card-glow p-6 flex flex-col items-start gap-3"
                        >
                            <div className="h-1 w-8 bg-gradient-to-r from-accent-primary-500 to-accent-gold-500" />
                            <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                                {stat.icon}
                            </div>
                            <div>
                                <span className="text-gradient text-3xl md:text-4xl font-bold block mb-1">{stat.number}</span>
                                <div className="font-bold text-white text-sm leading-tight">{stat.label}</div>
                                <div className="text-gray-500 text-xs uppercase tracking-wider mt-1 font-bold">{stat.sub}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
