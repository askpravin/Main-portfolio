import React from "react";
import { Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-[rgb(18,27,27)] relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-0 w-72 h-72 rounded-full bg-[rgb(141,240,204)]/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-72 h-72 rounded-full bg-[rgb(141,240,204)]/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[rgb(141,240,204)]">
          Get In Touch
        </h2>
        <p className="text-foreground/80 mb-12 max-w-2xl">
          Interested in working together? Feel free to reach out for
          collaborations or just a friendly hello.
        </p>

        <div className="max-w-3xl mx-auto glass rounded-xl p-8 md:p-10 flex flex-col items-center">
          <Mail className="w-16 h-16 text-[rgb(141,240,204)] mb-6" />

          <h3 className="text-2xl font-semibold mb-3 text-white">
            Drop me a line
          </h3>
          <p className="text-foreground/80 mb-8 text-center max-w-lg">
            The best way to reach me is through email. I'll get back to you as
            soon as possible.
          </p>

          <a
            href="mailto:askpravinjadhav@gmail.com"
            className="text-xl font-medium text-[rgb(141,240,204)] hover:underline mb-10"
          >
            askpravinjadhav@gmail.com
          </a>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="bg-[rgb(141,240,204)] text-[rgb(18,27,27)] hover:bg-[rgb(141,240,204)]/90 px-8"
              onClick={() => window.open("/resume.pdf", "_blank")}
            >
              <FileText className="mr-2 h-4 w-4" />
              Download Resume
            </Button>

            <Button
              variant="outline"
              className="border-[rgb(141,240,204)]/20 text-[rgb(141,240,204)] hover:bg-[rgb(141,240,204)]/10 hover:text-white px-8"
              onClick={() =>
                (window.location.href = "mailto:askpravinjadhav@gmail.com")
              }
            >
              <Mail className="mr-2 h-4 w-4" />
              Email Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
