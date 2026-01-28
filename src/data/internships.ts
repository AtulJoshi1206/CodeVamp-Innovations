import { Experience } from '../types';

export const internships: Experience[] = [
  {
    id: 'tesseris-intern',
    company: 'Tesseris (tesseris.org)',
    role: 'Founding Software Developer Intern',
    period: 'Aug 2025 – Jan 2026',
    description: 'Spearheading end-to-end product development for a pioneering Web3 and AI orchestration platform.',
    highlights: [
      'Led end-to-end product development across Figma-driven UI/UX, React.js and TypeScript frontend, Node.js backend, PostgreSQL, Docker, and CI/CD, owning 0 to 1 production releases on AWS and Oracle Cloud.',
      'Engineered 10+ AI agent workflows and agent builder features for Layer-1–based orchestration and automation.',
      'Integrated EVM smart contracts via Web3.js/Ethers.js, contributing to tokenized execution and platform infrastructure.'
    ],
    skills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'Web3.js', 'Ethers.js', 'AI Agents'],
    images: []
  },
  {
    id: 'kumoni-research',
    company: 'GEU AI Research Lab',
    role: 'AI Research Intern',
    period: 'Feb 2025 – May 2025',
    description: 'Neural Machine Translation research for low-resource languages (Kumaoni).',
    highlights: [
      'Introduced neural machine translation prototype for the Kumoni language, improving BLEU score by 25%.',
      'Collaborated with GEU teams, incorporating feedback from 5+ review iterations to refine models.',
      'Documented research findings and presented insights to stakeholders, supporting grant renewal and knowledge transfer.'
    ],
    skills: ['PyTorch', 'mBART', 'NLP', 'Research', 'Python'],
    images: []
  },
  {
    id: 'wecode-ta',
    company: 'WeCode Coding Club',
    role: 'Teaching Assistant (AI/ML)',
    period: 'Aug 2024 – Jul 2025',
    description: 'Mentoring and technical leadership for university-wide coding initiatives.',
    highlights: [
      'Facilitated in-depth learning of AI/ML principles for more than 300 students, resulting in notable improvements in understanding and a marked increase of 30% in successful project completions.',
      'Coordinated and executed weekly coding workshops and hackathons, boosting participation by 40%.',
      'Mentored students in personal projects, leading to 50+ successful project completions.'
    ],
    skills: ['Teaching', 'AI/ML', 'Problem Solving', 'Leadership', 'Hackathons'],
    images: []
  },
  {
    id: 'infosys-intern',
    company: 'Infosys',
    role: 'Project Intern',
    period: 'Apr 2024 – Aug 2024',
    description: 'Production AI development for automated multi-lingual meeting summarization.',
    highlights: [
      'Developed a meeting summarizer using FFmpeg, OpenAI Whisper, and Streamlit.',
      'Enhanced efficiency by 25% through NLP-based transcription and summarization solutions.',
      'Presented the project at Infosys headquarters, representing Graphic Era Hill University.'
    ],
    skills: ['NLP', 'Whisper', 'FFmpeg', 'Streamlit', 'Python'],
    images: []
  }
];
