import React from 'react';
import { Code, Database, Zap, Box, GitBranch, Coffee, Layers, Globe, Palette, Wind, Terminal, Send, Github as GithubIcon, FileCode, Monitor } from 'lucide-react';
import { cn } from '../../lib/utils';

// Tech logo/icon mappings with proper Lucide icons
const techIcons: Record<string, { Icon: React.ElementType; lightText: string; darkText: string; darkIconColor: string; darkBg: string; darkBorder: string; lightBg: string }> = {
  // Backend
  'PHP': { 
    Icon: Code, 
    lightText: 'text-black', 
    darkText: 'dark:text-white/90',
    darkIconColor: 'dark:text-blue-300',
    darkBg: 'dark:bg-gradient-to-br dark:from-slate-800/60 dark:to-blue-900/40',
    darkBorder: 'dark:border-blue-500/20',
    lightBg: 'bg-indigo-100/80 border-indigo-300/50'
  },
  'MySQL': { 
    Icon: Database, 
    lightText: 'text-black', 
    darkText: 'dark:text-white/90',
    darkIconColor: 'dark:text-teal-300',
    darkBg: 'dark:bg-gradient-to-br dark:from-slate-800/60 dark:to-teal-900/40',
    darkBorder: 'dark:border-teal-500/20',
    lightBg: 'bg-cyan-100/80 border-cyan-300/50'
  },
  'REST APIs': { 
    Icon: Zap, 
    lightText: 'text-black', 
    darkText: 'dark:text-white/90',
    darkIconColor: 'dark:text-cyan-300',
    darkBg: 'dark:bg-gradient-to-br dark:from-slate-800/60 dark:to-cyan-900/40',
    darkBorder: 'dark:border-cyan-500/20',
    lightBg: 'bg-blue-100/80 border-blue-300/50'
  },
  'Docker': { 
    Icon: Box, 
    lightText: 'text-black', 
    darkText: 'dark:text-white/90',
    darkIconColor: 'dark:text-blue-300',
    darkBg: 'dark:bg-gradient-to-br dark:from-slate-800/60 dark:to-blue-900/40',
    darkBorder: 'dark:border-blue-500/20',
    lightBg: 'bg-blue-100/80 border-blue-300/50'
  },
  'Git': { 
    Icon: GitBranch, 
    lightText: 'text-black', 
    darkText: 'dark:text-white/90',
    darkIconColor: 'dark:text-indigo-300',
    darkBg: 'dark:bg-gradient-to-br dark:from-slate-800/60 dark:to-indigo-900/40',
    darkBorder: 'dark:border-indigo-500/20',
    lightBg: 'bg-orange-100/80 border-orange-300/50'
  },
  
  // Frontend
  'JavaScript': { 
    Icon: Coffee, 
    lightText: 'text-black', 
    darkText: 'dark:text-white/90',
    darkIconColor: 'dark:text-cyan-300',
    darkBg: 'dark:bg-gradient-to-br dark:from-slate-800/60 dark:to-cyan-900/40',
    darkBorder: 'dark:border-cyan-500/20',
    lightBg: 'bg-yellow-100/80 border-yellow-400/50'
  },
  'React': { 
    Icon: Layers, 
    lightText: 'text-black', 
    darkText: 'dark:text-white/90',
    darkIconColor: 'dark:text-cyan-300',
    darkBg: 'dark:bg-gradient-to-br dark:from-slate-800/60 dark:to-cyan-900/40',
    darkBorder: 'dark:border-cyan-500/20',
    lightBg: 'bg-cyan-100/80 border-cyan-300/50'
  },
  'HTML5': { 
    Icon: Globe, 
    lightText: 'text-black', 
    darkText: 'dark:text-white/90',
    darkIconColor: 'dark:text-blue-300',
    darkBg: 'dark:bg-gradient-to-br dark:from-slate-800/60 dark:to-blue-900/40',
    darkBorder: 'dark:border-blue-500/20',
    lightBg: 'bg-orange-100/80 border-orange-300/50'
  },
  'CSS3': { 
    Icon: Palette, 
    lightText: 'text-black', 
    darkText: 'dark:text-white/90',
    darkIconColor: 'dark:text-indigo-300',
    darkBg: 'dark:bg-gradient-to-br dark:from-slate-800/60 dark:to-indigo-900/40',
    darkBorder: 'dark:border-indigo-500/20',
    lightBg: 'bg-blue-100/80 border-blue-300/50'
  },
  'Tailwind': { 
    Icon: Wind, 
    lightText: 'text-black', 
    darkText: 'dark:text-white/90',
    darkIconColor: 'dark:text-teal-300',
    darkBg: 'dark:bg-gradient-to-br dark:from-slate-800/60 dark:to-teal-900/40',
    darkBorder: 'dark:border-teal-500/20',
    lightBg: 'bg-teal-100/80 border-teal-300/50'
  },
  
  // Tools
  'VS Code': { 
    Icon: Terminal, 
    lightText: 'text-black', 
    darkText: 'dark:text-white/90',
    darkIconColor: 'dark:text-indigo-300',
    darkBg: 'dark:bg-gradient-to-br dark:from-slate-800/60 dark:to-indigo-900/40',
    darkBorder: 'dark:border-indigo-500/20',
    lightBg: 'bg-indigo-100/80 border-indigo-300/50'
  },
  'Postman': { 
    Icon: Send, 
    lightText: 'text-black', 
    darkText: 'dark:text-white/90',
    darkIconColor: 'dark:text-blue-300',
    darkBg: 'dark:bg-gradient-to-br dark:from-slate-800/60 dark:to-blue-900/40',
    darkBorder: 'dark:border-blue-500/20',
    lightBg: 'bg-orange-100/80 border-orange-300/50'
  },
  'GitHub': { 
    Icon: GithubIcon, 
    lightText: 'text-black', 
    darkText: 'dark:text-white/90',
    darkIconColor: 'dark:text-violet-300',
    darkBg: 'dark:bg-gradient-to-br dark:from-slate-800/60 dark:to-violet-900/40',
    darkBorder: 'dark:border-violet-500/20',
    lightBg: 'bg-slate-200/80 border-slate-300/50'
  },
  'WordPress': { 
    Icon: FileCode, 
    lightText: 'text-black', 
    darkText: 'dark:text-white/90',
    darkIconColor: 'dark:text-blue-300',
    darkBg: 'dark:bg-gradient-to-br dark:from-slate-800/60 dark:to-blue-900/40',
    darkBorder: 'dark:border-blue-500/20',
    lightBg: 'bg-blue-100/80 border-blue-300/50'
  },
  'Linux': { 
    Icon: Monitor, 
    lightText: 'text-black', 
    darkText: 'dark:text-white/90',
    darkIconColor: 'dark:text-slate-300',
    darkBg: 'dark:bg-gradient-to-br dark:from-slate-800/60 dark:to-slate-700/40',
    darkBorder: 'dark:border-slate-600/20',
    lightBg: 'bg-slate-200/80 border-slate-300/50'
  },
};

interface TechPillProps {
  name: string;
  className?: string;
}

export const TechPill: React.FC<TechPillProps> = ({ name, className }) => {
  const tech = techIcons[name] || { 
    Icon: Code, 
    lightText: 'text-black', 
    darkText: 'dark:text-white/90',
    darkIconColor: 'dark:text-slate-300',
    darkBg: 'dark:bg-gradient-to-br dark:from-slate-800/60 dark:to-slate-700/40',
    darkBorder: 'dark:border-slate-600/20',
    lightBg: 'bg-slate-200/80 border-slate-300/50'
  };
  
  const Icon = tech.Icon;
  
  return (
    <span 
      className={cn(
        'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium',
        tech.lightText,
        tech.darkText,
        'border backdrop-blur-md',
        'hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-[0_4px_12px_rgba(168,85,247,0.15)] transition-all duration-200 cursor-default',
        tech.lightBg,
        tech.darkBg,
        tech.darkBorder,
        className
      )}
    >
      <Icon className={cn('w-2.5 h-2.5', tech.lightText, tech.darkIconColor)} strokeWidth={2} />
      <span>{name}</span>
    </span>
  );
};
