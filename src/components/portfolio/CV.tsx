import { Download, GraduationCap, Briefcase, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const education = [
  { degree: "PhD in Bioinformatics", institution: "London School of Hygiene & Tropical Medicine", period: "2022 – Present", description: "Research focused on genomic epidemiology and transmission dynamics of infectious diseases." },
  { degree: "MSc Bioinformatics", institution: "Cheikh Anta DIOP University", period: "2012 – 2014", description: "Specialization in computational genomics and statistical methods for biological data." },
  { degree: "BSc Physics-Chemistry / Bioinformatics", institution: "Cheikh Anta DIOP University", period: "2008 – 2011", description: "Double major combining molecular biology with software engineering fundamentals." },
];

const experience = [
  { role: "Bioinformatician", organization: "MRCG", period: "2019 – 2021", description: "Developing bioinformatics pipelines for pathogen surveillance and training ML models for AMR prediction." },
  { role: "Bioinformatics Intern", organization: "MRCG", period: "2018-2019", description: "Built an automated variant-calling pipeline handling 500+ whole-genome sequences." },
];

const awards = [
  { title: "Best Poster Award", body: "ISCB Africa ASBCB Conference", year: "2023" },
  { title: "PhD Scholarship", body: "TRCD", year: "2022" },
];

export function CV() {
  return (
    <section id="cv" className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-3">My Background</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Curriculum <span className="text-gradient">Vitae</span>
          </h2>
        </div>

        <div className="space-y-12">
          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />Education
            </h3>
            <div className="space-y-4">
              {education.map((item) => (
                <div key={item.degree} className="glass rounded-xl p-6 hover:border-primary/50 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                    <h4 className="font-semibold">{item.degree}</h4>
                    <span className="text-xs font-mono text-primary shrink-0">{item.period}</span>
                  </div>
                  <p className="text-sm text-accent mb-2">{item.institution}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-primary" />Experience
            </h3>
            <div className="space-y-4">
              {experience.map((item) => (
                <div key={item.role} className="glass rounded-xl p-6 hover:border-primary/50 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                    <h4 className="font-semibold">{item.role}</h4>
                    <span className="text-xs font-mono text-primary shrink-0">{item.period}</span>
                  </div>
                  <p className="text-sm text-accent mb-2">{item.organization}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />Awards & Honours
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {awards.map((item) => (
                <div key={item.title} className="glass rounded-xl p-5 hover:border-primary/50 transition-all">
                  <p className="font-semibold mb-1">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.body}</p>
                  <p className="text-xs font-mono text-primary mt-2">{item.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <a href="/Mouhamadou_Fadel_Diop_CV.pdf" download="Mouhamadou_Fadel_Diop_CV.pdf">
              <Download className="w-4 h-4 mr-2" />Download Full CV
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
