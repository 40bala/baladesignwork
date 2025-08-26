import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [{
    label: "About",
    href: "#about"
  }, {
    label: "Services",
    href: "#services"
  }, {
    label: "Portfolio",
    href: "#portfolio"
  }, {
    label: "Contact",
    href: "#contact"
  }];
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    element?.scrollIntoView({
      behavior: 'smooth'
    });
    setIsMobileMenuOpen(false);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMobileMenuOpen(false);
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-custom border-b border-border/50' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 px-0 mx-0 my-[20px] py-0">
          {/* Logo */}
          <button onClick={scrollToTop} className="flex items-center space-x-2 text-xl font-bold hover:opacity-80 transition-smooth">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className={isScrolled ? 'text-foreground' : 'text-white'}>
              Bala P
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => <button key={index} onClick={() => scrollToSection(item.href)} className={`font-medium hover:text-primary transition-smooth ${isScrolled ? 'text-foreground' : 'text-white/90'}`}>
                {item.label}
              </button>)}
            
            <Button size="sm" className="accent-gradient hover:shadow-accent transition-spring flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className={`md:hidden ${isScrolled ? 'text-foreground' : 'text-white'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-border/50 py-4">
            <div className="space-y-4">
              {navItems.map((item, index) => <button key={index} onClick={() => scrollToSection(item.href)} className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-primary/5 transition-smooth rounded">
                  {item.label}
                </button>)}
              <div className="px-4 pt-2">
                <Button size="sm" className="w-full accent-gradient hover:shadow-accent transition-spring flex items-center justify-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Resume</span>
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;