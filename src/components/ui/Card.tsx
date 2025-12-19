import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';

interface CardProps extends HTMLMotionProps<'div'> {
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  className, 
  children,
  hover = false,
  ...props 
}) => {
  return (
    <motion.div
      className={cn(
        'glass-card p-6',
        className
      )}
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={hover ? { type: 'spring', stiffness: 300, damping: 20 } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
};
