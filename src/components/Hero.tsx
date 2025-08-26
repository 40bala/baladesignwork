import { Button } from "@/components/ui/button";
import balaProfileReal from "@/assets/bala-profile-real.png";
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="min-h-screen hero-gradient relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-accent/70 rounded-full animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-accent font-medium text-lg">Hello, I'm</p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Bala P<span className="text-accent">.</span>
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white/90">
                  UI/UX Designer
                </h2>
              </div>
              
              <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
                Passionate about creating intuitive, user-centered digital experiences that combine 
                creativity with functionality. I transform complex problems into simple, elegant design solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
                <Button size="lg" className="accent-gradient hover:shadow-accent text-lg px-8 py-6 transition-spring hover-lift" onClick={() => scrollToSection('portfolio')}>
                  View Portfolio
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-primary text-lg px-8 py-6 transition-spring" onClick={() => scrollToSection('contact')}>
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex-shrink-0 mx-0 my-0 px-0 py-0">
            <div className="relative my-[50px] mx-[50px] px-[70px] py-[8px]">
              <div className="w-60 h-80 lg:max-w-80 lg:w-7 w-7/12 w-72 rounded-br-full max-w-72 w-72 max-w-7xl rounded-full ">
                <img src={balaProfileReal} alt="Bala P - UI/UX Designer" className="w-full h-full object-cover" />
              </div>
              {/* Larger decorative frame */}
              <div className="absolute -inset-12 border-4 border-accent/50 animate-pulse rounded-lg px-0 my-0 mx-[61px]"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;