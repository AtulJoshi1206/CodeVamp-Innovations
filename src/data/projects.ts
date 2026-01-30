import { Project } from '../types';

// Import images to ensure they are handled correctly by the build tool
import CodeVampImg from '../Images/CodeVamp.png';
import SearchRuleImg from '../Images/SearchRule Engine.png';
import KumoniImg from '../Images/Kumoni.png';

export const projects: Project[] = [
  {
    id: 'codevamp-platform',
    title: 'CodeVamp Online Coding Platform',
    description: 'A next-generation competitive programming platform built for speed, performance, and developer experience. Re-engineered to be 100% Serverless-ready and optimized for direct deployment on Netlify.',
    thumbnail: CodeVampImg,
    technologies: ['React', 'NestJS', 'MongoDB', 'Redis', 'Socket.io', 'Piston API'],
    features: [
      'Multi-Language Support (Python, C++, Java, JS, C, Go)',
      'Serverless Execution via Piston API',
      'Live Contests with Real-Time Leaderboards (Socket.io)',
      'Daily Challenges with Streak System & Badges',
      'Advanced Profile with GitHub-inspired Heatmaps',
      'Custom Test Case execution & debugging tool'
    ],
    challenges: [
      'Migrating from Docker-based workers to Serverless execution for Netlify compatibility',
      'Managing real-time state synchronization for competitive leaderboards',
      'Optimizing MongoDB Atlas connectivity for dynamic serverless IPs'
    ],
    achievements: [
      'Zero-Latency Execution feedback',
      '100% Serverless Architecture',
      'Secure Isolated Code Execution'
    ],
    images: [CodeVampImg],
    githubUrl: 'https://github.com/AtulJoshi1206/Coding-Platform-CodeVamp-',
    liveUrl: 'https://codevamp-coding-platform.netlify.app/#',
    documentation: `
### 🚀 Key Features
**💻 Advanced Code IDE**
* **Multi-Language Support:** High-performance execution for Python, C++, Java, JavaScript, C, and Go.
* **Serverless Execution:** Powered by the Piston API—no heavy background workers needed.
* **Custom Test Cases:** Run your code against specific inputs to debug effectively.
* **Rich Editor:** Premium developer experience with syntax highlighting and minimalist design.

**🏆 Contest System**
* **Live Contests:** Compete with others in scheduled programming challenges.
* **Real-Time Leaderboard:** Global rankings powered by WebSockets (Socket.io).
* **Difficulty Scaling:** Curated problem sets from Easy to Hard.

**🔥 Daily Challenges (POTD)**
* **Streak System:** Track your consistency with an automated daily problem.
* **Milestone Badges:** Earn special achievements for 3-day and 7-day streaks.

**📊 Integrated Profile**
* **Heatmaps:** GitHub-inspired contribution graph for solving history.
* **Stats Dashboard:** Track your solved counts by difficulty and global rank.

### 🛠 Tech Stack
**Frontend**
* **Framework:** React.js (Vite)
* **Styling:** Tailwind CSS (Minimal & Premium)
* **Animations:** Framer Motion
* **Hosting:** Netlify

**Backend (Netlify Functions)**
* **Framework:** NestJS (deployed as a Serverless Lambda)
* **Language:** TypeScript
* **Database:** MongoDB Atlas
* **Execution:** Piston Code Execution API

### 🏗 Deployment (Netlify Optimized)
1. **MongoDB Setup:** Ensure Atlas Network Access allows 0.0.0.0/0.
2. **Environment Variables:** MONGODB_URI, JWT_SECRET, NODE_ENV.
3. **Build Configuration:** \`npm install --include=dev && npm run build:api && npm run build:web && mkdir -p apps/api/netlify-deploy && cp apps/api/netlify-function.js apps/api/netlify-deploy/api.js\`
    `
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

