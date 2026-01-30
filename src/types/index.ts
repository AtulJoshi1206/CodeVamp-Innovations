export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  achievements: string[];
  images: string[];
  githubUrl?: string;
  liveUrl?: string;
  documentation?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  skills: string[];
  images: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: 'language' | 'framework' | 'tool' | 'database' | 'technology';
  proficiency: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  description: string;
  icon: string;
  projects: string[];

}