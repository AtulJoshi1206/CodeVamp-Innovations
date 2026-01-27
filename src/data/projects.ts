import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'codevamp-platform',
    title: 'CodeVamp Online Coding Platform',
    description: 'Full-stack platform enabling real-time code execution across 10+ languages. Built for scale: 1,000+ API req/s, 99.9% uptime, zero-downtime deployments.',
    thumbnail: 'https://github.com/AtulJoshi1206/images/blob/main/356855265-88777264-9b9b-49fc-9a09-27eac15a5b50.png?raw=true',
    technologies: ['Python', 'MongoDB', 'Flask', 'React', 'Docker', 'AWS'],
    features: [
      'Real-time code compilation and execution (10+ languages)',
      'Integrated code editor with syntax highlighting',
      'Automated test case execution with custom runners',
      'Leaderboard and progress tracking',
      'User authentication and session management'
    ],
    challenges: [
      'Secure sandboxed code execution environment',
      'Handling concurrent requests at 1,000+ req/s',
      'Database optimization for large-scale datasets',
      'Real-time synchronization across multiple clients'
    ],
    achievements: [
      'Handles 1,000+ API requests per second',
      'Achieved 99.9% uptime SLA',
      'Reduced average response time by 60%',
      '95% user satisfaction rate'
    ],
    images: [
      'https://github.com/AtulJoshi1206/images/blob/main/356855278-9e269f4a-bcb4-4afc-a8dd-bd8a66600851.png?raw=true',
      'https://github.com/AtulJoshi1206/images/blob/main/356855265-88777264-9b9b-49fc-9a09-27eac15a5b50.png?raw=true',
      'https://github.com/AtulJoshi1206/images/blob/main/356855305-20a021cf-4b7a-4547-ab6b-3e542bccabe2.png?raw=true',
      'https://github.com/AtulJoshi1206/images/blob/main/356855328-a3513681-1f74-4538-846a-c94a59788c2f.png?raw=true',
      'https://github.com/AtulJoshi1206/images/blob/main/356867046-e2848252-2928-4330-a60c-16c945477d3c.png?raw=true'
    ]
  },
  {
    id: 'search-rule-engine',
    title: 'Search Rule Engine with AST',
    description: 'Advanced rule execution engine using Abstract Syntax Trees. Enables dynamic rule creation at scale with 95% accuracy and sub-100ms query latency.',
    thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    technologies: ['Python', 'MongoDB', 'Flask', 'Streamlit', 'AST', 'Redis'],
    features: [
      'Dynamic rule creation using Abstract Syntax Trees',
      'Real-time rule modification and validation',
      'Visual rule builder interface (Streamlit)',
      'Advanced search optimization with caching',
      'Custom rule validation and error handling'
    ],
    challenges: [
      'Implementing complex AST transformations',
      'Query performance optimization for complex rule sets',
      'Handling deeply nested rule conditions',
      'Maintaining rule consistency across distributed systems'
    ],
    achievements: [
      'Achieved 95% search accuracy',
      'Reduced rule creation time by 70%',
      'Successfully processed 1M+ search queries',
      'Deployed in production environment'
    ],
    images: [
      'https://github.com/AtulJoshi1206/images/blob/main/379530948-7c4d5228-afa6-4a7c-b5bb-55c9cf8819de.jpg?raw=true',
      'https://github.com/AtulJoshi1206/images/blob/main/379530236-b6694b63-38af-4fef-b92b-cf0da57b7010.png?raw=true',
      'https://github.com/AtulJoshi1206/images/blob/main/379531101-a1034a29-336b-4805-9489-08e60ef98db9.jpg?raw=true'
    ]
  },
  {
    id: 'nlp-project',
    title: 'Meeting Summarizer (Infosys Internship)',
    description: 'Production NLP system for automatic meeting transcription and summarization. 99.9% transcription accuracy using Whisper + OpenAI APIs with optimized backend.',
    thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    technologies: ['Python', 'OpenAI', 'FFmpeg', 'Whisper', 'Flask', 'PostgreSQL'],
    features: [
      'Automatic meeting transcription (multi-format support)',
      'Real-time summary generation via OpenAI',
      'Key points and action items extraction',
      'Meeting analytics dashboard',
      'Secure API integration with error handling'
    ],
    challenges: [
      'Processing large audio files efficiently',
      'Optimizing API costs at scale',
      'Ensuring transcription accuracy',
      'Real-time processing pipeline architecture'
    ],
    achievements: [
      'Achieved 99.9% transcription accuracy',
      'Reduced summary generation time by 50%',
      'Processed 1000+ hours of meetings',
      'Saved 40% in documentation time'
    ],
    images: [
      'https://github.com/AtulJoshi1206/images/blob/main/ec78e246-4be9-438e-abfc-24f23ba0ddc6.png?raw=true',
      'https://github.com/AtulJoshi1206/images/blob/main/350355299-708b54d7-9279-407e-af38-ae792bd4224f.png?raw=true'
    ]
  },
  {
    id: 'weather-app',
    title: 'Weather Monitoring Application',
    description: 'Real-time weather monitoring system with predictive analytics. Monitors 1000+ locations with 99% alert accuracy using OpenWeatherMap API and MongoDB.',
    thumbnail: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    technologies: ['Python', 'MongoDB', 'React', 'Node.js', 'OpenWeatherMap API', 'Docker'],
    features: [
      'Real-time weather updates across multiple locations',
      'Historical data analysis and trend visualization',
      'Custom alert system with push notifications',
      'Interactive weather maps',
      'Mobile-responsive design'
    ],
    challenges: [
      'Managing real-time data streams at scale',
      'Implementing efficient time-series data storage',
      'Managing API rate limits',
      'Accurate predictive alerts'
    ],
    achievements: [
      'Successfully monitors 1000+ locations',
      'Achieved 99% alert accuracy',
      'Reduced data processing time by 60%',
      'Implemented predictive weather patterns'
    ],
    images: [
      'https://github.com/AtulJoshi1206/images/blob/main/380372344-95513c53-b10e-4dd1-98a9-1abc29fab6de.jpg?raw=true'
    ]
  },
  {
    id: 'healthcare-chatbot',
    title: 'Healthcare Chatbot (AI/ML)',
    description: 'AI-driven medical assistant using advanced NLP and deep learning. Handles medical inquiries with 95% accuracy and real-time response capability.',
    thumbnail: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    technologies: ['Python', 'TensorFlow', 'NLP', 'React', 'Node.js'],
    features: [
      'Natural language understanding for medical queries',
      'Symptom analysis and disease detection',
      'Medical information lookup and validation',
      'Emergency escalation system',
      'Multi-language support'
    ],
    challenges: [
      'Ensuring medical accuracy and safety',
      'Handling emergency situations appropriately',
      'Managing sensitive health data securely',
      'Implementing compliance requirements'
    ],
    achievements: [
      'Achieved 95% diagnosis accuracy',
      'Sub-2 second response time',
      'Successfully handled 10k+ medical queries',
      'Deployed in 3 healthcare facilities'
    ],
    images: [
      'https://github.com/AtulJoshi1206/images/blob/main/health.png?raw=true'
    ]
  }
];
