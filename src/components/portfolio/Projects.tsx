import { Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Pf Genomic Surveillance Pipeline",
    description: "A reproducible Nextflow/Snakemake pipeline for whole-genome sequencing analysis of Plasmodium falciparum. Covers quality control, variant calling, and population-level summary statistics to support malaria genomic surveillance across sub-Saharan Africa.",
    tags: ["Nextflow", "Snakemake", "Python", "Bash", "WGS"],
    liveUrl: "https://github.com/mfdiop",
    githubUrl: "https://github.com/mfdiop",
    featured: true,
  },
  {
    title: "AMR Resistance Prediction Tool",
    description: "Machine learning models trained on P. falciparum genomic data to predict antimalarial drug resistance markers. Integrates molecular surveillance outputs with scikit-learn classifiers and interactive R Shiny dashboards for field-ready reporting.",
    tags: ["Python", "Scikit-learn", "R", "Shiny", "TensorFlow"],
    liveUrl: "https://github.com/mfdiop",
    githubUrl: "https://github.com/mfdiop",
    featured: true,
  },
  {
    title: "Malaria Transmission Dynamics Explorer",
    description: "Interactive R Shiny dashboard for visualising spatiotemporal patterns in malaria parasite populations. Combines allele frequency data, genetic differentiation metrics (FST), and geographic mapping to support public health decision-making.",
    tags: ["R", "Shiny", "Tidyverse", "ggplot2", "Leaflet"],
    liveUrl: "https://github.com/mfdiop",
    githubUrl: "https://github.com/mfdiop",
    featured: true,
  },
  {
    title: "Vaccine Candidate Diversity Analyser",
    description: "Computational tool for assessing balancing selection and genetic diversity in P. falciparum vaccine candidate genes across African populations using population genetics statistics (Tajima's D, dN/dS).",
    tags: ["R", "Python", "PopGen", "Bioconductor"],
    liveUrl: "https://github.com/mfdiop",
    githubUrl: "https://github.com/mfdiop",
    featured: false,
  },
  {
    title: "Anopheles Genetic Diversity Study",
    description: "Population genomics analysis of Anopheles gambiae s.l. across sub-Saharan Africa, investigating reduced genetic diversity in fertility and vector competency genes relevant to vector control strategies.",
    tags: ["R", "Bash", "PLINK", "VCFtools"],
    liveUrl: "https://github.com/mfdiop",
    githubUrl: "https://github.com/mfdiop",
    featured: false,
  },
  {
    title: "Open Pf Epidemiology Ecosystem",
    description: "Contributor to a collaborative open-source analysis ecosystem for Plasmodium genomic epidemiology, providing standardised workflows and reproducible analysis modules used by the malaria genomics community.",
    tags: ["Python", "Nextflow", "R", "Open Source"],
    liveUrl: "https://github.com/mfdiop",
    githubUrl: "https://github.com/mfdiop",
    featured: false,
  },
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
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                    <Github className="w-4 h-4" />View on GitHub
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
          <a href="https://github.com/mfdiop" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
              View All on GitHub<ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
