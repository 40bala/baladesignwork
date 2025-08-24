import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Palette, 
  Code, 
  Zap, 
  TrendingUp, 
  Smartphone, 
  Monitor,
  Users,
  BarChart3
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive interfaces for web and mobile applications with focus on user experience and conversion optimization.",
      features: [
        "User Interface Design",
        "Wireframes & Prototypes", 
        "Design Systems",
        "Mobile-First Design"
      ],
      color: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      icon: Zap,
      title: "Prototyping & Interaction",
      description: "Creating interactive prototypes and testing user interactions to validate design concepts before development.",
      features: [
        "Interactive Prototypes",
        "Usability Testing",
        "User Journey Mapping",
        "Design Iteration"
      ],
      color: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      icon: TrendingUp,
      title: "Design Strategy & Consulting",
      description: "Providing strategic design insights and consulting to improve usability and align designs with business objectives.",
      features: [
        "Design Audits",
        "UX Strategy",
        "Business Alignment",
        "Growth Optimization"
      ],
      color: "bg-accent/10", 
      iconColor: "text-accent"
    }
  ];

  const workProcess = [
    {
      icon: Users,
      title: "Discovery & Research",
      description: "Understanding your users, business goals, and market requirements through comprehensive research."
    },
    {
      icon: Palette,
      title: "Design & Strategy", 
      description: "Creating user-centered designs and strategic solutions that align with your objectives."
    },
    {
      icon: BarChart3,
      title: "Test & Optimize",
      description: "Validating designs through testing and continuous optimization for better user experiences."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive design services to bring your digital vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="p-8 hover-lift shadow-custom border-0 group">
              <div className="space-y-6">
                {/* Icon & Title */}
                <div className="flex items-center space-x-4">
                  <div className={`${service.color} p-3 rounded-xl transition-smooth group-hover:scale-110`}>
                    <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Work Process */}
        <div className="bg-secondary/30 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-foreground">My Working Process</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to deliver exceptional results through collaboration and iteration
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {workProcess.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="bg-gradient-primary w-16 h-16 rounded-2xl mx-auto flex items-center justify-center group-hover:scale-110 transition-spring shadow-custom">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="accent-gradient hover:shadow-accent text-lg px-8 py-6 transition-spring"
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Let's Work Together
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;