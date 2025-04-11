import React, { useState } from "react";
import { ExternalLink, Github, QrCode } from "lucide-react";

type Project = {
  id: number;
  title: string;
  tags: string[];
  image: string;
  live?: string;
  github?: string;
  type: "web" | "mobile";
  description?: string;
};

type ProjectType = "all" | "web" | "mobile";

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ProjectType>("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "Nodejs Mastery - Learning Website",
      tags: ["React", "Next.js", "Stripe"],
      image: "/nodejs.png",
      live: "https://nodejsmastery.site",
      github: "#",
      type: "web",
      description:
        "A comprehensive learning platform for Node.js development with integrated payment processing.",
    },
    {
      id: 2,
      title: "Portfolio Website",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
      live: "https://internshala-portfolio.netlify.app/",
      github: "#",
      type: "web",
      description: "Developed during Internshala training program",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      tags: ["React", "Chart.js", "API"],
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b",
      live: "#",
      github: "#",
      type: "web",
    },
    {
      id: 4,
      title: "Data Visualization",
      tags: ["D3.js", "React", "TypeScript"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      live: "#",
      github: "#",
      type: "web",
    },
    {
      id: 5,
      title: "QR Code Scanner",
      tags: ["React Native", "Expo", "TypeScript"],
      image: "https://images.unsplash.com/photo-1622771536319-3d6cc6c7ac04",
      github: "#",
      type: "mobile",
      description:
        "A mobile app that scans QR codes using Expo Camera API and provides real-time results.",
    },

    {
      id: 7,
      title: "Expo Scanner Instructions",
      tags: ["React Native", "Expo", "Camera API"],
      image: "https://images.unsplash.com/photo-1583225214464-9296029427aa",
      github: "#",
      type: "mobile",
      description:
        "A mobile app that provides step-by-step scanning instructions with Expo's QR code scanner. Helps users scan documents and IDs with proper alignment guidance.",
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.type === activeTab);

  const ProjectCard = ({ project }: { project: Project }) => (
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

            {project.title.includes("Scanner") && (
              <span className="p-1 rounded-full hover:bg-[rgb(141,240,204)]/10 transition-colors duration-200">
                <QrCode className="h-4 w-4 text-[rgb(141,240,204)]" />
              </span>
            )}
          </div>
        </div>

        {project.description && (
          <p className="text-sm text-white/70 mb-3">{project.description}</p>
        )}

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
  );

  return (
    <section
      id="projects"
      className="py-20 bg-[rgb(18,27,27)] relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-[rgb(141,240,204)]/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-[rgb(141,240,204)]/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[rgb(141,240,204)]">
          Featured Projects
        </h2>
        <p className="text-foreground/80 mb-8 max-w-2xl">
          A selection of my recent work in building interactive web and mobile
          applications.
        </p>

        {/* Project Type Tabs */}
        <div className="flex space-x-4 mb-12 border-b border-[rgb(141,240,204)]/20 pb-2">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-t-lg transition-colors duration-200 ${
              activeTab === "all"
                ? "bg-[rgb(141,240,204)]/10 text-[rgb(141,240,204)]"
                : "text-white/70 hover:text-[rgb(141,240,204)]"
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setActiveTab("web")}
            className={`px-4 py-2 rounded-t-lg transition-colors duration-200 ${
              activeTab === "web"
                ? "bg-[rgb(141,240,204)]/10 text-[rgb(141,240,204)]"
                : "text-white/70 hover:text-[rgb(141,240,204)]"
            }`}
          >
            Web Applications
          </button>
          <button
            onClick={() => setActiveTab("mobile")}
            className={`px-4 py-2 rounded-t-lg transition-colors duration-200 ${
              activeTab === "mobile"
                ? "bg-[rgb(141,240,204)]/10 text-[rgb(141,240,204)]"
                : "text-white/70 hover:text-[rgb(141,240,204)]"
            }`}
          >
            Mobile Applications
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
