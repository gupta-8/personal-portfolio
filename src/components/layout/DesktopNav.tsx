import React from 'react';
import { NavLink } from 'react-router-dom';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export const DesktopNav: React.FC = () => {
  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projects' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav 
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:block"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="premium-glass px-4 py-2.5">
        <div className="flex items-center gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => cn(
                'relative px-4 py-2 rounded-full text-xs font-medium transition-all duration-300',
                'hover:scale-105 active:scale-95',
                isActive
                  ? 'text-white bg-white/20 shadow-[0_0_24px_rgba(255,255,255,0.25)]'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              )}
            >
              {item.label}
            </NavLink>
          ))}
          
          {/* GitHub Link */}
          <a
            href="https://github.com/gupta-8/gupta-8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 text-slate-300 hover:text-white hover:bg-white/10 hover:scale-105 active:scale-95"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </motion.nav>
  );
};
