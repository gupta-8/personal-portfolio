export interface AboutData {
  name: string;
  headline: string;
  location: string;
  shortBio: string;
  philosophy: string[];
  focusAreas: string[];
  skills: {
    core: string[];
    wordpress: string[];
    performanceOps: string[];
  };
}

export const aboutData: AboutData = {
  name: 'Harsh Gupta',
  headline: 'PHP & WordPress Developer',
  location: 'Raipur, Chhattisgarh, India · UTC+5:30',
  shortBio: 'I build secure, performance-oriented web solutions with PHP and WordPress. My work focuses on clean architecture, maintainable code, and delivering fast, reliable experiences for users.',
  philosophy: [
    'Simple > Complex, Clarity > Cleverness',
    'Make it work. Make it right. Make it fast.',
    'Performance as a product feature'
  ],
  focusAreas: [
    'Custom WordPress builds (themes, blocks, plugins)',
    'Core Web Vitals & TTFB optimization',
    'REST APIs & secure payment integrations',
    'Turning utilities into open-source plugins'
  ],
  skills: {
    core: ['PHP', 'WordPress', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'Docker', 'Git'],
    wordpress: ['Custom themes', 'Plugins', 'Gutenberg blocks', 'ACF', 'Headless WordPress'],
    performanceOps: ['Core Web Vitals', 'TTFB optimization', 'Caching strategy', 'Image & asset optimization', 'Monitoring & logging']
  }
};
