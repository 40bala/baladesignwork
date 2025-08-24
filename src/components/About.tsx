import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Heart, Users, Lightbulb, Target } from "lucide-react";

const About = () => {
  const skills = [
    { category: "Design Tools", items: ["Figma", "Adobe XD", "Photoshop", "Illustrator"] },
    { category: "Prototyping", items: ["InVision", "Framer", "Principle", "Marvel"] },
    { category: "Research", items: ["User Testing", "Analytics", "Wireframing", "Journey Mapping"] }
  ];

  const principles = [
    {
      icon: Heart,
      title: "Empathy-Driven",
      description: "Understanding user needs and pain points to create meaningful solutions"
    },
    {
      icon: Users,
      title: "User-Centered",
      description: "Placing users at the heart of every design decision and process"
    },
    {
      icon: Lightbulb,
      title: "Simple & Functional",
      description: "Creating clean, intuitive interfaces that prioritize usability"
    },
    {
      icon: Target,
      title: "Goal-Focused",
      description: "Aligning design solutions with business objectives and user goals"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate designer with a strong foundation in technology and user experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Personal Bio & Philosophy */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">My Design Philosophy</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I believe great design is invisible—it solves problems so elegantly that users never 
                have to think twice. My approach combines analytical thinking with creative problem-solving, 
                ensuring every design decision is backed by user research and business goals.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a background in Computer Science and AI/ML, I bring a unique technical perspective 
                to design challenges, enabling me to create solutions that are not only beautiful but 
                also technically feasible and scalable.
              </p>
            </div>

            {/* Design Principles */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-foreground">Design Principles</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {principles.map((principle, index) => (
                  <Card key={index} className="p-4 skill-card border-0 shadow-custom">
                    <div className="flex items-start space-x-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <principle.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-sm mb-1">{principle.title}</h5>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Skills */}
          <div className="space-y-8">
            {/* Education */}
            <Card className="p-6 shadow-custom border-0">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-primary/20 pl-4">
                  <h4 className="font-semibold text-foreground">
                    B.E. Computer Science & Engineering (AI & ML)
                  </h4>
                  <p className="text-muted-foreground">Annamalai University</p>
                  <p className="text-sm text-muted-foreground">2023</p>
                </div>
                <div className="border-l-2 border-accent/40 pl-4">
                  <h4 className="font-semibold text-foreground flex items-center space-x-2">
                    <Award className="w-4 h-4 text-accent" />
                    <span>UI/UX Design Certification</span>
                  </h4>
                  <p className="text-muted-foreground">Hackwit</p>
                </div>
              </div>
            </Card>

            {/* Skills & Tools */}
            <Card className="p-6 shadow-custom border-0">
              <h3 className="text-xl font-semibold mb-6">Skills & Tools</h3>
              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-foreground mb-3">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex}
                          variant="secondary"
                          className="bg-primary/10 text-primary hover:bg-primary/20 transition-smooth"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;