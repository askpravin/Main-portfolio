
import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  live?: string;
  github?: string;
};

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online store built with React, Next.js, and Stripe integration. Features include product filtering, user accounts, and secure checkout.',
      tags: ['React', 'Next.js', 'Stripe', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1561069934-eee225952461',
      live: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Productivity application with drag-and-drop task organization, real-time updates, and team collaboration features.',
      tags: ['React', 'TypeScript', 'Firebase', 'Styled Components'],
      image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d',
      live: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Interactive weather visualization tool with location search, 7-day forecasts, and animated weather conditions.',
      tags: ['React', 'Chart.js', 'Weather API', 'CSS Animations'],
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b',
      live: '#',
      github: '#',
    },
    {
      id: 4,
      title: 'Interactive Data Visualization',
      description: 'Complex data visualization platform with filterable datasets, animated charts, and responsive design.',
      tags: ['D3.js', 'React', 'TypeScript', 'REST API'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      live: '#',
      github: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[rgb(18,27,27)] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-[rgb(141,240,204)]/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-[rgb(141,240,204)]/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[rgb(141,240,204)]">Featured Projects</h2>
        <p className="text-foreground/80 mb-12 max-w-2xl mx-auto">
          A selection of my recent work, showcasing my skills in building interactive 
          and responsive web applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`glass rounded-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg relative group ${
                activeProject === project.id ? 'ring-2 ring-[rgb(141,240,204)]' : ''
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="h-48 relative overflow-hidden">
                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(18,27,27)] to-transparent z-10"></div>
                
                <div 
                  className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
              </div>
              
              <div className="p-6 relative z-20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  
                  <div className="flex space-x-2">
                    {project.github && (
                      <a 
                        href={project.github} 
                        className="p-1.5 rounded-full bg-[rgb(18,27,27)]/50 hover:bg-[rgb(18,27,27)] transition-colors duration-200"
                        aria-label="View GitHub repository"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 text-[rgb(141,240,204)]" />
                      </a>
                    )}
                    
                    {project.live && (
                      <a 
                        href={project.live}
                        className="p-1.5 rounded-full bg-[rgb(18,27,27)]/50 hover:bg-[rgb(18,27,27)] transition-colors duration-200"
                        aria-label="View live project"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 text-[rgb(141,240,204)]" />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-foreground/70 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 text-xs rounded-full bg-[rgb(141,240,204)]/20 text-[rgb(141,240,204)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href="#" 
                  className="inline-flex items-center text-sm text-[rgb(141,240,204)] hover:text-[rgb(141,240,204)]/80 transition-colors duration-200"
                >
                  View Project Details
                  <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
