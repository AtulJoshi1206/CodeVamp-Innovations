import { Project } from '../types';

// Import images to ensure they are handled correctly by the build tool
import CodeVampImg from '../Images/CodeVamp.png';
import SearchRuleImg from '../Images/SearchRule Engine.png';
import KumoniImg from '../Images/Kumoni.png';

export const projects: Project[] = [
  {
    id: 'codevamp-platform',
    title: 'CodeVamp Online Coding Platform',
    description: 'A robust cloud-based execution platform supporting 10+ languages with sub-second execution. Engineered for high concurrency and zero-latency feedback.',
    thumbnail: CodeVampImg,
    technologies: ['React', 'Node.js', 'Docker', 'AWS', 'Redis'],
    features: [
      'Isolated Docker containers for secure execution',
      'Real-time WebSocket synchronization',
      'Scalable microservices architecture',
      'Integrated stress-testing environment'
    ],
    challenges: [
      'Managing resource contention in high-traffic periods',
      'Sandboxing untrusted code across various runtimes'
    ],
    achievements: [
      '1,000+ API requests/second',
      '99.9% uptime SLA',
      'Zero-downtime deployment pipeline'
    ],
    images: [CodeVampImg]
  },
  {
    id: 'search-rule-engine',
    title: 'Search Rule Engine with AST',
    description: 'An advanced rule execution engine utilizing Abstract Syntax Trees for complex dynamic filtering and validation at scale.',
    thumbnail: SearchRuleImg,
    technologies: ['Python', 'AST', 'MongoDB'],
    features: [
      'Recursive AST decomposition for rule evaluation',
      'Dynamic schema validation',
      'Expressive query language support'
    ],
    challenges: [
      'Optimizing lookup performance for deeply nested rules',
      'Ensuring type safety in dynamic executions'
    ],
    achievements: [
      '95% Search Accuracy',
      'Processed 1M+ live queries',
      'Sub-100ms average latency'
    ],
    images: [SearchRuleImg]
  },
  {
    id: 'kumoni-translator',
    title: 'Kumoni AI Translator',
    description: 'State-of-the-art Neural Machine Translation system for the Kumaoni language, focusing on low-resource preservation.',
    thumbnail: KumoniImg,
    technologies: ['PyTorch', 'mBART', 'Transformers'],
    features: [
      'Custom fine-tuned mBART architecture',
      'Indic-aware tokenization',
      'Cultural preservation data pipeline'
    ],
    challenges: [
      'Limited training data for the Kumaoni dialect',
      'Maintaining syntactic integrity across translation'
    ],
    achievements: [
      '25% BLEU score improvement',
      '2 Published Research Papers',
      'Official Grant Renewal support'
    ],
    images: [KumoniImg]
  },
  {
    id: 'agentic-infra',
    title: 'Agentic Workflow Orchestrator',
    description: 'A distributed system for managing and executing complex AI agent workflows with Layer-1 orchestration.',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
    technologies: ['TypeScript', 'Node.js', 'LLMs', 'Web3.js'],
    features: [
      'Tokenized execution pathways',
      'Multi-agent coordination protocol',
      'Real-time observability dashboard'
    ],
    challenges: [
      'Ensuring consensus across distributed agents',
      'Optimizing token costs for large-scale workflows'
    ],
    achievements: [
      '10+ production agent workflows',
      'Seamless EVM integration',
      '0.5s average sync time'
    ],
    images: []
  },
  {
    id: 'distributed-logger',
    title: 'High-Throughput Distributed Logger',
    description: 'High-performance logging infrastructure designed to process millions of log entries with real-time anomaly detection.',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80',
    technologies: ['Go', 'Kafka', 'Elasticsearch', 'Grafana'],
    features: [
      'Kafka-based stream processing',
      'Automated pattern recognition for errors',
      'Predictive resource scaling'
    ],
    challenges: [
      'Maintaining order in high-volume byte streams',
      'Reducing storage footprint without data loss'
    ],
    achievements: [
      'Processed 500GB+ logs daily',
      'Reduced alert fatigue by 60%',
      '99.99% data durability'
    ],
    images: []
  }
];

