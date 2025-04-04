import React, { useEffect, useRef } from "react";
import { ArrowDown, FileText } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current || isMobile) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Calculate mouse position as a percentage
      const x = clientX / innerWidth;
      const y = clientY / innerHeight;

      // Apply parallax effect to bg elements
      const bgElements = heroRef.current.querySelectorAll(".parallax-bg");
      bgElements.forEach((el, index) => {
        const speed = (index + 1) * 0.015;
        const element = el as HTMLElement;
        element.style.transform = `translate(${x * 30 * speed}px, ${
          y * 30 * speed
        }px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      {/* Background decorative elements with a motion.dev style */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="parallax-bg absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-[rgb(141,240,204)]/20 blur-3xl opacity-30"></div>
        <div className="parallax-bg absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-[rgb(141,240,204)]/20 blur-3xl opacity-30"></div>
        <div className="parallax-bg absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-[rgb(141,240,204)]/20 blur-3xl opacity-20"></div>
      </div>

      <div className="container relative z-10 px-4 py-16 md:py-32 mx-auto text-center">
        <div className="mb-8">
          <div className="inline-block p-1 rounded-lg bg-[rgb(141,240,204)]/20 backdrop-blur-md border border-[rgb(141,240,204)]/30 mb-10">
            <span className="text-xs md:text-sm font-medium text-[rgb(141,240,204)] px-3 py-1 md:px-4 md:py-1 block">
              REACT DEVELOPER
            </span>
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block opacity-0 animate-fade-in-up delay-1">
            Creative
          </span>
          <span className="block bg-gradient-to-r from-[rgb(141,240,204)] to-white bg-clip-text text-transparent animate-fade-in-up delay-2">
            React Developer
          </span>
          <span className="block opacity-0 animate-fade-in-up delay-3">
            Portfolio
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-foreground/70 text-base md:text-lg lg:text-xl mb-8 md:mb-12 opacity-0 animate-fade-in-up delay-4">
          Crafting interactive experiences with modern web technologies.
          Bringing designs to life with clean, efficient code.
        </p>

        <div className="opacity-0 animate-fade-in-up delay-5 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="motion-button text-sm md:text-base">
            View Projects
          </a>

          <a href="#contact" className="motion-button text-sm md:text-base">
            Get in Touch
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-[rgb(141,240,204)]/50 hover:text-[rgb(141,240,204)] transition-colors duration-300 animate-bounce-subtle"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-5 w-5 md:h-6 md:w-6" />
      </a>
    </section>
  );
};

export default Hero;
