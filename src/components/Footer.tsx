
import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gradient mb-4">dev.motion</h2>
            <p className="text-foreground/70 mb-6 max-w-md">
              Creating exceptional digital experiences through modern frontend development. 
              Specializing in React, animation, and interactive web applications.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" aria-label="GitHub" className="text-foreground/60 hover:text-foreground transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-foreground/60 hover:text-foreground transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-foreground/60 hover:text-foreground transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Email" className="text-foreground/60 hover:text-foreground transition-colors duration-200">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Navigation Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-foreground/70 hover:text-foreground transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-foreground/70">
              <li>contact@devmotion.com</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border text-center text-foreground/50 text-sm">
          <p>© {new Date().getFullYear()} dev.motion. All rights reserved.</p>
          <p className="mt-1">Designed & Built with 💜</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
