import { Project } from '../types';

// Import images to ensure they are handled correctly by the build tool
import CodeVampImg from '../Images/CodeVamp.png';
import SearchRuleImg from '../Images/SearchRule Engine.png';
import KumoniImg from '../Images/Kumoni.png';

export const projects: Project[] = [
  {
    id: 'saas-contract-management',
    category: 'business',
    title: 'SaaS Subscription & Contract Management System',
    description: 'A purpose-built platform replacing a ClickUp-based legacy workflow with a scalable system for managing SaaS subscriptions, vendor contracts, and renewal operations across the business.',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    technologies: ['Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    features: [
      'Designed a normalized PostgreSQL schema to model subscriptions, contracts, vendors, and renewal cycles',
      'Built automated renewal alerts and contract lifecycle tracking to eliminate manual ClickUp tracking',
      'Implemented role-based access control for finance, ops, and leadership stakeholders',
      'Migrated years of legacy contract data from ClickUp into a structured relational model',
      'Built a reporting dashboard for spend visibility across active SaaS subscriptions',
      'Delivered a Prisma-based API layer with type-safe queries across Next.js server routes'
    ],
    challenges: [
      'Reconciling inconsistent, unstructured contract data accumulated across years of ClickUp usage',
      'Designing a data model flexible enough for varied contract and billing structures',
      'Ensuring zero-downtime cutover from the legacy ClickUp process to the new system'
    ],
    achievements: [
      '100% Legacy Data Migrated',
      'Zero-Downtime Cutover',
      '1 Unified Source of Truth'
    ],
    images: []
  },
  {
    id: 'course-platform-migration',
    category: 'business',
    title: 'Course Platform Migration (AIT)',
    description: 'Led the migration of the organization\'s training content library to the AIT learning platform, pairing the migration with AI-powered content automation tooling.',
    thumbnail: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80',
    technologies: ['Claude', 'Automation', 'Content Ops', 'AIT Platform'],
    features: [
      'Migrated 31+ role-aligned training courses from legacy tooling to the AIT platform',
      'Developed 5+ reusable Claude Skills to automate content formatting, structuring, and QA',
      'Standardized course metadata and lesson structure across the entire training library',
      'Built repeatable migration playbooks to reduce per-course migration time',
      'Coordinated with subject-matter owners to validate content accuracy post-migration'
    ],
    challenges: [
      'Preserving formatting fidelity across a wide variety of legacy course structures',
      'Automating repetitive content transformation without losing course-specific nuance',
      'Migrating at scale while keeping the training library live for active learners'
    ],
    achievements: [
      '31+ Courses Migrated',
      '5+ Claude Skills Built',
      '100% Content Fidelity Preserved'
    ],
    images: []
  },
  {
    id: 'peer-connect-algorithm',
    category: 'business',
    title: 'Peer Connect Algorithm',
    description: 'Built a Python/NetworkX-based pairing system that matches employees across ventures for a monthly peer-connect program, driving cross-team relationships at scale.',
    thumbnail: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80',
    technologies: ['Python', 'NetworkX', 'Automation'],
    features: [
      'Modeled employees and prior pairings as a graph to avoid repeat matches across cycles',
      'Implemented weighted matching to balance cross-venture diversity with fair participation',
      'Automated monthly pairing generation and notification delivery end-to-end',
      'Built configurable constraints for team size, venture spread, and opt-out handling',
      'Tracked participation history to continuously improve match quality over time'
    ],
    challenges: [
      'Avoiding repeat pairings while maximizing cross-venture diversity at scale',
      'Balancing algorithmic fairness with organic, meaningful connections',
      'Automating the full cycle reliably every month with minimal manual oversight'
    ],
    achievements: [
      '100+ Monthly Participants',
      'Fully Automated Monthly Cycle',
      '0 Manual Matching Hours'
    ],
    images: []
  },
  {
    id: 'ai-workflow-automation',
    category: 'business',
    title: 'AI Workflow Automation Suite',
    description: 'A Claude-based automation system that generates course content, formats training materials, and executes bulk ClickUp task operations to remove manual operational overhead.',
    thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80',
    technologies: ['Claude', 'ClickUp MCP', 'Automation', 'TypeScript'],
    features: [
      'Built Claude-based workflows for automated course content generation and formatting',
      'Integrated ClickUp MCP to perform bulk task creation, updates, and status transitions',
      'Designed reusable automation skills adopted across multiple operational workflows',
      'Reduced manual content formatting time through templated, repeatable prompting pipelines',
      'Enabled non-technical stakeholders to trigger automations without direct API access'
    ],
    challenges: [
      'Ensuring consistent output quality across varied content types and formats',
      'Safely executing bulk operations against production ClickUp workspaces',
      'Designing prompts and skills that generalize across multiple use cases'
    ],
    achievements: [
      '25%+ Efficiency Gains',
      'Multiple Bulk Ops Automated',
      '5+ Reusable Automation Skills'
    ],
    images: []
  },
  {
    id: 'codevamp-platform',
    category: 'engineering',
    title: 'CodeVamp Online Coding Platform',
    description: 'A next-generation competitive programming platform built for speed, performance, and developer experience. Re-engineered to be 100% Serverless-ready and optimized for direct deployment on Netlify.',
    thumbnail: CodeVampImg,
    technologies: ['React', 'NestJS', 'MongoDB', 'Redis', 'Socket.io', 'Piston API'],
    features: [
      'Designed and deployed a full-stack platform supporting Python, C++, and C',
      'Reduced code execution latency by 35% through Piston API integration',
      'Optimized backend with MongoDB for seamless storage and user data retrieval',
      'Handled over 1,000 API requests per second with serverless architecture',
      'Integrated real-time leaderboards using WebSockets and Socket.io',
      'Automated streak system and milestone badges for user engagement'
    ],
    challenges: [
      'Migrating from Docker-based workers to Serverless execution for Netlify compatibility',
      'Managing real-time state synchronization for competitive leaderboards',
      'Optimizing MongoDB Atlas connectivity for dynamic serverless IPs'
    ],
    achievements: [
      '35% Latency Reduction',
      '1,000+ Requests/Sec',
      '100% Serverless Stack'
    ],
    images: [CodeVampImg],
    githubUrl: 'https://github.com/AtulJoshi1206/Coding-Platform-CodeVamp-',
    liveUrl: 'https://codevamp-coding-platform.netlify.app/#',
    documentation: `
### Key Features

Advanced Code IDE
• Multi-Language Support: High-performance execution for Python, C++, Java, JavaScript, C, and Go.
• Serverless Execution: Powered by the Piston API—no heavy background workers needed.
• Custom Test Cases: Run your code against specific inputs to debug effectively.
• Rich Editor: Premium developer experience with syntax highlighting and minimalist design.

Contest System
• Live Contests: Compete with others in scheduled programming challenges.
• Real-Time Leaderboard: Global rankings powered by WebSockets (Socket.io).
• Difficulty Scaling: Curated problem sets from Easy to Hard.

Daily Challenges (POTD)
• Streak System: Track your consistency with an automated daily problem.
• Milestone Badges: Earn special achievements for 3-day and 7-day streaks.

Integrated Profile
• Heatmaps: GitHub-inspired contribution graph for solving history.
• Stats Dashboard: Track your solved counts by difficulty and global rank.

### Tech Stack

Frontend
• Framework: React.js (Vite)
• Styling: Tailwind CSS (Minimal & Premium)
• Animations: Framer Motion
• Hosting: Netlify

Backend (Netlify Functions)
• Framework: NestJS (deployed as a Serverless Lambda)
• Language: TypeScript
• Database: MongoDB Atlas
• Execution: Piston Code Execution API

### Deployment (Netlify Optimized)

1. MongoDB Setup: Ensure Atlas Network Access allows 0.0.0.0/0.
2. Environment Variables: MONGODB_URI, JWT_SECRET, NODE_ENV.
3. Build Configuration: npm install --include=dev && npm run build:api && npm run build:web && mkdir -p apps/api/netlify-deploy && cp apps/api/netlify-function.js apps/api/netlify-deploy/api.js
    `
  },
  {
    id: 'search-rule-engine',
    category: 'engineering',
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
    category: 'engineering',
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
    category: 'engineering',
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
    category: 'engineering',
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

