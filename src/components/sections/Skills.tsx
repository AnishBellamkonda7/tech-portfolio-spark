import { Code, Monitor, Server, Cloud, Database, Brain, Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "TypeScript", "C++"],
      icon: <Code className="w-8 h-8 text-primary" />
    },
    {
      title: "Frontend Technologies",
      skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
      icon: <Monitor className="w-8 h-8 text-primary" />
    },
    {
      title: "Backend Technologies",
      skills: ["Node.js", "Express.js", "Spring Boot", "Django"],
      icon: <Server className="w-8 h-8 text-primary" />
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Git"],
      icon: <Cloud className="w-8 h-8 text-primary" />
    },
    {
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
      icon: <Database className="w-8 h-8 text-primary" />
    },
    {
      title: "AI & ML",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI"],
      icon: <Brain className="w-8 h-8 text-primary" />
    }
  ];

  return (
    <section className="py-32 mt-16" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-primary font-playfair text-center">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-8 bg-black/50 backdrop-blur-sm border-white/10 hover:border-primary/50 transition-all duration-300 card-hover">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-white">{category.title}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};