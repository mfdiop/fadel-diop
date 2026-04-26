import { ArrowDown, Github, Linkedin, Mail, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Github, href: "https://github.com/mfdiop", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/fadel-diop/", label: "LinkedIn" },
  { icon: GraduationCap, href: "https://scholar.google.com/citations?user=vxpoSQIAAAAJ&hl=fr", label: "Google Scholar" },
  { icon: Mail, href: "mailto:diop.mfadel@gmail.com", label: "Email" },
];

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "4s" }} />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <p className="text-primary font-mono text-sm md:text-base mb-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Hello, I'm
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <span className="text-foreground">Mouhamadou Fadel </span>
          <span className="text-gradient">DIOP</span>
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Bioinformatician | Data Scientist | Researcher
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          Bridging Biological Insights with Data Intelligence. Specializing in large-scale genomic analysis, transmission dynamics of infectious diseases, predictive modeling, and interactive data visualization to solve complex biological challenges.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 opacity-0 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8" onClick={() => scrollToSection("research")}>
            View Research
          </Button>
          <Button variant="outline" size="lg" className="border-border hover:border-primary hover:text-primary px-8" onClick={() => scrollToSection("contact")}>
            Get In Touch
          </Button>
        </div>
        <div className="flex items-center justify-center gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
        <button onClick={() => scrollToSection("about")} className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs font-mono">Scroll</span>
          <ArrowDown className="w-5 h-5 animate-float" />
        </button>
      </div>
    </section>
  );
}
