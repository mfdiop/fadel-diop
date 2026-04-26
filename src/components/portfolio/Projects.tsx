import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  { title: "E-Commerce Platform", description: "A full-featured online store with cart functionality, payment processing, and inventory management. Built with modern technologies for optimal performance.", tags: ["React", "Node.js", "PostgreSQL", "Stripe"], liveUrl: "https://example.com", githubUrl: "https://github.com", featured: true },
  { title: "Task Management App", description: "Collaborative project management tool with real-time updates, team workspaces, and automated workflows.", tags: ["Next.js", "TypeScript", "Prisma", "WebSocket"], liveUrl: "https://example.com", githubUrl: "https://github.com", featured: true },
  { title: "AI Content Generator", description: "SaaS application leveraging AI to generate marketing copy, blog posts, and social media content.", tags: ["Python", "OpenAI", "FastAPI", "React"], liveUrl: "https://example.com", githubUrl: "https://github.com", featured: true },
  { title: "Portfolio Dashboard", description: "Investment tracking dashboard with real-time market data and performance analytics.", tags: ["Vue.js", "D3.js", "Firebase"], liveUrl: "https://example.com", githubUrl: "https://github.com", featured: false },
  { title: "Social Media Analytics", description: "Analytics platform for tracking social media engagement and growth metrics.", tags: ["React", "GraphQL", "MongoDB"], liveUrl: "https://example.com", githubUrl: "https://github.com", featured: false },
  { title: "Weather App", description: "Beautiful weather application with location-based forecasts and interactive maps.", tags: ["React Native", "OpenWeather API"], liveUrl: "https://example.com", githubUrl: "https://github.com", featured: false },
];

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-3">My work</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </div>

        {/* Featured Projects */}
        <div className="space-y-20 mb-20">
          {featuredProjects.map((project, index) => (
            <div key={project.title} className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center`}>
              <div className={`relative group ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative aspect-video rounded-xl overflow-hidden glass">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-muted-foreground font-mono text-sm">{project.title} Preview</span>
                  </div>
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-foreground text-background hover:scale-110 transition-transform">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-mono bg-secondary rounded-full border border-border">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                    <ExternalLink className="w-4 h-4" />Live Demo
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                    <Github className="w-4 h-4" />Source Code
                  </a>
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
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Github className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex gap-2">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h4>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs font-mono text-muted-foreground">{tag}</span>
                  ))}
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
