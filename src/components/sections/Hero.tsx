import { useEffect, useState } from "react";
import { Github, Linkedin, FileText } from "lucide-react";
import { Button } from "../ui/button";

export const Hero = () => {
  const [typewriterText, setTypewriterText] = useState("");
  const texts = [
    "Software Developer",
    "AI Enthusiast",
    "Full-Stack Developer"
  ];

  useEffect(() => {
    let currentIndex = 0;
    let currentText = "";
    let isDeleting = false;

    const typeWriter = () => {
      const fullText = texts[currentIndex];
      
      if (isDeleting) {
        currentText = fullText.substring(0, currentText.length - 1);
      } else {
        currentText = fullText.substring(0, currentText.length + 1);
      }

      setTypewriterText(currentText);

      let typeSpeed = isDeleting ? 100 : 200;

      if (!isDeleting && currentText === fullText) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && currentText === "") {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % texts.length;
      }

      setTimeout(typeWriter, typeSpeed);
    };

    typeWriter();
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative py-32" id="home">
      <div className="text-center space-y-16 animate-fade-up relative z-10">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-up">
            Hi, I'm Anish Bellamkonda
          </h1>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-20 blur-lg"></div>
            <p className="text-xl md:text-2xl relative">
              A Software Developer passionate about solving real-world problems through technology.
            </p>
          </div>
        </div>
        
        <div className="h-8 mb-8">
          <span className="text-xl md:text-2xl font-medium">{typewriterText}</span>
        </div>
        
        <div className="flex gap-4 justify-center animate-fade-up delay-200">
          <Button
            variant="outline"
            className="bg-white/10 hover:bg-white/20 text-white border-white/20"
            onClick={() => window.open("https://github.com/AnishBellamkonda", "_blank")}
          >
            <Github className="mr-2" /> GitHub
          </Button>
          <Button
            variant="outline"
            className="bg-white/10 hover:bg-white/20 text-white border-white/20"
            onClick={() => window.open("https://www.linkedin.com/in/anish-bellamkonda/", "_blank")}
          >
            <Linkedin className="mr-2" /> LinkedIn
          </Button>
          <Button
            variant="outline"
            className="bg-white/10 hover:bg-white/20 text-white border-white/20"
            onClick={() => window.open("#", "_blank")}
          >
            <FileText className="mr-2" /> Resume
          </Button>
        </div>
      </div>
    </section>
  );
};