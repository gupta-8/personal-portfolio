import React from 'react';
import { cn } from '../../lib/utils';

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export const Tag: React.FC<TagProps> = ({ children, className }) => {
  return (
    <span className={cn(
      'inline-block px-2.5 py-0.5 text-xs font-mono rounded-full',
      'bg-slate-300/60 text-slate-700 border border-slate-400/40',
      'dark:bg-slate-800/60 dark:text-slate-300 dark:border-slate-700/40',
      className
    )}>
      {children}
    </span>
  );
};