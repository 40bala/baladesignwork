import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  Linkedin, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  Loader2
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/lib/emailjs";

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await sendEmail(formData);
      
      if (result.success) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Send email error:', error);
      toast({
        title: "Failed to Send Message",
        description: "There was an error sending your message. Please try again or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "balarahul38@gmail.com",
      href: "mailto:balarahul38@gmail.com",
      color: "text-red-500"
    },
    {
      icon: Phone,
      label: "Phone", 
      value: "+91 9345245696",
      href: "tel:+919345245696",
      color: "text-green-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/bala-p-880526250",
      href: "https://linkedin.com/in/bala-p-880526250",
      color: "text-blue-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "#",
      color: "text-purple-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your project to life? Let's discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with passionate teams. 
                Whether you need a complete UI/UX overhaul or want to discuss a specific design challenge, 
                I'm here to help bring your vision to life.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="p-4 hover-lift shadow-custom border-0 group">
                  <a 
                    href={contact.href}
                    className="flex items-center space-x-3 text-left"
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <div className={`${contact.color} bg-current/10 p-2 rounded-lg`}>
                      <contact.icon className={`w-5 h-5 ${contact.color}`} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{contact.label}</p>
                      <p className="text-sm text-muted-foreground group-hover:text-primary transition-smooth">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            {/* Availability */}
            <Card className="p-6 bg-secondary/50 border-0">
              <div className="flex items-center space-x-3 mb-3">
                <Clock className="w-5 h-5 text-accent" />
                <h4 className="font-semibold text-foreground">Availability</h4>
              </div>
              <p className="text-muted-foreground text-sm">
                Currently available for new projects and consulting opportunities. 
                Typical response time: 24-48 hours.
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 shadow-custom border-0">
            <div className="flex items-center space-x-3 mb-6">
              <MessageCircle className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="transition-smooth focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="transition-smooth focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project inquiry, collaboration, etc."
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="transition-smooth focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project, timeline, and any specific requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  rows={5}
                  className="transition-smooth focus:border-primary resize-none"
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                disabled={isLoading}
                className="w-full accent-gradient hover:shadow-accent transition-spring flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
