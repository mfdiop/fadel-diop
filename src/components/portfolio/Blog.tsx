import { Calendar, Clock, ArrowUpRight } from "lucide-react";

const blogPosts = [
  { title: "From Raw Reads to Population Insights: A Practical WGS Workflow for Malaria Parasites", excerpt: "A walkthrough of the key steps in processing whole-genome sequencing data from Plasmodium falciparum field samples — from quality control and alignment to variant calling and population-level statistics.", date: "Coming soon", readTime: "~12 min read", category: "Genomics", slug: "pf-wgs-workflow" },
  { title: "Detecting Antimalarial Drug Resistance with Machine Learning", excerpt: "How ML classifiers trained on genomic markers can help predict drug resistance phenotypes, and what lessons I learned building such a model for P. falciparum resistance surveillance in West Africa.", date: "Coming soon", readTime: "~10 min read", category: "Machine Learning", slug: "ml-amr-resistance" },
  { title: "Building Reproducible Bioinformatics Pipelines with Nextflow", excerpt: "Best practices for writing scalable, portable, and reproducible genomic analysis workflows using Nextflow — from local testing to HPC cluster deployment.", date: "Coming soon", readTime: "~8 min read", category: "Workflows", slug: "nextflow-best-practices" },
  { title: "Interactive Data Visualisation for Malaria Genomic Surveillance", excerpt: "How to build R Shiny dashboards that allow epidemiologists and public health teams to explore complex population genetic data without needing to write code.", date: "Coming soon", readTime: "~7 min read", category: "Visualisation", slug: "shiny-genomic-dashboards" },
];

export function Blog() {
  return (
    <section id="blog" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-3">Thoughts & Articles</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Latest <span className="text-gradient">Blog Posts</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="glass rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2 py-1 text-xs font-mono bg-primary/10 text-primary rounded">{post.category}</span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />{post.date}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />{post.readTime}
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
              <a href={`/blog/${post.slug}`} className="flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all">
                Read More <ArrowUpRight className="w-4 h-4" />
              </a>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">Posts coming soon. In the meantime, check my research on Google Scholar.</p>
        </div>
      </div>
    </section>
  );
}
