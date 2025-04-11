import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[rgb(18,27,27)] border-t border-[rgb(141,240,204)]/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <h2 className="text-2xl font-bold text-[rgb(141,240,204)] mb-4 hover:opacity-80 transition-opacity">
                Pravin Jadhav
              </h2>
            </Link>
            <p className="text-foreground/70 mb-6 max-w-md">
              Delivering robust and scalable backend solutions with expertise in
              Node.js, Express, and database systems. Specializing in API
              development, server architecture, and cloud infrastructure.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://github.com/askpravin"
                aria-label="GitHub"
                className="text-[rgb(141,240,204)]/60 hover:text-[rgb(141,240,204)] transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/askpravinjadhav/"
                aria-label="LinkedIn"
                className="text-[rgb(141,240,204)]/60 hover:text-[rgb(141,240,204)] transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/pravinselu"
                aria-label="Twitter"
                className="text-[rgb(141,240,204)]/60 hover:text-[rgb(141,240,204)] transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:askpravinjadhav@gmail.com"
                aria-label="Email"
                className="text-[rgb(141,240,204)]/60 hover:text-[rgb(141,240,204)] transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Navigation
            </h3>
            <ul className="space-y-3">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-foreground/70 hover:text-[rgb(141,240,204)] transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-3 text-foreground/70">
              <li>askpravinjadhav@gmail.com</li>
              <li>Pune - Maharashtra, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[rgb(141,240,204)]/10 text-center text-foreground/50 text-sm">
          <p>
            © {new Date().getFullYear()} Pravin Jadhav. All rights reserved.
          </p>
          <p className="mt-1">
            Designed & Built with{" "}
            <span className="text-[rgb(141,240,204)]">💜</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
