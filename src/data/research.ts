export interface Research {
  id: string;
  title: string;
  description: string;
  researchArea: string;
  technologies: string[];
  metrics: string[];
  focus: string;
  outcome: string;
}

export const researches: Research[] = [
  {
    id: 'kumoni-language-translator',
    title: 'Kumoni: Indic Language Translation',
    description: 'Advanced NLP research focused on translating Indian languages with high precision using transformer-based models.',
    researchArea: 'Natural Language Processing',
    technologies: ['IndicBERT', 'PyTorch', 'Hugging Face Transformers', 'Python'],
    metrics: [
      'Optimized BLEU score through model fine-tuning',
      'Achieved high accuracy on Indic language pairs',
      'Implemented efficient inference pipeline',
      'Dataset: Custom curated Indic language corpus'
    ],
    focus: 'Language model optimization, transfer learning, multilingual NLP',
    outcome: 'Production-ready translation system with research-grade accuracy metrics'
  }
];
