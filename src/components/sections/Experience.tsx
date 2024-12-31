import { Card } from "@/components/ui/card";

export const Experience = () => {
  const experiences = [
    {
      company: "Solutions UIUX",
      position: "Junior Software Engineer Apprentice",
      period: "2024–Present",
      description: "Built scalable mobile applications using React Native for clients, focusing on usability and performance.",
    },
    {
      company: "ADP India",
      position: "Software Engineer Intern",
      period: "2020–2021",
      description: "Designed and developed data pipelines and automated reporting systems using Python.",
    },
    {
      company: "TCS ION",
      position: "Artificial Intelligence Intern",
      period: "2019–2020",
      description: "Implemented computer vision techniques for an automated image processing system.",
    },
  ];

  return (
    <section className="py-32" id="experience">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary font-playfair">Experience</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="p-6 bg-black/50 backdrop-blur-sm border-white/10 card-hover"
            >
              <h3 className="text-xl font-bold mb-2">{exp.company}</h3>
              <p className="text-primary mb-2">{exp.position}</p>
              <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
              <p className="text-sm leading-relaxed">{exp.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
