import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../../data/projects';
import { cardHover, imageScale, chipHover } from '../../utils/animations';

interface ProjectCardProps extends Project {
  featured?: boolean;
}

const techColors: Record<string, string> = {
  PHP: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  WordPress: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  JavaScript: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  HTML: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  CSS: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  Python: 'bg-green-500/20 text-green-400 border-green-500/30',
  Docker: 'bg-teal-500/20 text-teal-400 border-teal-500/30',
  MongoDB: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  Design: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
  MySQL: 'bg-blue-600/20 text-blue-300 border-blue-600/30',
  Git: 'bg-red-500/20 text-red-400 border-red-500/30'
};

const getTechColor = (tech: string): string => {
  return techColors[tech] || 'bg-slate-500/20 text-slate-400 border-slate-500/30';
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  image, 
  tech, 
  liveUrl, 
  sourceUrl,
  featured = false 
}) => {
  return (
    <motion.div 
      className={`group relative ${featured ? 'md:col-span-2' : ''}`}
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
    >
      <div className="glass-card rounded-3xl overflow-hidden h-full flex flex-col">
        {/* Gradient border effect on hover */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-slate-400/0 via-slate-400/0 to-slate-400/0 group-hover:from-slate-400/10 group-hover:via-slate-500/5 group-hover:to-slate-400/10 dark:group-hover:from-slate-600/10 dark:group-hover:via-slate-700/5 dark:group-hover:to-slate-600/10 transition-all duration-300 pointer-events-none" />
        
        {/* Thumbnail */}
        <motion.div 
          className="relative overflow-hidden rounded-t-3xl bg-slate-300 dark:bg-slate-800"
          style={{ height: featured ? '280px' : '240px' }}
          variants={imageScale}
          initial="rest"
          whileHover="hover"
        >
          <motion.img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
            variants={imageScale}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 dark:from-slate-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
        
        {/* Content */}
        <div className={`flex-1 flex flex-col relative z-10 ${featured ? 'p-5' : 'p-4'}`}>
          <h3 className={`font-bold text-slate-900 dark:text-white mb-2 ${featured ? 'text-lg' : 'text-base'}`}>
            {title}
          </h3>
          
          <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed mb-3 flex-1">
            {description}
          </p>
          
          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {tech.map(techItem => (
              <motion.span 
                key={techItem}
                className={`inline-block px-2.5 py-0.5 text-xs font-mono rounded-full border backdrop-blur-sm ${getTechColor(techItem)}`}
                variants={chipHover}
                initial="rest"
                whileHover="hover"
              >
                {techItem}
              </motion.span>
            ))}
          </div>
          
          {/* Links */}
          <div className="flex gap-4 pt-2 border-t border-slate-300/30 dark:border-slate-700/30">
            {liveUrl && (
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors group/link"
              >
                <ExternalLink className="w-3 h-3 group-hover/link:scale-110 transition-transform" />
                Live
              </a>
            )}
            {sourceUrl && (
              <a 
                href={sourceUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors group/link"
              >
                <Github className="w-3 h-3 group-hover/link:scale-110 transition-transform" />
                Source
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
