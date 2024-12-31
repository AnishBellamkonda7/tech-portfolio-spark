import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export const Contact = () => {
  const contactInfo = {
    email: "anishbellamkonda01@gmail.com",
    phone: "+1 (510) 988-3992",
    linkedin: "https://www.linkedin.com/in/anish-bellamkonda/",
    github: "https://github.com/AnishBellamkonda",
  };

  return (
    <section className="py-32" id="contact">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary font-playfair">Get In Touch</h2>
        <Card className="p-8 bg-black/50 backdrop-blur-sm border-white/10">
          <div className="grid gap-6 md:grid-cols-2">
            <Button
              variant="outline"
              className="bg-white/10 hover:bg-white/20"
              onClick={() => window.location.href = `mailto:${contactInfo.email}`}
            >
              <Mail className="mr-2" /> {contactInfo.email}
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 hover:bg-white/20"
              onClick={() => window.location.href = `tel:${contactInfo.phone}`}
            >
              <Phone className="mr-2" /> {contactInfo.phone}
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 hover:bg-white/20"
              onClick={() => window.open(contactInfo.linkedin, "_blank")}
            >
              <Linkedin className="mr-2" /> LinkedIn
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 hover:bg-white/20"
              onClick={() => window.open(contactInfo.github, "_blank")}
            >
              <Github className="mr-2" /> GitHub
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};
