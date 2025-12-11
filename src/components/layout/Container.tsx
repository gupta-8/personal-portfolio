import React from 'react';
import { cn } from '../../lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn('max-w-6xl mx-auto px-6 md:px-8', className)}>
      {children}
    </div>
  );
};
