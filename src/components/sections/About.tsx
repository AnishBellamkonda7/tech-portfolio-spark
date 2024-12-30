import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section className="bg-muted py-32 mt-16" id="about">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">About Me</h2>
        <Card className="p-8 bg-black/50 backdrop-blur-sm border-white/10">
          <p className="text-lg leading-relaxed">
            I am a highly motivated software developer with a Master's degree in Computer Science from
            California State University, East Bay, and a passion for building scalable applications
            and solving real-world problems. With expertise in Python, Java, React, and AWS, I bring
            creative and technical skills to the table.
          </p>
        </Card>
      </div>
    </section>
  );
};