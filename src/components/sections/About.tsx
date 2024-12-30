import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section className="py-32 mt-16" id="about">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-primary font-playfair text-center">About Me</h2>
        <Card className="p-8 bg-black/50 backdrop-blur-sm border-white/10 hover:border-primary/50 transition-all duration-300 card-hover">
          <p className="text-lg leading-relaxed text-gray-300">
            I am a highly motivated software developer with a Master's degree in Computer Science from
            California State University, East Bay. My passion lies in building scalable applications
            and solving complex real-world problems through innovative technology solutions. With expertise
            in Python, Java, React, and AWS, I bring both creative and technical skills to every project.
            I thrive in collaborative environments and am always eager to learn and adapt to new technologies.
          </p>
        </Card>
      </div>
    </section>
  );
};