
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  // Apply staggered fade-in animations to sections
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    sections.forEach((section) => {
      if (section.id !== 'hero') {
        section.classList.add('opacity-0');
        observer.observe(section);
      }
    });
    
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <div id="about">
        <Skills />
      </div>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
