import React from 'react';
import { Github, Globe } from 'lucide-react';
import { socialLinks } from '../../data/socialLinks';
import { Container } from './Container';
import { ThemeToggle } from '../ui/ThemeToggle';

const XLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="w-5 h-5" />,
  globe: <Globe className="w-5 h-5" />,
  twitter: <XLogo />
};

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 mt-8 mb-20 md:mb-4">
      <Container>
        <div className="glass-card rounded-3xl p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-slate-700 dark:text-slate-200 font-medium">
                © {currentYear} Harsh Gupta
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-mono mt-1">
                Simple &gt; Complex
              </p>
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map(link => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full transition-all duration-300 hover:bg-slate-300/50 dark:hover:bg-slate-700/50 hover:scale-110 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  aria-label={link.name}
                >
                  {iconMap[link.icon]}
                </a>
              ))}
              
              <div className="ml-2 pl-4 border-l border-slate-300/40 dark:border-slate-700/40">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
