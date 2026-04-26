Project: Mouhamadou Fadel DIOP — Bioinformatician Portfolio
Tech Stack

Framework: React 18 + TypeScript
Build tool: Vite
Styling: Tailwind CSS + custom CSS variables (dark theme)
Routing: react-router-dom
Icons: lucide-react
UI: shadcn/ui components (Button, Toaster, Sonner, Tooltip)
State: @tanstack/react-query

src/
├── main.tsx
├── App.tsx
├── index.css
├── lib/utils.ts
├── pages/
│   ├── Index.tsx
│   └── NotFound.tsx
├── components/
│   ├── ui/   (shadcn: button, toast, toaster, sonner, tooltip)
│   └── portfolio/
│       ├── index.ts
│       ├── Navigation.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Research.tsx
│       ├── Projects.tsx
│       ├── Blog.tsx
│       ├── CV.tsx
│       ├── Contact.tsx
│       └── Footer.tsx

src/index.css — Custom CSS Variables & Utilities

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 222 47% 5%;
    --foreground: 210 40% 98%;
    --card: 222 47% 7%;
    --card-foreground: 210 40% 98%;
    --popover: 222 47% 7%;
    --popover-foreground: 210 40% 98%;
    --primary: 168 100% 50%;        /* Cyan/teal #00ffcc */
    --primary-foreground: 222 47% 5%;
    --secondary: 222 47% 11%;
    --secondary-foreground: 210 40% 98%;
    --muted: 222 47% 11%;
    --muted-foreground: 215 20% 55%;
    --accent: 263 85% 65%;          /* Purple accent */
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62% 30%;
    --destructive-foreground: 210 40% 98%;
    --border: 222 47% 15%;
    --input: 222 47% 15%;
    --ring: 168 100% 50%;
    --radius: 0.75rem;
  }
}

@layer base {
  * { @apply border-border; }
  body {
    @apply bg-background text-foreground;
    font-feature-settings: "rlig" 1, "calt" 1;
  }
}

@layer utilities {
  .text-gradient {
    @apply bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent;
  }

  .glass {
    @apply bg-card/80 backdrop-blur-md border border-border;
  }

  .section-padding {
    @apply py-20 px-6;
  }

  /* Animations */
  .animate-fade-up {
    animation: fadeUp 0.6s ease forwards;
  }
  .animate-fade-in {
    animation: fadeIn 0.6s ease forwards;
  }
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  .animate-glow-pulse {
    animation: glowPulse 4s ease-in-out infinite;
  }
  .animate-scale-in {
    animation: scaleIn 0.3s ease forwards;
  }
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-8px); }
}
@keyframes glowPulse {
  0%, 100% { opacity: 0.6; }
  50%       { opacity: 1; }
}
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.95); }
  to   { opacity: 1; transform: scale(1); }
}

src/App.tsx

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

