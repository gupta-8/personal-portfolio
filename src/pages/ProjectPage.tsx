import React, { useState, useMemo } from 'react';
import { AnimatedPage } from '../components/common/AnimatedPage';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../components/layout/Container';
import { SectionLabel } from '../components/ui/SectionLabel';
import { ProjectCard } from '../components/projects/ProjectCard';
import { projects } from '../data/projects';
import { fadeInUp, staggerContainer } from '../utils/animations';

export const ProjectsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Real-time filtering by name, description, and tags
  const filteredProjects = useMemo(() => {
    if (!searchQuery.trim()) {
      return projects;
    }

    const query = searchQuery.toLowerCase().trim();
    return projects.filter(project => {
      const matchesTitle = project.title.toLowerCase().includes(query);
      const matchesDescription = project.description.toLowerCase().includes(query);
      const matchesTech = project.tech.some(tech => tech.toLowerCase().includes(query));
      
      return matchesTitle || matchesDescription || matchesTech;
    });
  }, [searchQuery]);

  return (
    <>
      <section className="pt-6 md:pt-8 pb-4">
        <Container>
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-10"
            {...fadeInUp}
          >
            <SectionLabel>PORTFOLIO</SectionLabel>
            <h1 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-3 mb-2">
              Projects
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              A collection of tools, products, and experiments I've built.
            </p>
          </motion.div>

          <motion.div 
            className="mb-8"
            {...fadeInUp}
            transition={{ delay: 0.1 }}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects by name, description, or tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-3 pl-12 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-300/50 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-500 focus:outline-none focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20 transition-all text-sm"
              />
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 dark:text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map(project => (
                <motion.div 
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                No projects found matching "{searchQuery}"
              </p>
            </motion.div>
          )}
        </Container>
      </section>
    </>
  );
};
