
import React from 'react';
import { Code, TerminalSquare, Files, Layout, Blocks, Pencil, Server, Database } from 'lucide-react';

type Skill = {
  name: string;
  icon: React.ReactNode;
};

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { 
      name: 'React', 
      icon: <Code className="w-8 h-8 text-[rgb(141,240,204)]" />
    },
    { 
      name: 'TypeScript', 
      icon: <TerminalSquare className="w-8 h-8 text-[rgb(141,240,204)]" /> 
    },
    { 
      name: 'JavaScript', 
      icon: <Files className="w-8 h-8 text-[rgb(141,240,204)]" /> 
    },
    { 
      name: 'Next.js', 
      icon: <Layout className="w-8 h-8 text-[rgb(141,240,204)]" /> 
    },
    { 
      name: 'CSS/SCSS', 
      icon: <Pencil className="w-8 h-8 text-[rgb(141,240,204)]" /> 
    },
    { 
      name: 'Tailwind', 
      icon: <Blocks className="w-8 h-8 text-[rgb(141,240,204)]" /> 
    },
    { 
      name: 'Node.js', 
      icon: <Server className="w-8 h-8 text-[rgb(141,240,204)]" /> 
    },
    { 
      name: 'GraphQL', 
      icon: <Database className="w-8 h-8 text-[rgb(141,240,204)]" /> 
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[rgb(18,27,27)] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-[rgb(141,240,204)]/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-[rgb(141,240,204)]/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[rgb(141,240,204)]">Technical Expertise</h2>
          <p className="text-foreground/80 mb-12 max-w-2xl mx-auto">
            I specialize in front-end development with a focus on creating interactive, 
            high-performance web applications with modern technologies.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {skills.map((skill) => (
              <div 
                key={skill.name} 
                className="glass rounded-lg p-6 flex flex-col items-center justify-center hover:bg-[rgb(141,240,204)]/5 transition-all duration-300"
              >
                <div className="mb-3">
                  {skill.icon}
                </div>
                <h3 className="text-center text-white">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
