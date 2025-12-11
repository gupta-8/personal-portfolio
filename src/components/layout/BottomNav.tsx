import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, FolderOpen, User, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export const BottomNav: React.FC = () => {
  const navItems = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/projects', label: 'Projects', icon: FolderOpen },
    { to: '/about', label: 'About', icon: User },
    { to: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <motion.nav 
      className="fixed bottom-6 md:bottom-5 left-0 right-0 z-50 flex justify-center px-4"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="premium-glass px-2 md:px-2 py-2 md:py-2 max-w-fit" style={{ borderRadius: '30px' }}>
        <div className="flex items-center gap-1 md:gap-1">
          {navItems.map((item, index) => (
            <React.Fragment key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) => cn(
                  'relative flex flex-col items-center justify-center transition-all duration-300',
                  'px-3 md:px-3 py-2 md:py-2 min-w-[52px] md:min-w-[56px]',
                  'hover:scale-105 active:scale-95',
                  isActive
                    ? 'text-black dark:text-white bg-slate-300/80 dark:bg-white/20 shadow-[0_2px_8px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(168,85,247,0.25)] rounded-[30px]'
                    : 'text-[#111] dark:text-slate-400 hover:text-black dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-white/10 rounded-[30px]'
                )}
              >
                <item.icon className="w-3.5 md:w-4 h-3.5 md:h-4 mb-0.5" strokeWidth={2.5} />
                <span className="text-[8px] md:text-[9px] font-medium leading-none whitespace-nowrap">{item.label}</span>
              </NavLink>
              {index < navItems.length - 1 && (
                <div className="h-6 md:h-8 w-px bg-slate-400/30 dark:bg-white/10 backdrop-blur-sm" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};
