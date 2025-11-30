import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/layout/Container';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { SocialLink } from '../components/ui/SocialLink';
import { MapPin, Clock, Briefcase } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const form = e.target as HTMLFormElement;
      const formDataObj = new FormData(form);
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataObj as any).toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/gupta-8', 
      subLabel: 'github.com/gupta-8',
      icon: 'github' as const 
    },
    { 
      name: 'Website', 
      url: 'https://www.harshgupta.me', 
      subLabel: 'harshgupta.me',
      icon: 'globe' as const 
    },
    { 
      name: 'X (Twitter)', 
      url: 'https://x.com/harshguptame', 
      subLabel: 'x.com/harshguptame',
      icon: 'twitter' as const 
    },
  ];

  const quickInfoIcons = {
    location: MapPin,
    clock: Clock,
    briefcase: Briefcase,
  };

  const quickInfoStyles = {
    location: {
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-400/20',
      iconColor: 'text-amber-300',
      glowColor: 'rgba(251, 191, 36, 0.3)',
    },
    clock: {
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-400/20',
      iconColor: 'text-cyan-300',
      glowColor: 'rgba(34, 211, 238, 0.3)',
    },
    briefcase: {
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-400/20',
      iconColor: 'text-purple-300',
      glowColor: 'rgba(192, 132, 252, 0.3)',
    },
  };

  const quickInfo = [
    { icon: 'location' as const, text: 'Raipur, India (UTC+5:30)' },
    { icon: 'clock' as const, text: 'Usually responds within 24 hours' },
    { icon: 'briefcase' as const, text: 'Open to freelance & full-time' },
  ];

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
              <span className="inline-block px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-purple-400 bg-purple-400/10 rounded-full border border-purple-400/20">
                Get in Touch
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white leading-tight"
              variants={fadeInUp}
            >
              Let's Work{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Together
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-sm md:text-base text-slate-600 dark:text-slate-400"
              variants={fadeInUp}
            >
              Have a project in mind? Let's talk about how we can make it happen.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-4">
        <Container>
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Contact Form */}
            <motion.div 
              className="lg:col-span-2"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              <Card>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Send a Message</h2>
                <form 
                  onSubmit={handleSubmit} 
                  className="space-y-4"
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                >
                  {/* Hidden fields for Netlify Forms */}
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="bot-field" />
                  
                  <div>
                    <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-2.5 text-sm bg-white/50 dark:bg-white/5 border border-slate-300/50 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-2.5 text-sm bg-white/50 dark:bg-white/5 border border-slate-300/50 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="w-full px-4 py-2.5 text-sm bg-white/50 dark:bg-white/5 border border-slate-300/50 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20 transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-green-500/10 border border-green-400/20 rounded-xl"
                    >
                      <p className="text-xs text-green-600 dark:text-green-400 text-center">
                        ✓ Message sent successfully! I'll get back to you soon.
                      </p>
                    </motion.div>
                  )}

                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-red-500/10 border border-red-400/20 rounded-xl"
                    >
                      <p className="text-xs text-red-600 dark:text-red-400 text-center">
                        ✗ Something went wrong. Please try again or reach out via email/social media.
                      </p>
                    </motion.div>
                  )}
                  
                  <Button 
                    type="submit" 
                    variant="primary" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Sidebar Info */}
            <motion.div 
              className="space-y-6"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {/* Connect Online */}
              <motion.div variants={fadeInUp}>
                <Card>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3.5">Connect Online</h3>
                  <div className="space-y-1.5">
                    {socialLinks.map((link) => (
                      <SocialLink 
                        key={link.name}
                        name={link.name}
                        url={link.url}
                        subLabel={link.subLabel}
                        icon={link.icon}
                      />
                    ))}
                  </div>
                </Card>
              </motion.div>

              {/* Quick Info */}
              <motion.div variants={fadeInUp}>
                <Card>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3.5">Quick Info</h3>
                  <div className="space-y-2.5">
                    {quickInfo.map((item, i) => {
                      const Icon = quickInfoIcons[item.icon];
                      const style = quickInfoStyles[item.icon];
                      return (
                        <motion.div 
                          key={i} 
                          className="flex items-start gap-2.5"
                          whileHover={{ x: 2 }}
                        >
                          <motion.div 
                            className={`w-8 h-8 rounded-xl ${style.bgColor} backdrop-blur-sm border ${style.borderColor} flex items-center justify-center flex-shrink-0 transition-all`}
                            whileHover={{ 
                              scale: 1.05,
                              boxShadow: `0 0 20px ${style.glowColor}, inset 0 0 10px rgba(255, 255, 255, 0.05)`,
                            }}
                          >
                            <Icon className={`w-4 h-4 ${style.iconColor}`} strokeWidth={1.5} />
                          </motion.div>
                          <p className="text-xs text-slate-600 dark:text-slate-400 pt-1.5 leading-relaxed">{item.text}</p>
                        </motion.div>
                      );
                    })}
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
};
