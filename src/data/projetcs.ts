export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Incredible Portfolio',
    description: 'A clean, modern portfolio originally built in PHP with simple routing, reusable components, and a secure contact form.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop&q=80',
    tech: ['PHP', 'HTML', 'CSS', 'JavaScript'],
    sourceUrl: 'https://github.com/gupta-8/incredible-portfolio',
    featured: true
  },
  {
    id: '2',
    title: 'Bromite Shop',
    description: 'Creator-centered shop with minimal UI and the Simple > Complex design philosophy.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80',
    tech: ['PHP', 'CSS', 'JavaScript'],
    liveUrl: 'https://bromite.shop',
    featured: true
  },
  {
    id: '3',
    title: 'Mirror / Leech Bot',
    description: 'Asynchronous Telegram bot for mirroring, leeching, and cloud automation.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop&q=80',
    tech: ['Python', 'Docker', 'MongoDB'],
    sourceUrl: 'https://github.com/gupta-8/mirror-leech-telegram-bot',
    featured: true
  },
  {
    id: '4',
    title: 'Minimal Dev Mug',
    description: 'Minimal product design for developers featuring Simple > Complex branding.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&h=400&fit=crop&q=80',
    tech: ['Design'],
    liveUrl: 'https://bromite.shop',
    featured: false
  },
  {
    id: '5',
    title: 'Email2PhoneNumber Contribution',
    description: 'Contributed improvements to a popular OSINT security tool.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop&q=80',
    tech: ['Python'],
    sourceUrl: 'https://github.com/gupta-8/email2phonenumber',
    featured: false
  },
  {
    id: '6',
    title: 'Retro Rotary Phone Dialer',
    description: 'Nostalgic rotary phone UI recreated with animations and modern styling.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop&q=80',
    tech: ['HTML', 'CSS', 'JavaScript'],
    sourceUrl: 'https://github.com/gupta-8/crispy-octo-rotary-phone',
    featured: false
  }
];
