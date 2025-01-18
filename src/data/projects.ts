import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'codevamp-platform',
    title: 'CodeVamp Online Coding Platform',
    description: 'A comprehensive coding platform supporting multiple languages with real-time compilation and execution. Features include code editor, leaderboard, and automated testing.',
    thumbnail: 'https://github.com/AtulJoshi1206/images/blob/main/356855265-88777264-9b9b-49fc-9a09-27eac15a5b50.png?raw=true',
    technologies: ['Python', 'MongoDB', 'Flask', 'React', 'Docker'],
    features: [
      'Real-time code compilation and execution',
      'Support for 10+ programming languages',
      'Integrated code editor with syntax highlighting',
      'Automated test case execution',
      'User authentication and progress tracking'
    ],
    challenges: [
      'Implementing secure code execution environment',
      'Handling concurrent user requests efficiently',
      'Optimizing database queries for large datasets',
      'Ensuring real-time updates across multiple users'
    ],
    achievements: [
      'Successfully handles 1,000+ API requests per second',
      'Achieved 99.9% uptime',
      'Reduced average response time by 60%',
      'Positive feedback from 95% of users'
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
    description: 'Advanced search engine utilizing Abstract Syntax Trees for real-time rule creation and modification, achieving 95% accuracy in search results.',
    thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    technologies: ['Python', 'MongoDB', 'Flask', 'Streamlit', 'AST'],
    features: [
      'Dynamic rule creation using AST',
      'Real-time rule modification',
      'Visual rule builder interface',
      'Advanced search optimization',
      'Custom rule validation'
    ],
    challenges: [
      'Implementing complex AST transformations',
      'Optimizing search performance',
      'Handling nested rule conditions',
      'Ensuring rule consistency'
    ],
    achievements: [
      'Achieved 95% search accuracy',
      'Reduced rule creation time by 70%',
      'Successfully processed 1M+ search queries',
      'Implemented in production environment'
    ],
    images: [
      'https://github.com/AtulJoshi1206/images/blob/main/379530948-7c4d5228-afa6-4a7c-b5bb-55c9cf8819de.jpg?raw=true',
      'https://github.com/AtulJoshi1206/images/blob/main/379530236-b6694b63-38af-4fef-b92b-cf0da57b7010.png?raw=true',
      'https://github.com/AtulJoshi1206/images/blob/main/379531101-a1034a29-336b-4805-9489-08e60ef98db9.jpg?raw=true'
      
    ]
  },
  {
    id: 'nlp-project',
    title: 'Infosys NLP Project',
    description: 'Meeting summarizer using FFmpeg, Whisper, and OpenAI API with 99.9% transcription accuracy and efficient backend services.',
    thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    technologies: ['Python', 'OpenAI', 'FFmpeg', 'Whisper', 'Flask'],
    features: [
      'Automatic meeting transcription',
      'Real-time summary generation',
      'Key points extraction',
      'Action item identification',
      'Meeting analytics dashboard'
    ],
    challenges: [
      'Handling large audio files efficiently',
      'Optimizing API costs',
      'Ensuring accurate transcription',
      'Real-time processing requirements'
    ],
    achievements: [
      'Achieved 99.9% transcription accuracy',
      'Reduced summary generation time by 50%',
      'Processed 1000+ hours of meetings',
      'Saved 40% in meeting documentation time'
    ],
    images: [
      'https://github.com/AtulJoshi1206/images/blob/main/ec78e246-4be9-438e-abfc-24f23ba0ddc6.png?raw=true',
      'https://github.com/AtulJoshi1206/images/blob/main/350355299-708b54d7-9279-407e-af38-ae792bd4224f.png?raw=true'
      
    ]
  },
  {
    id: 'weather-app',
    title: 'Weather Monitoring Application',
    description: 'Real-time weather monitoring system using OpenWeatherMap API and MongoDB Atlas for data aggregation and analysis.',
    thumbnail: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    technologies: ['Python', 'MongoDB', 'React', 'Node.js', 'OpenWeatherMap API'],
    features: [
      'Real-time weather updates',
      'Historical data analysis',
      'Custom alert system',
      'Interactive weather maps',
      'Mobile-responsive design'
    ],
    challenges: [
      'Handling real-time data streams',
      'Implementing efficient data storage',
      'Managing API rate limits',
      'Ensuring accurate alerts'
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
    title: 'Healthcare Chatbot',
    description: 'AI-driven chatbot providing medical assistance and information using advanced NLP and machine learning techniques.',
    thumbnail: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    technologies: ['Python', 'TensorFlow', 'NLP', 'React', 'Node.js'],
    features: [
      'Natural language understanding',
      'Symptom analysis',
      'Medical information lookup',
      'Emergency response system',
      'Multi-language support'
    ],
    challenges: [
      'Ensuring medical accuracy',
      'Handling emergency situations',
      'Managing sensitive information',
      'Implementing HIPAA compliance'
    ],
    achievements: [
      'Achieved 95% diagnosis accuracy',
      'Reduced response time to 2 seconds',
      'Successfully handled 10k+ queries',
      'Implemented in 3 hospitals'
    ],
    images: [
      'https://github.com/AtulJoshi1206/images/blob/main/health.png?raw=true'
      
    ]
  }
];