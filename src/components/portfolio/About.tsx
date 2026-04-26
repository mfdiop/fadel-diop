import { Dna, BarChart3, Brain, Database } from "lucide-react";

const skills = ["R", "Bash", "Python", "Rmarkdown", "Tidyverse", "SQL", "Nextflow", "Snakemake", "Scikit-learn", "TensorFlow", "Pandas", "Shiny", "Git", "GitHub"];

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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            About <span className="text-gradient">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo placeholder */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
              <div className="relative glass rounded-2xl p-2 h-full">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <img src="/images/photo_ID.png" alt="Mouhamadou Fadel DIOP" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-2">
                <p className="text-primary font-mono text-sm font-bold">PhD Researcher</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a bioinformatician and data scientist passionate about leveraging computational methods to solve complex biological challenges. My expertise lies at the intersection of genomics, statistics, and machine learning.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My research focuses on understanding the transmission dynamics of infectious diseases through large-scale genomic analysis. I develop computational pipelines and predictive models that help uncover patterns in pathogen evolution and spread.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm dedicated to making data accessible through interactive visualization tools, enabling researchers and public health professionals to explore and understand complex biological data intuitively.
            </p>
            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4">Tools & Technologies:</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary rounded-lg border border-border hover:border-primary hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Highlights grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="glass rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
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
