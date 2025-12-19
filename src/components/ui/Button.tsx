import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'variants'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className,
  ...props 
}) => {
  const baseStyles = 'px-6 py-2.5 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/50 backdrop-blur-md relative overflow-hidden';
  
  const variants = {
    primary: `
      rounded-[30px]
      bg-gradient-to-r from-purple-500/90 to-blue-500/90 dark:from-purple-500/90 dark:to-blue-500/90
      text-white
      border border-purple-400/30 dark:border-purple-400/30
      shadow-[0_0_24px_rgba(168,85,247,0.4),0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.2)]
      hover:shadow-[0_0_32px_rgba(168,85,247,0.6),0_6px_20px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.3)]
      hover:from-purple-400/95 hover:to-blue-400/95
    `,
    secondary: `
      rounded-[30px]
      bg-white/5 dark:bg-white/5
      text-slate-700 dark:text-slate-300
      border border-slate-300/30 dark:border-white/15
      shadow-[0_2px_8px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.1)]
      hover:bg-white/10 dark:hover:bg-white/10
      hover:border-slate-400/40 dark:hover:border-white/25
      hover:shadow-[0_4px_12px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.15),0_0_16px_rgba(168,85,247,0.15)]
      hover:text-slate-900 dark:hover:text-white
    `,
    outline: `
      rounded-[30px]
      bg-transparent
      border border-slate-300/30 dark:border-white/20
      text-slate-700 dark:text-white
      hover:bg-white/5 dark:hover:bg-white/10
      hover:border-slate-300/50 dark:hover:border-white/30
    `,
    ghost: `
      rounded-[30px]
      bg-transparent
      hover:bg-slate-200/50 dark:hover:bg-white/10
      text-slate-600 dark:text-slate-300
      hover:text-slate-900 dark:hover:text-white
    `
  };

  return (
    <motion.button 
      className={cn(baseStyles, variants[variant], className)}
      initial="rest"
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};
