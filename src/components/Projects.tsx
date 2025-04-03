
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  tags: string[];
  image: string;
  live?: string;
  github?: string;
};

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      tags: ['React', 'Next.js', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1561069934-eee225952461',
      live: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      tags: ['React', 'TypeScript', 'Firebase'],
      image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d',
      live: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      tags: ['React', 'Chart.js', 'API'],
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b',
      live: '#',
      github: '#',
    },
    {
      id: 4,
      title: 'Data Visualization',
      tags: ['D3.js', 'React', 'TypeScript'],
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
          A selection of my recent work in building interactive web applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="glass rounded-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg h-full"
            >
              <div className="h-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(18,27,27)] to-transparent z-10"></div>
                
                <div 
                  className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
              </div>
              
              <div className="p-4 relative z-20">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-medium text-white">{project.title}</h3>
                  
                  <div className="flex space-x-2">
                    {project.github && (
                      <a 
                        href={project.github} 
                        className="p-1 rounded-full hover:bg-[rgb(141,240,204)]/10 transition-colors duration-200"
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
                        className="p-1 rounded-full hover:bg-[rgb(141,240,204)]/10 transition-colors duration-200"
                        aria-label="View live project"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 text-[rgb(141,240,204)]" />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mt-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-0.5 text-xs rounded-full bg-[rgb(141,240,204)]/10 text-[rgb(141,240,204)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
