import { useEffect, useState } from 'react';

type ThemeSetting = 'light' | 'dark';

const getSystemTheme = (): 'light' | 'dark' => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeSetting>(() => {
    // Check if user has a saved preference
    const stored = localStorage.getItem('harsh-theme') as ThemeSetting;
    
    if (stored && ['light', 'dark'].includes(stored)) {
      return stored;
    }
    
    // First visit - detect OS preference
    return getSystemTheme();
  });

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Save user preference
    localStorage.setItem('harsh-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const setThemeMode = (mode: ThemeSetting) => {
    setTheme(mode);
  };

  return { 
    theme,
    setTheme: setThemeMode,
    toggleTheme
  };
};
