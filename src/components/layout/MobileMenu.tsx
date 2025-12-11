import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, FolderOpen, User, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export const MobileNav: React.FC = () => {
  const navItems = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/projects', label: 'Projects', icon: FolderOpen },
    { to: '/about', label: 'About', icon: User },
    { to: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <motion.nav 
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="premium-glass px-3 py-2">
        <div className="flex items-center gap-1.5">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => cn(
                'relative flex flex-col items-center justify-center rounded-2xl transition-all duration-300',
                'px-3 py-2 min-w-[58px]',
                'hover:scale-105 active:scale-95',
                isActive
                  ? 'text-white bg-white/20 shadow-[0_0_24px_rgba(255,255,255,0.25)]'
                  : 'text-slate-400 hover:text-white hover:bg-white/10'
              )}
            >
              <item.icon className="w-5 h-5 mb-1" strokeWidth={2} />
              <span className="text-[9px] font-medium leading-none">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};
