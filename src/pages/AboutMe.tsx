import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Code, PenTool, BookOpen, Github } from "lucide-react";

export default function AboutMe() {
  const navigate = useNavigate();

  const handleNavigation = (section: string) => {
    if (section === "About") {
      navigate("/about-me");
    } else {
      navigate(`/#${section.toLowerCase()}`);
    }
  };

  const skills = [
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "TypeScript", level: 88 },
    { name: "AWS", level: 80 },
    { name: "UI/UX Design", level: 75 },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto py-12 px-4 space-y-16">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="overflow-hidden border-[rgb(141,240,204)]/20 bg-background/80 backdrop-blur-sm">
              <CardContent className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-10 items-center">
                  <div className="w-full md:w-1/2">
                    <motion.h1
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="text-4xl font-bold mb-6 bg-gradient-to-r from-[rgb(141,240,204)] to-blue-400 bg-clip-text text-transparent"
                    >
                      My Childhood Dream
                    </motion.h1>
                    <div className="prose prose-invert max-w-none">
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-lg text-muted-foreground leading-relaxed mb-6"
                      >
                        When I was young, I wrote in my slam book that I wanted
                        to be a "Comp Engg" to make complete software. That
                        childhood dream has evolved into a passionate career in
                        software engineering.
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="text-lg text-muted-foreground leading-relaxed"
                      >
                        Today, I'm living that dream as a software engineer with
                        5+ years of experience building web applications and
                        distributed systems. I specialize in creating scalable
                        solutions using modern technologies like React, Node.js,
                        and AWS.
                      </motion.p>
                    </div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="w-full md:w-1/2"
                  >
                    <div className="rounded-lg overflow-hidden shadow-2xl shadow-[rgb(141,240,204)]/10 transform transition-transform hover:scale-[1.02] duration-300">
                      <img
                        src="/childhood-dream.png"
                        alt="My childhood slam book showing my dream to become a Computer Engineer"
                        className="w-full h-auto"
                      />
                      <div className="bg-[rgb(141,240,204)]/10 p-4">
                        <p className="text-sm text-muted-foreground italic">
                          My slam book entry from childhood - dreaming of
                          becoming a Computer Engineer
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="overflow-hidden border-[rgb(141,240,204)]/20">
              <CardContent className="p-8 md:p-10">
                <h2 className="text-3xl font-semibold mb-8 text-center">
                  Technical Skills
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-[rgb(141,240,204)] to-blue-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Interests Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="overflow-hidden border-[rgb(141,240,204)]/20">
              <CardContent className="p-8 md:p-10">
                <h2 className="text-3xl font-semibold mb-8 text-center">
                  What I Do
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      icon: <Code size={28} />,
                      title: "Development",
                      desc: "Building modern web applications with React, TypeScript and Node.js",
                    },
                    {
                      icon: <PenTool size={28} />,
                      title: "Design",
                      desc: "Creating intuitive user interfaces with a focus on user experience",
                    },
                    {
                      icon: <BookOpen size={28} />,
                      title: "Writing",
                      desc: "Sharing knowledge through technical articles on web development",
                    },
                    {
                      icon: <Github size={28} />,
                      title: "Open Source",
                      desc: "Contributing to and maintaining open source projects",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-[rgb(141,240,204)]/5 p-6 rounded-lg border border-[rgb(141,240,204)]/10 hover:bg-[rgb(141,240,204)]/10 transition-colors group"
                    >
                      <div className="text-[rgb(141,240,204)] mb-4">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="overflow-hidden bg-gradient-to-br from-[rgb(141,240,204)]/20 to-blue-900/20 border-[rgb(141,240,204)]/30">
              <CardContent className="p-8 md:p-10 text-center">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  Want to work together?
                </h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-lg mx-auto">
                  I'm always open to discussing new projects, creative ideas or
                  opportunities to be part of your vision.
                </p>
                <button
                  onClick={() => navigate("/contact")}
                  className="px-6 py-3 bg-[rgb(141,240,204)] text-black font-medium rounded-md flex items-center gap-2 mx-auto hover:bg-[rgb(141,240,204)]/90 transition-colors"
                >
                  Get in touch <ArrowRight size={18} />
                </button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
