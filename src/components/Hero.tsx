
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate mouse position as a percentage
      const x = clientX / innerWidth;
      const y = clientY / innerHeight;
      
      // Apply parallax effect to bg elements
      const bgElements = heroRef.current.querySelectorAll('.parallax-bg');
      bgElements.forEach((el, index) => {
        const speed = (index + 1) * 0.015;
        const element = el as HTMLElement;
        element.style.transform = `translate(${x * 30 * speed}px, ${y * 30 * speed}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      id="hero" 
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      {/* Background decorative elements with a motion.dev style */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="parallax-bg absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl opacity-30"></div>
        <div className="parallax-bg absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl opacity-30"></div>
        <div className="parallax-bg absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-secondary/20 blur-3xl opacity-20"></div>
      </div>
      
      <div className="container relative z-10 px-4 py-32 mx-auto text-center">
        <div className="mb-8">
          <div className="inline-block p-1 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 mb-10">
            <span className="text-xs text-white/70 px-4 py-1">REACT DEVELOPER</span>
          </div>
        </div>
      
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block opacity-0 animate-fade-in-up delay-1">Creative</span>
          <span className="block text-shimmer opacity-0 animate-fade-in-up delay-2">React Developer</span>
          <span className="block opacity-0 animate-fade-in-up delay-3">Portfolio</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-foreground/70 text-lg md:text-xl mb-12 opacity-0 animate-fade-in-up delay-4">
          Crafting interactive experiences with modern web technologies.
          Bringing designs to life with clean, efficient code.
        </p>
        
        <div className="opacity-0 animate-fade-in-up delay-5 flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#projects" 
            className="motion-button"
          >
            View Projects
          </a>
          
          <a 
            href="#contact" 
            className="motion-button"
          >
            Get in Touch
          </a>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-foreground/50 hover:text-foreground transition-colors duration-300 animate-bounce-subtle"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  );
};

export default Hero;
