import { motion } from 'framer-motion';
import { ExternalLink, GitPullRequest } from 'lucide-react';

interface Highlight {
    text: string;
    pr: number;
}

interface Contribution {
    project: string;
    repo: string;
    merged: number;
    highlights: Highlight[];
    more?: string;
}

const contributions: Contribution[] = [
    {
        project: 'Google Agent Development Kit',
        repo: 'google/adk-python',
        merged: 8,
        highlights: [
            { text: 'Live API sessions keep their resumption handle, so a reconnect mid-turn no longer loses the conversation', pr: 7939 },
            { text: 'Workflow nodes no longer pass one sub-agent branch downstream, so the next step sees every result', pr: 7940 },
            { text: 'Concurrent sessions no longer overwrite shared app and user state on SQL and Redis', pr: 7942 },
            { text: 'Cancelling a run no longer leaves the in-flight MCP tool call running', pr: 7199 },
        ],
        more: 'Plus fixes to A2A artifact conversion, artifact text in instructions, Gemini streaming and the Gemini client lifecycle.',
    },
    {
        project: 'AWS Powertools for Lambda (Python)',
        repo: 'aws-powertools/powertools-lambda-python',
        merged: 3,
        highlights: [
            { text: 'Exceptions raised inside Depends() now reach the registered exception handlers', pr: 8568 },
            { text: 'Idempotent results containing UUIDs, datetimes or enums now save correctly', pr: 8570 },
            { text: 'VPC Lattice requests with a query string no longer return 404', pr: 8572 },
        ],
    },
];

const alsoContributing = [
    { label: 'AWS Strands Agents', href: 'https://github.com/strands-agents/harness-sdk/pulls?q=author%3AAtulJoshi1206' },
    { label: 'Google ADK for Go', href: 'https://github.com/google/adk-go/issues?q=author%3AAtulJoshi1206' },
    { label: 'Microsoft Agent Framework', href: 'https://github.com/microsoft/agent-framework/issues?q=author%3AAtulJoshi1206' },
];

const prListUrl = (repo: string) => `https://github.com/${repo}/pulls?q=is%3Apr+author%3AAtulJoshi1206`;

export const OpenSourceSection = () => {
    return (
        <section id="open-source" className="py-32 bg-background relative overflow-hidden border-b border-white/5">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center gap-3 mb-6"
                >
                    <div className="h-px w-12 bg-accent-primary-500" />
                    <span className="font-serif-display text-xs uppercase text-gray-500">Upstream contributions</span>
                </motion.div>
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
                    <h3 className="text-4xl md:text-6xl font-bold text-white leading-[0.85] tracking-tighter">
                        Open <br /> <span className="text-gray-600">Source</span>
                    </h3>
                    <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
                        Root-cause fixes to the frameworks teams use to build AI agents. Each one names the invariant that
                        broke, covers every place that shared the flaw, and ships with a test that fails before the change.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {contributions.map((item, index) => (
                        <motion.div
                            key={item.repo}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.15, ease: 'easeOut' }}
                            className="card-glow p-10 flex flex-col"
                        >
                            <div className="flex items-start justify-between gap-6 mb-8">
                                <div>
                                    <span className="text-gradient text-6xl md:text-7xl font-bold block leading-none">{item.merged}</span>
                                    <span className="text-gray-500 text-xs uppercase tracking-wider font-bold">merged pull requests</span>
                                </div>
                                <a
                                    href={prListUrl(item.repo)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-accent-primary-500 transition-colors"
                                >
                                    {item.repo}
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-6 tracking-tight">{item.project}</h4>
                            <ul className="flex flex-col gap-4 mb-6">
                                {item.highlights.map((h) => (
                                    <li key={h.pr} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                                        <GitPullRequest className="w-4 h-4 mt-0.5 shrink-0 text-accent-primary-500" />
                                        <span>
                                            {h.text}{' '}
                                            <a
                                                href={`https://github.com/${item.repo}/pull/${h.pr}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white hover:text-accent-primary-500 transition-colors whitespace-nowrap"
                                            >
                                                #{h.pr}
                                            </a>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            {item.more && <p className="text-gray-500 text-sm leading-relaxed mt-auto">{item.more}</p>}
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-wrap items-center gap-3 mt-12"
                >
                    <span className="text-gray-500 text-sm mr-2">Also contributing to</span>
                    {alsoContributing.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-full border border-white/10 text-sm text-gray-300 hover:border-accent-primary-500 hover:text-accent-primary-500 transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
