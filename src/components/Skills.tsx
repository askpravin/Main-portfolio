
import React, { useEffect, useRef } from 'react';

type Skill = {
  name: string;
  level: number;
  icon: string;
  color: string;
};

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    { name: 'React', level: 90, icon: '⚛️', color: 'from-blue-500 to-cyan-400' },
    { name: 'TypeScript', level: 85, icon: '🔷', color: 'from-blue-600 to-blue-400' },
    { name: 'JavaScript', level: 92, icon: '🟡', color: 'from-yellow-400 to-yellow-300' },
    { name: 'Next.js', level: 80, icon: '▲', color: 'from-gray-700 to-gray-600' },
    { name: 'CSS/SCSS', level: 88, icon: '🎨', color: 'from-pink-500 to-purple-500' },
    { name: 'Tailwind', level: 85, icon: '💨', color: 'from-cyan-500 to-blue-500' },
    { name: 'Node.js', level: 75, icon: '🟢', color: 'from-green-600 to-green-400' },
    { name: 'GraphQL', level: 70, icon: '◈', color: 'from-pink-600 to-pink-400' },
  ];

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation classes to skill bars when visible
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach((bar, index) => {
              setTimeout(() => {
                (bar as HTMLElement).style.width = `${(bar as HTMLElement).dataset.level}%`;
                (bar as HTMLElement).style.opacity = '1';
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-secondary/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={skillsRef} className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Technical Expertise</h2>
          <p className="text-foreground/80 mb-12 max-w-2xl mx-auto">
            I specialize in front-end development with a focus on creating interactive, 
            high-performance web applications with modern technologies.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="glass rounded-lg p-6" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{skill.icon}</span>
                  <h3 className="text-xl font-medium">{skill.name}</h3>
                </div>
                
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`skill-progress h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: '0%', opacity: 0 }}
                    data-level={skill.level}
                  ></div>
                </div>
                
                <div className="flex justify-between mt-2 text-sm text-foreground/60">
                  <span>Experience</span>
                  <span>{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
