import React from 'react';
import { Github, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

interface SocialLinkProps {
  name: string;
  url: string;
  subLabel: string;
  icon: 'github' | 'globe' | 'twitter';
}

const XLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const iconComponents = {
  github: Github,
  globe: Globe,
  twitter: XLogo,
};

const iconStyles = {
  github: {
    bgColor: 'bg-teal-500/15 dark:bg-teal-500/10',
    borderColor: 'border-teal-500/30 dark:border-teal-400/20',
    iconColor: 'text-teal-600 dark:text-teal-300',
    glowColor: 'rgba(45, 212, 191, 0.3)',
  },
  globe: {
    bgColor: 'bg-blue-500/15 dark:bg-blue-500/10',
    borderColor: 'border-blue-500/30 dark:border-blue-400/20',
    iconColor: 'text-blue-600 dark:text-blue-300',
    glowColor: 'rgba(96, 165, 250, 0.3)',
  },
  twitter: {
    bgColor: 'bg-indigo-500/15 dark:bg-purple-500/10',
    borderColor: 'border-indigo-500/30 dark:border-purple-400/20',
    iconColor: 'text-indigo-700 dark:text-purple-300',
    glowColor: 'rgba(192, 132, 252, 0.3)',
  },
};

export const SocialLink: React.FC<SocialLinkProps> = ({ name, url, subLabel, icon }) => {
  const IconComponent = iconComponents[icon];
  const style = iconStyles[icon];
  
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/0 hover:bg-slate-100/50 dark:hover:bg-white/5 border border-white/0 hover:border-slate-200/50 dark:hover:border-white/10 transition-all group"
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
    >
      <motion.div 
        className={`w-9 h-9 rounded-xl ${style.bgColor} backdrop-blur-sm border ${style.borderColor} flex items-center justify-center flex-shrink-0 transition-all`}
        whileHover={{ 
          boxShadow: `0 0 20px ${style.glowColor}, inset 0 0 10px rgba(255, 255, 255, 0.05)`,
          scale: 1.05,
        }}
      >
        {icon === 'twitter' ? (
          <XLogo className={`w-[17px] h-[17px] ${style.iconColor}`} />
        ) : (
          <IconComponent className={`w-4.5 h-4.5 ${style.iconColor}`} strokeWidth={1.5} />
        )}
      </motion.div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-slate-900 dark:text-white group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">{name}</div>
        <div className="text-[10px] text-slate-500 dark:text-slate-500 truncate">
          {subLabel}
        </div>
      </div>
    </motion.a>
  );
};
