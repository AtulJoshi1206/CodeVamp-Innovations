import React from 'react';
import { Beaker, TrendingUp } from 'lucide-react';

const research = [
  {
    id: 'kumoni-language-translator',
    title: 'Kumoni: Indic Language Translation',
    description: 'Advanced NLP research focused on translating Indian languages with high precision using transformer-based models.',
    researchArea: 'Natural Language Processing & Language Models',
    technologies: ['IndicBERT', 'PyTorch', 'Transformers', 'Python'],
    metrics: [
      'Optimized BLEU score through model fine-tuning',
      'Curated custom Indic language corpus',
      'Efficient inference pipeline implementation',
      'Production-grade translation accuracy'
    ],
    focus: 'Multilingual transfer learning, model optimization, low-resource language translation'
  }
];

const ResearchCard = ({ item }: any) => (
  <div className="bg-gray-800 rounded-lg p-8 hover:bg-gray-750 transition-all border border-purple-500/20">
    <div className="flex items-start justify-between mb-4">
      <div>
        <h3 className="text-2xl font-semibold text-white mb-2">{item.title}</h3>
        <p className="text-purple-400 text-sm font-medium">{item.researchArea}</p>
      </div>
      <div className="p-3 bg-purple-500/10 rounded-lg">
        <Beaker className="w-6 h-6 text-purple-500" />
      </div>
    </div>

    <p className="text-gray-300 mb-6">{item.description}</p>

    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-semibold text-purple-400 mb-3 flex items-center">
          <TrendingUp className="w-4 h-4 mr-2" />
          Research Metrics & Outcomes
        </h4>
        <ul className="space-y-2">
          {item.metrics.map((metric: string) => (
            <li key={metric} className="flex items-start text-gray-300 text-sm">
              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 mr-3 flex-shrink-0" />
              {metric}
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-gray-700 pt-4">
        <h4 className="text-sm font-semibold text-purple-400 mb-2">Focus Areas</h4>
        <p className="text-gray-400 text-sm">{item.focus}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {item.technologies.map((tech: string) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export const ResearchSection = () => {
  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-4">Research & Innovation</h2>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Applying academic rigor to production systems. Language models, NLP optimization, and research-grade implementations.
        </p>
        <div className="grid grid-cols-1 gap-8">
          {research.map((item) => (
            <ResearchCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
