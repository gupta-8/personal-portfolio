// Animation utilities for consistent motion across the site

// Check if user prefers reduced motion
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Page transition variants
export const pageTransition = {
  initial: { opacity: 0, y: prefersReducedMotion() ? 0 : 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: prefersReducedMotion() ? 0.15 : 0.25,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
    }
  },
  exit: { 
    opacity: 0, 
    y: prefersReducedMotion() ? 0 : -10,
    transition: { duration: 0.15 }
  }
};

// Fade in animation - IMMEDIATE render, animate on mount
export const fadeInUp = {
  initial: { opacity: 1, y: 0 },  // Start visible!
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: prefersReducedMotion() ? 0 : 0.3,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
    }
  }
};

// Stagger children animation - IMMEDIATE render
export const staggerContainer = {
  initial: { opacity: 1 },  // Start visible!
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: prefersReducedMotion() ? 0 : 0.05,
      delayChildren: prefersReducedMotion() ? 0 : 0.05
    }
  }
};

// Card hover animation
export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: { 
    scale: prefersReducedMotion() ? 1 : 1.02,
    y: prefersReducedMotion() ? 0 : -4,
    transition: { 
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
    }
  },
  tap: { scale: 0.98 }
};

// Button animation
export const buttonHover = {
  rest: { scale: 1 },
  hover: { 
    scale: prefersReducedMotion() ? 1 : 1.05,
    transition: { 
      duration: 0.2,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
    }
  },
  tap: { scale: 0.95 }
};

// Chip/tag hover
export const chipHover = {
  rest: { y: 0 },
  hover: { 
    y: prefersReducedMotion() ? 0 : -2,
    transition: { duration: 0.2 }
  }
};

// Mobile menu animation
export const mobileMenuVariants = {
  closed: { 
    opacity: 0, 
    y: prefersReducedMotion() ? 0 : -10,
    transition: { duration: 0.2 }
  },
  open: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: prefersReducedMotion() ? 0.15 : 0.3,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
    }
  }
};

export const mobileMenuItemVariants = {
  closed: { opacity: 0, x: prefersReducedMotion() ? 0 : -10 },
  open: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.2 }
  }
};

// Image scale on hover
export const imageScale = {
  rest: { scale: 1 },
  hover: { 
    scale: prefersReducedMotion() ? 1 : 1.03,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  }
};
