import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../../data/projects';
import { Card } from '../ui/Card';
import { Tag } from '../ui/Tag';
import { Button } from '../ui/Button';
import { SectionHeader } from '../ui/SectionHeader';
import { Container } from '../layout/Container';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export const FeaturedProjects: React.FC = () => {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section className="py-10 pb-4">
      <Container>
        <motion.div {...fadeInUp}>
          <SectionHeader 
            title="Featured Projects"
            description="A few things I'm proud of. Explore more on the projects page."
          />
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          
        >
          {featuredProjects.map(project => (
            <motion.div key={project.id} variants={fadeInUp}>
              <Card hover>
              <div className="space-y-3">
                <div className="aspect-video rounded-2xl overflow-hidden bg-slate-300 dark:bg-slate-800">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live
                    </a>
                  )}
                  {project.sourceUrl && (
                    <a 
                      href={project.sourceUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Source
                    </a>
                  )}
                </div>
              </div>
            </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-6"
          {...fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <Link to="/projects">
            <Button variant="secondary">View All Projects</Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};
