import React from 'react';
import { motion } from 'framer-motion';

export const FloatingOrbs: React.FC = () => {
  const orbs = [
    { id: 1, size: 400, x: '10%', y: '20%', duration: 25, delay: 0, color: 'rgba(99, 102, 241, 0.08)' },
    { id: 2, size: 350, x: '80%', y: '60%', duration: 30, delay: 5, color: 'rgba(168, 85, 247, 0.08)' },
    { id: 3, size: 300, x: '60%', y: '10%', duration: 28, delay: 10, color: 'rgba(59, 130, 246, 0.08)' },
    { id: 4, size: 280, x: '25%', y: '70%', duration: 32, delay: 15, color: 'rgba(139, 92, 246, 0.08)' },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: orb.color,
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 60, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};
