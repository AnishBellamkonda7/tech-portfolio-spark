import { Card } from "@/components/ui/card";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "Plant Disease Classification",
      description: "Built a machine learning model using image processing techniques to identify plant diseases.",
      github: "https://github.com/AnishBellamkonda/plant-disease-classification",
    },
    {
      title: "E-Commerce Platform",
      description: "Developed a scalable e-commerce platform with React.js and Node.js.",
      github: "https://github.com/AnishBellamkonda/ecommerce-platform",
    },
    {
      title: "Portfolio Website",
      description: "Designed a responsive portfolio website using React.js.",
      github: "https://github.com/AnishBellamkonda/portfolio",
    },
  ];

  return (
    <section className="py-32" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary font-playfair">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-6 bg-black/50 backdrop-blur-sm border-white/10 card-hover"
            >
              <h3 className="text-xl font-bold mb-4">{project.title}</h3>
              <p className="text-sm leading-relaxed mb-6">{project.description}</p>
              <Button
                variant="outline"
                className="w-full bg-white/10 hover:bg-white/20"
                onClick={() => window.open(project.github, "_blank")}
              >
                <Github className="mr-2" /> View on GitHub
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
