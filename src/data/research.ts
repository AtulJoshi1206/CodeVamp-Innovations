export interface Research {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  volume: string;
  issue: string;
  doi: string;
  link: string;
  isCorrespondingAuthor: boolean;
}

export const researches: Research[] = [
  {
    id: 'kumauni-translation-study',
    title: 'A Comparative Study of MBart and Alternative Transformer Models for Kumauni Language Translation',
    authors: ['Atul Joshi', 'Dr Ankur Bist (Hod GEU)', 'Neelesh Tanwar (Walmart, USA)'],
    journal: 'AJOMCOR',
    volume: '32',
    issue: '3',
    doi: '10.56557/ajomcor/2025/v32i39482',
    link: 'https://ikprress.org/index.php/AJOMCOR/article/view/9482',
    isCorrespondingAuthor: true
  },
  {
    id: 'kumaoni-culture-preservation',
    title: 'AI-powered Analysis and Comprehensive Review of the Decline of Kumaoni Culture and Language Preservation Initiatives',
    authors: ['Atul Joshi', 'Dr Ankur Bist (Hod GEU)', 'Neelesh Tanwar (Walmart, USA)'],
    journal: 'AJOMCOR',
    volume: '32',
    issue: '3',
    doi: '10.56557/ajomcor/2025/v32i39494',
    link: 'https://ikprress.org/index.php/AJOMCOR/article/view/9494',
    isCorrespondingAuthor: true
  }
];

