import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Container } from '../layout/Container';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const highlights = [
  {
    label: 'Projects',
    value: '6+',
    description: 'Built & maintained'
  },
  {
    label: 'Focus',
    value: 'UX & Engineering',
    description: 'Clean design, solid code'
  },
  {
    label: 'Stack',
    value: 'PHP · WordPress',
    description: 'MySQL · JS · Docker'
  },
  {
    label: 'Philosophy',
    value: 'Simple > Complex',
    description: 'Clarity over cleverness'
  }
];

export const HighlightsRow: React.FC = () => {
  return (
    <section className="py-8">
      <Container>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          
        >
          {highlights.map((highlight, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card hover>
                <div className="text-center space-y-1.5">
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                    {highlight.label}
                  </p>
                  <p className="text-xl font-bold text-slate-900 dark:text-white">
                    {highlight.value}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {highlight.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
