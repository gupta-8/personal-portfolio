import React from 'react';

interface SectionLabelProps {
  children: React.ReactNode;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ children }) => {
  return (
    <span className="inline-block px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-purple-600 dark:text-purple-400 bg-purple-100/70 dark:bg-purple-400/10 rounded-full border border-purple-300/50 dark:border-purple-400/20">
      {children}
    </span>
  );
};
