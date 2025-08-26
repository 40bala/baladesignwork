import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Cryptocurrency Portfolio App",
      category: "Mobile App Design",
      description: "A clean, intuitive mobile application for managing cryptocurrency portfolios with real-time tracking, advanced analytics, and secure wallet integration.",
      image: "https://i.postimg.cc/7hfwLwfs/Funky-theme-crypto.png",
      tags: ["UI/UX Design", "Mobile App", "Fintech", "React Native"],
      challenges: "Creating a trustworthy interface for financial data while maintaining simplicity",
      solution: "Implemented clear visual hierarchy, secure authentication flows, and intuitive data visualization",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Sport Management Platform", 
      category: "Web Application",
      description: "Comprehensive dashboard system for athletes, coaches, and teams to manage training schedules, performance analytics, and team communication.",
      image: "https://i.postimg.cc/RZWNMgGd/Sports-management.png",
      tags: ["Dashboard Design", "Analytics", "Team Management", "React"],
      challenges: "Designing for multiple user roles with different data needs and permissions",
      solution: "Created role-based dashboards with customizable widgets and clear information architecture",
      gradient: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      title: "Medical AI Analysis Tool",
      category: "Healthcare Tech",
      description: "User interface and prototypes for AI-powered health analysis application helping medical professionals make data-driven decisions.",
      image: "https://i.postimg.cc/ydtjtCS4/black-medi.png",
      tags: ["Healthcare UX", "AI Interface", "Data Visualization", "Prototype"],
      challenges: "Presenting complex medical data in an accessible, actionable format",
      solution: "Developed clear data visualization patterns and streamlined workflows for medical professionals",
      gradient: "from-red-500 to-pink-600"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Featured projects showcasing my expertise in UI/UX design
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`overflow-hidden portfolio-item shadow-custom border-0 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } lg:flex`}
            >
              {/* Project Image */}
              <div className="lg:w-1/2 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20`}></div>
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 lg:h-full object-cover transition-smooth hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-primary hover:bg-white">
                    {project.category}
                  </Badge>
                </div>
              </div>

              {/* Project Content */}
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-3 text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                      <p className="text-sm text-muted-foreground">{project.challenges}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                      <p className="text-sm text-muted-foreground">{project.solution}</p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex}
                          variant="secondary"
                          className="bg-primary/10 text-primary hover:bg-primary/20"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Project Actions */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex items-center space-x-2 hover:bg-primary hover:text-white transition-smooth"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Case Study</span>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="flex items-center space-x-2 text-primary hover:bg-primary/10"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Code</span>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Projects CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="group hover:bg-primary hover:text-white transition-smooth"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-smooth" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