src/components/portfolio/Navigation.tsx
import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#research", label: "Research" },
  { href: "#projects", label: "Projects" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((link) => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) { setActiveSection(section); break; }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass py-3" : "py-6 bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
          className="font-mono text-xl font-bold text-primary hover:text-primary/80 transition-colors">
          {"<MFD />"}
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className={`relative text-sm font-medium transition-colors hover:text-primary ${activeSection === link.href.slice(1) ? "text-primary" : "text-muted-foreground"}`}>
              {link.label}
              {activeSection === link.href.slice(1) && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
              )}
            </a>
          ))}
          <Button variant="outline" size="sm"
            className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => handleNavClick("#cv")}>
            <Download className="w-4 h-4 mr-2" />Resume
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass mt-3 mx-6 rounded-xl p-6 animate-scale-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`text-lg font-medium transition-colors ${activeSection === link.href.slice(1) ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                {link.label}
              </a>
            ))}
            <Button variant="outline"
              className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground mt-2"
              onClick={() => handleNavClick("#cv")}>
              <Download className="w-4 h-4 mr-2" />Resume
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

src/components/portfolio/Hero.tsx
import { ArrowDown, Github, Linkedin, Mail, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: GraduationCap, href: "https://scholar.google.com", label: "Google Scholar" },
  { icon: Mail, href: "mailto:contact@mfdiop.dev", label: "Email" },
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
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
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
            <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label={social.label}>
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

src/components/portfolio/About.tsx
import { Dna, BarChart3, Brain, Database } from "lucide-react";

const skills = ["Python", "R", "Bash", "SQL", "Nextflow", "Snakemake", "Scikit-learn", "TensorFlow", "Pandas", "Shiny", "D3.js", "Git"];

const highlights = [
  { icon: Dna, title: "Genomic Analysis", description: "Large-scale sequencing data analysis and variant calling" },
  { icon: BarChart3, title: "Data Visualization", description: "Interactive dashboards and publication-ready figures" },
  { icon: Brain, title: "Predictive Modeling", description: "Machine learning for biological pattern discovery" },
  { icon: Database, title: "Big Data", description: "Processing and analyzing terabyte-scale datasets" },
];

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-3">Get to know me</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">About <span className="text-gradient">Me</span></h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo placeholder */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
              <div className="relative glass rounded-2xl p-2 h-full">
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                      <span className="text-4xl font-bold text-primary-foreground">MFD</span>
                    </div>
                    <p className="text-muted-foreground font-mono text-sm">// Your photo here</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-2">
                <p className="text-primary font-mono text-sm font-bold">PhD Researcher</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">I'm a bioinformatician and data scientist passionate about leveraging computational methods to solve complex biological challenges. My expertise lies at the intersection of genomics, statistics, and machine learning.</p>
            <p className="text-lg text-muted-foreground leading-relaxed">My research focuses on understanding the transmission dynamics of infectious diseases through large-scale genomic analysis. I develop computational pipelines and predictive models that help uncover patterns in pathogen evolution and spread.</p>
            <p className="text-lg text-muted-foreground leading-relaxed">I'm dedicated to making data accessible through interactive visualization tools, enabling researchers and public health professionals to explore and understand complex biological data intuitively.</p>
            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4">Tools & Technologies:</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 text-sm bg-secondary rounded-lg border border-border hover:border-primary hover:text-primary transition-colors">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Highlights grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {highlights.map((item, index) => (
            <div key={item.title} className="glass rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

src/components/portfolio/Research.tsx

import { FileText, ExternalLink, Users, Calendar, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Publication {
  title: string; authors: string; journal: string; year: number;
  doi: string; type: "journal" | "preprint" | "conference"; citations?: number;
}

const publications: Publication[] = [
  { title: "Genomic Surveillance of SARS-CoV-2 Variants in West Africa: Insights into Transmission Dynamics", authors: "Diop MF, et al.", journal: "Nature Communications", year: 2024, doi: "10.1038/example1", type: "journal", citations: 45 },
  { title: "Machine Learning Approaches for Predicting Antimicrobial Resistance from Genomic Data", authors: "Diop MF, et al.", journal: "PLOS Computational Biology", year: 2024, doi: "10.1371/example2", type: "journal", citations: 28 },
  { title: "Interactive Visualization of Pathogen Phylogenies for Public Health Decision Making", authors: "Diop MF, et al.", journal: "Bioinformatics", year: 2023, doi: "10.1093/example3", type: "journal", citations: 52 },
  { title: "A Scalable Pipeline for Whole Genome Sequencing Analysis of Bacterial Pathogens", authors: "Diop MF, et al.", journal: "bioRxiv", year: 2023, doi: "10.1101/example4", type: "preprint" },
  { title: "Transmission Dynamics of Malaria Parasites in Endemic Regions: A Genomic Epidemiology Study", authors: "Diop MF, et al.", journal: "The Lancet Infectious Diseases", year: 2023, doi: "10.1016/example5", type: "journal", citations: 89 },
  { title: "Deep Learning for Variant Calling in Low-Coverage Sequencing Data", authors: "Diop MF, et al.", journal: "Genome Research", year: 2022, doi: "10.1101/example6", type: "journal", citations: 67 },
];

const stats = [
  { label: "Publications", value: "20+", icon: FileText },
  { label: "Citations", value: "500+", icon: BookOpen },
  { label: "Collaborators", value: "50+", icon: Users },
];

export function Research() {
  const getTypeColor = (type: Publication["type"]) => {
    switch (type) {
      case "journal": return "bg-primary/10 text-primary";
      case "preprint": return "bg-accent/10 text-accent";
      case "conference": return "bg-orange-500/10 text-orange-500";
    }
  };
  const getTypeLabel = (type: Publication["type"]) => {
    switch (type) {
      case "journal": return "Journal Article";
      case "preprint": return "Preprint";
      case "conference": return "Conference";
    }
  };

  return (
    <section id="research" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-3">Scientific Contributions</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Research & <span className="text-gradient">Publications</span></h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">My research focuses on applying computational methods to understand infectious disease transmission and develop tools for genomic surveillance.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="glass rounded-xl p-6 text-center hover:border-primary/50 transition-all">
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold text-gradient">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Publications */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />Selected Publications
          </h3>
          {publications.map((pub, index) => (
            <article key={index} className="glass rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group">
              <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{pub.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{pub.authors}</p>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={`px-2 py-1 text-xs font-mono rounded ${getTypeColor(pub.type)}`}>{getTypeLabel(pub.type)}</span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1"><BookOpen className="w-4 h-4" />{pub.journal}</span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1"><Calendar className="w-4 h-4" />{pub.year}</span>
                    {pub.citations && <span className="text-sm text-primary font-mono">{pub.citations} citations</span>}
                  </div>
                </div>
                <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">
                  <ExternalLink className="w-4 h-4" />View Paper
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground" asChild>
            <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer">View All on Google Scholar<ExternalLink className="w-4 h-4 ml-2" /></a>
          </Button>
        </div>
      </div>
    </section>
  );
}

src/components/portfolio/Projects.tsx
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  { title: "E-Commerce Platform", description: "A full-featured online store with cart functionality, payment processing, and inventory management. Built with modern technologies for optimal performance.", image: "/placeholder-project-1.jpg", tags: ["React", "Node.js", "PostgreSQL", "Stripe"], liveUrl: "https://example.com", githubUrl: "https://github.com", featured: true },
  { title: "Task Management App", description: "Collaborative project management tool with real-time updates, team workspaces, and automated workflows.", image: "/placeholder-project-2.jpg", tags: ["Next.js", "TypeScript", "Prisma", "WebSocket"], liveUrl: "https://example.com", githubUrl: "https://github.com", featured: true },
  { title: "AI Content Generator", description: "SaaS application leveraging AI to generate marketing copy, blog posts, and social media content.", image: "/placeholder-project-3.jpg", tags: ["Python", "OpenAI", "FastAPI", "React"], liveUrl: "https://example.com", githubUrl: "https://github.com", featured: true },
  { title: "Portfolio Dashboard", description: "Investment tracking dashboard with real-time market data and performance analytics.", image: "/placeholder-project-4.jpg", tags: ["Vue.js", "D3.js", "Firebase"], liveUrl: "https://example.com", githubUrl: "https://github.com", featured: false },
  { title: "Social Media Analytics", description: "Analytics platform for tracking social media engagement and growth metrics.", image: "/placeholder-project-5.jpg", tags: ["React", "GraphQL", "MongoDB"], liveUrl: "https://example.com", githubUrl: "https://github.com", featured: false },
  { title: "Weather App", description: "Beautiful weather application with location-based forecasts and interactive maps.", image: "/placeholder-project-6.jpg", tags: ["React Native", "OpenWeather API"], liveUrl: "https://example.com", githubUrl: "https://github.com", featured: false },
];

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-3">My work</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Featured <span className="text-gradient">Projects</span></h2>
        </div>

        {/* Featured Projects */}
        <div className="space-y-20 mb-20">
          {featuredProjects.map((project, index) => (
            <div key={project.title} className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className={`relative group ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative aspect-video rounded-xl overflow-hidden glass">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-muted-foreground font-mono text-sm">{project.title} Preview</span>
                  </div>
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"><ExternalLink className="w-5 h-5" /></a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-foreground text-background hover:scale-110 transition-transform"><Github className="w-5 h-5" /></a>
                  </div>
                </div>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => <span key={tag} className="px-3 py-1 text-xs font-mono bg-secondary rounded-full border border-border">{tag}</span>)}
                </div>
                <div className="flex gap-4">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-primary transition-colors"><ExternalLink className="w-4 h-4" />Live Demo</a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-primary transition-colors"><Github className="w-4 h-4" />Source Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-xl font-semibold mb-8 text-center">Other Noteworthy Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div key={project.title} className="glass rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"><Github className="w-6 h-6 text-primary" /></div>
                  <div className="flex gap-2">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github className="w-5 h-5" /></a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><ArrowUpRight className="w-5 h-5" /></a>
                  </div>
                </div>
                <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h4>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => <span key={tag} className="text-xs font-mono text-muted-foreground">{tag}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
            View All Projects<ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}

