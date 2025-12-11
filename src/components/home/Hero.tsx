import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Container } from '../layout/Container';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export const Hero: React.FC = () => {
  return (
    <section className="pt-6 md:pt-8 pb-12">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <motion.div 
            className="space-y-4"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div className="inline-block" variants={fadeInUp}>
              <span className="text-[10px] font-mono text-slate-600 dark:text-slate-400 px-2.5 py-1 rounded-full bg-slate-200/70 dark:bg-white/5 backdrop-blur-md border border-slate-300/50 dark:border-white/10">
                Developer <span className="text-[8px]">·</span> Builder <span className="text-[8px]">·</span> Learner
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white leading-tight"
              variants={fadeInUp}
            >
              Hi, I'm{' '}
              <span className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Harsh Gupta
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-sm md:text-base text-slate-700 dark:text-slate-300 font-medium"
              variants={fadeInUp}
            >
              PHP & WordPress Developer · REST APIs · Performance-Driven Web Solutions
            </motion.p>
            
            <motion.div 
              className="flex items-center gap-2 text-slate-600 dark:text-slate-300"
              variants={fadeInUp}
            >
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-mono">Raipur, Chhattisgarh, India</span>
            </motion.div>
            
            <motion.p 
              className="text-base text-slate-700 dark:text-slate-300 leading-relaxed"
              variants={fadeInUp}
            >
              I build secure, high-performance web solutions with PHP and WordPress. 
              My focus is on clean architecture, maintainable code, and delivering 
              fast experiences that users love.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
              variants={fadeInUp}
            >
              <Link to="/projects">
                <Button variant="primary">View Projects</Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary">Contact Me</Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <Card className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                <div className="flex-1">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    Currently
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Shipping WordPress builds with custom blocks & plugins.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                <div className="flex-1">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    Open to
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Freelance and full-time roles.
                  </p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-slate-300/50 dark:border-slate-700/30">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
                    <span className="text-sm text-slate-700 dark:text-slate-200">
                      Responsive, fast-loading frontends
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
                    <span className="text-sm text-slate-700 dark:text-slate-200">
                      Maintainable PHP backends
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                    <span className="text-sm text-slate-700 dark:text-slate-200">
                      Small tools & automation
                    </span>
                  </li>
                </ul>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
