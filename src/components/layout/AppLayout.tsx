import React from 'react';
import { Outlet } from 'react-router-dom';
import { BottomNav } from './BottomNav';
import { ScrollProgress } from '../ui/ScrollProgress';
import { FloatingOrbs } from '../effects/FloatingOrbs';
import { Footer } from './Footer';

export const AppLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-100 relative overflow-x-hidden transition-colors duration-300">
      {/* Floating background orbs */}
      <FloatingOrbs />
      
      {/* Scroll progress indicator */}
      <ScrollProgress />
      
      {/* Bottom navigation - centered on all devices */}
      <BottomNav />
      
      {/* Main content with proper spacing for mobile bottom nav */}
      <main className="relative z-10 pt-6 md:pt-8 pb-4 md:pb-20">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};
