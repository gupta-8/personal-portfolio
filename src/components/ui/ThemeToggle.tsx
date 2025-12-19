import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { motion } from 'framer-motion';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-all duration-300 hover:bg-slate-300/50 dark:hover:bg-slate-700/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 hover:scale-110 active:scale-95"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Current: ${theme === 'light' ? 'Light' : 'Dark'} mode`}
    >
      {theme === 'light' ? (
        <Sun className="w-5 h-5 text-slate-700" />
      ) : (
        <Moon className="w-5 h-5 text-slate-300" />
      )}
    </motion.button>
  );
};
