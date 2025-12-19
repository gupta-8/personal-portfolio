import React from 'react';

interface SectionHeaderProps {
  title: string;
  description?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
  return (
    <div className="text-center mb-8 space-y-2">
      <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};