src/components/portfolio/Blog.tsx

import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  { title: "Building Scalable React Applications with TypeScript", excerpt: "Learn best practices for structuring large React applications with TypeScript, including state management, testing strategies, and code organization.", date: "Jan 15, 2024", readTime: "8 min read", category: "React", slug: "building-scalable-react-apps" },
  { title: "The Complete Guide to API Design", excerpt: "A comprehensive guide to designing RESTful APIs that are easy to use, maintain, and scale. Covers authentication, versioning, and error handling.", date: "Jan 8, 2024", readTime: "12 min read", category: "Backend", slug: "complete-guide-api-design" },
  { title: "Modern CSS Techniques Every Developer Should Know", excerpt: "Explore modern CSS features like Container Queries, CSS Grid, and CSS Custom Properties that will transform your styling workflow.", date: "Dec 28, 2023", readTime: "6 min read", category: "CSS", slug: "modern-css-techniques" },
  { title: "Getting Started with Docker and Kubernetes", excerpt: "A beginner-friendly introduction to containerization and orchestration with Docker and Kubernetes for modern application deployment.", date: "Dec 15, 2023", readTime: "10 min read", category: "DevOps", slug: "docker-kubernetes-guide" },
];

export function Blog() {
  return (
    <section id="blog" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-3">Thoughts & Articles</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Latest <span className="text-gradient">Blog Posts</span></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="
