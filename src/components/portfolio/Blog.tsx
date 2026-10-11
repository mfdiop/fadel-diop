import { ArrowUpRight, PenLine } from "lucide-react";

const upcomingTopics = [
  { category: "Genomics", title: "A practical WGS workflow for Plasmodium falciparum" },
  { category: "Machine Learning", title: "Predicting antimalarial drug resistance with ML" },
  { category: "Workflows", title: "Reproducible bioinformatics pipelines with Nextflow" },
  { category: "Visualisation", title: "R Shiny dashboards for malaria genomic surveillance" },
];

export function Blog() {
  return (
    <section id="blog" className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary font-mono text-sm mb-3">Thoughts & Articles</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Blog <span className="text-gradient">Coming Soon</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-12">
          I'm working on a series of articles covering bioinformatics workflows, genomic data analysis,
          and reproducible science. Topics planned include:
        </p>

        <ul className="grid sm:grid-cols-2 gap-4 text-left mb-12">
          {upcomingTopics.map((t) => (
            <li key={t.title} className="glass rounded-xl px-5 py-4 flex items-start gap-3">
              <span className="mt-0.5 shrink-0 px-2 py-0.5 text-xs font-mono bg-primary/10 text-primary rounded">
                {t.category}
              </span>
              <span className="text-sm text-muted-foreground leading-snug">{t.title}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <PenLine className="w-4 h-4 text-primary" />
            <span>Articles will be published here once available.</span>
          </div>
          <a
            href="https://scholar.google.com/citations?user=vxpoSQIAAAAJ&hl=fr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all font-medium"
          >
            See my publications instead <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
