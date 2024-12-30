import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, FileText, Mail, Phone } from "lucide-react";
import emailjs from '@emailjs/browser';

const Index = () => {
  const [typewriterText, setTypewriterText] = useState("");
  const texts = [
    "Software Developer",
    "AI Enthusiast",
    "Cloud Practitioner",
    "Full-Stack Developer"
  ];
  const { toast } = useToast();

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form,
        'YOUR_PUBLIC_KEY'
      );
      
      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center gradient-bg text-white section-padding">
        <div className="text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm Anish Bellamkonda
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            A Software Developer passionate about solving real-world problems through technology.
          </p>
          <div className="h-8 mb-8">
            <span className="text-xl md:text-2xl font-medium">{typewriterText}</span>
          </div>
          <div className="flex gap-4 justify-center">
            <Button
              variant="outline"
              className="bg-white/10 hover:bg-white/20"
              onClick={() => window.open("https://github.com/AnishBellamkonda", "_blank")}
            >
              <Github className="mr-2" /> GitHub
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 hover:bg-white/20"
              onClick={() => window.open("https://www.linkedin.com/in/anish-bellamkonda/", "_blank")}
            >
              <Linkedin className="mr-2" /> LinkedIn
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 hover:bg-white/20"
              onClick={() => window.open("#", "_blank")}
            >
              <FileText className="mr-2" /> Resume
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-muted section-padding" id="about">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
          <p className="text-lg mb-8">
            I am a highly motivated software developer with a Master's degree in Computer Science from
            California State University, East Bay, and a passion for building scalable applications
            and solving real-world problems. With expertise in Python, Java, React, and AWS, I bring
            creative and technical skills to the table.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding" id="education">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Education</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <Card className="p-6 card-hover">
            <h3 className="text-xl font-bold mb-2">California State University, East Bay</h3>
            <p className="text-muted-foreground">Master of Science in Computer Science</p>
            <p className="text-primary">GPA: 3.85</p>
            <p>Graduated May 2024</p>
          </Card>
          <Card className="p-6 card-hover">
            <h3 className="text-xl font-bold mb-2">Sreenidhi Institute of Science and Technology</h3>
            <p className="text-muted-foreground">Bachelor of Technology in Computer Science and Engineering</p>
            <p>Graduated May 2021</p>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-muted section-padding" id="experience">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="max-w-4xl mx-auto grid gap-8">
          <Card className="p-6 card-hover">
            <h3 className="text-xl font-bold mb-2">Solutions UIUX</h3>
            <p className="text-primary mb-2">Junior Software Engineer Apprentice (2024–Present)</p>
            <p>Built scalable mobile applications using React Native for clients, focusing on usability and performance.</p>
          </Card>
          <Card className="p-6 card-hover">
            <h3 className="text-xl font-bold mb-2">ADP India</h3>
            <p className="text-primary mb-2">Software Engineer Intern (2020–2021)</p>
            <p>Designed and developed data pipelines and automated reporting systems using Python.</p>
          </Card>
          <Card className="p-6 card-hover">
            <h3 className="text-xl font-bold mb-2">TCS ION</h3>
            <p className="text-primary mb-2">Artificial Intelligence Intern (2019–2020)</p>
            <p>Implemented computer vision techniques for an automated image processing system.</p>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding" id="projects">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6 card-hover">
            <h3 className="text-xl font-bold mb-2">Plant Disease Classification</h3>
            <p className="mb-4">Built a machine learning model using image processing techniques to identify plant diseases.</p>
            <Button
              variant="outline"
              onClick={() => window.open("#", "_blank")}
              className="w-full"
            >
              <Github className="mr-2" /> View on GitHub
            </Button>
          </Card>
          <Card className="p-6 card-hover">
            <h3 className="text-xl font-bold mb-2">E-Commerce Platform</h3>
            <p className="mb-4">Developed a scalable e-commerce platform with React.js and Node.js.</p>
            <Button
              variant="outline"
              onClick={() => window.open("#", "_blank")}
              className="w-full"
            >
              <Github className="mr-2" /> View on GitHub
            </Button>
          </Card>
          <Card className="p-6 card-hover">
            <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
            <p className="mb-4">Designed a responsive portfolio website using React.js.</p>
            <Button
              variant="outline"
              onClick={() => window.open("#", "_blank")}
              className="w-full"
            >
              <Github className="mr-2" /> View on GitHub
            </Button>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-muted section-padding" id="skills">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6 card-hover">
            <h3 className="text-xl font-bold mb-4">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              {["Python", "Java", "C++", "JavaScript", "TypeScript"].map((skill) => (
                <span key={skill} className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </Card>
          <Card className="p-6 card-hover">
            <h3 className="text-xl font-bold mb-4">Frontend Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "HTML", "CSS", "Expo", "Tailwind CSS"].map((skill) => (
                <span key={skill} className="bg-secondary/10 text-secondary px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </Card>
          <Card className="p-6 card-hover">
            <h3 className="text-xl font-bold mb-4">Backend Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {["Spring Boot", "Node.js"].map((skill) => (
                <span key={skill} className="bg-accent/10 text-accent px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding" id="contact">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <p className="flex items-center">
                <Mail className="mr-2" /> anishbellamkonda01@gmail.com
              </p>
              <p className="flex items-center">
                <Phone className="mr-2" /> +1 (510) 988-3992
              </p>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  onClick={() => window.open("https://www.linkedin.com/in/anish-bellamkonda/", "_blank")}
                >
                  <Linkedin className="mr-2" /> LinkedIn
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open("https://github.com/AnishBellamkonda", "_blank")}
                >
                  <Github className="mr-2" /> GitHub
                </Button>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input name="name" placeholder="Your Name" required />
              </div>
              <div>
                <Input name="email" type="email" placeholder="Your Email" required />
              </div>
              <div>
                <Textarea name="message" placeholder="Your Message" required className="min-h-[150px]" />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;