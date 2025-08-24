import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-xl font-bold">Bala P</span>
          </div>
          <p className="text-white/80 mb-4">
            UI/UX Designer passionate about creating exceptional digital experiences
          </p>
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Bala P. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
