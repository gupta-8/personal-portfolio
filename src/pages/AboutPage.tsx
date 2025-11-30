import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/layout/Container';
import { Card } from '../components/ui/Card';
import { TechPill } from '../components/ui/TechPill';
import { Sparkles, Rocket, Hammer, Plug, FileCode, Zap, Globe } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

export const AboutPage: React.FC = () => {
  const philosophyItems = [
    { 
      Icon: Sparkles,
      color: 'text-purple-500 dark:text-purple-400',
      bgColor: 'bg-purple-500/10 dark:bg-purple-500/20',
      title: 'Simple Over Complex', 
      desc: 'Clarity beats cleverness every time' 
    },
    { 
      Icon: Rocket,
      color: 'text-blue-500 dark:text-blue-400',
      bgColor: 'bg-blue-500/10 dark:bg-blue-500/20',
      title: 'Ship Fast, Iterate', 
      desc: 'Perfect is the enemy of done' 
    },
    { 
      Icon: Hammer,
      color: 'text-cyan-500 dark:text-cyan-400',
      bgColor: 'bg-cyan-500/10 dark:bg-cyan-500/20',
      title: 'Build to Last', 
      desc: 'Maintainable code for the long run' 
    },
  ];

  const buildItems = [
    { 
      Icon: Plug,
      color: 'text-blue-500 dark:text-blue-400',
      bgColor: 'bg-blue-500/10 dark:bg-blue-500/20',
      title: 'REST APIs', 
      desc: 'Clean, documented APIs that just work' 
    },
    { 
      Icon: FileCode,
      color: 'text-indigo-500 dark:text-indigo-400',
      bgColor: 'bg-indigo-500/10 dark:bg-indigo-500/20',
      title: 'WordPress', 
      desc: 'Custom blocks, themes & plugins' 
    },
    { 
      Icon: Zap,
      color: 'text-amber-500 dark:text-amber-400',
      bgColor: 'bg-amber-500/10 dark:bg-amber-500/20',
      title: 'Tools & Scripts', 
      desc: 'Automation that saves hours' 
    },
    { 
      Icon: Globe,
      color: 'text-emerald-500 dark:text-emerald-400',
      bgColor: 'bg-emerald-500/10 dark:bg-emerald-500/20',
      title: 'Full Sites', 
      desc: 'From concept to deployment' 
    },
  ];

  const skills = {
    backend: ['PHP', 'MySQL', 'REST APIs', 'Docker', 'Git'],
    frontend: ['JavaScript', 'React', 'HTML5', 'CSS3', 'Tailwind'],
    tools: ['VS Code', 'Postman', 'GitHub', 'WordPress', 'Linux'],
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-6 md:pt-8 pb-16">
        <Container>
          <motion.div
            className="max-w-3xl mx-auto text-center space-y-4"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-block px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-purple-600 dark:text-purple-400 bg-purple-100/70 dark:bg-purple-400/10 rounded-full border border-purple-300/50 dark:border-purple-400/20">
                About Me
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white leading-tight"
              variants={fadeInUp}
            >
              Building the Web,{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                One Line at a Time
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-sm md:text-base text-slate-700 dark:text-slate-400 leading-relaxed"
              variants={fadeInUp}
            >
              I'm a developer who believes in clean code, solid architecture, and tools that actually solve problems.
              I build with PHP, WordPress, and modern web technologies to create fast, maintainable solutions.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Code Philosophy */}
      <section className="pb-16">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h2 
              className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-6 text-center"
              variants={fadeInUp}
            >
              Code Philosophy
            </motion.h2>
            
            <motion.div 
              className="grid md:grid-cols-3 gap-4"
              variants={staggerContainer}
            >
              {philosophyItems.map((item, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <Card hover className="h-full group">
                    <div className="text-center space-y-3">
                      <motion.div 
                        className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${item.bgColor} backdrop-blur-sm border border-white/10 dark:border-white/20`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <item.Icon className={`w-7 h-7 ${item.color}`} strokeWidth={1.5} />
                      </motion.div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        {item.desc}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* What I Build */}
      <section className="pb-16">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h2 
              className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-6 text-center"
              variants={fadeInUp}
            >
              What I Build
            </motion.h2>
            
            <motion.div 
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
              variants={staggerContainer}
            >
              {buildItems.map((item, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <Card hover className="h-full text-center group">
                    <motion.div 
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${item.bgColor} backdrop-blur-sm border border-white/10 dark:border-white/20 mb-3`}
                      whileHover={{ scale: 1.15, rotate: -5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <item.Icon className={`w-6 h-6 ${item.color}`} strokeWidth={1.5} />
                    </motion.div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Skills */}
      <section className="pb-4">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h2 
              className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-6 text-center"
              variants={fadeInUp}
            >
              Skills & Tools
            </motion.h2>
            
            <motion.div 
              className="grid md:grid-cols-3 gap-4"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <Card className="h-full">
                  <h3 className="text-sm font-bold text-purple-600 dark:text-purple-400 mb-3">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map(skill => (
                      <TechPill key={skill} name={skill} />
                    ))}
                  </div>
                </Card>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <Card className="h-full">
                  <h3 className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-3">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map(skill => (
                      <TechPill key={skill} name={skill} />
                    ))}
                  </div>
                </Card>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <Card className="h-full">
                  <h3 className="text-sm font-bold text-pink-600 dark:text-pink-400 mb-3">Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map(skill => (
                      <TechPill key={skill} name={skill} />
                    ))}
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </>
  );
};
