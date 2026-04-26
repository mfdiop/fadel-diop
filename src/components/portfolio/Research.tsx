import { FileText, ExternalLink, Users, Calendar, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  url: string;
  type: "journal" | "preprint";
}

const publications: Publication[] = [
  {
    title: "Persistence of legacy antimalarial resistance markers in The Gambia from a malaria genomic surveillance study",
    authors: "Diop MF, Amambua-Ngwa BN, Demba MA, Bah M, Njie BK, Cham F, et al.",
    journal: "In press",
    year: 2026,
    url: "https://scholar.google.com/citations?user=vxpoSQIAAAAJ&hl=fr",
    type: "journal",
  },
  {
    title: "Major features of parasite adaptation revealed by genomes of Plasmodium falciparum population samples archived for over 50 years",
    authors: "Amambua-Ngwa A, Diop MF, Drakeley CJ, d'Alessandro U, Kwiatkowski DP, Conway DJ",
    journal: "Communications Biology",
    year: 2026,
    url: "https://scholar.google.com/citations?user=vxpoSQIAAAAJ&hl=fr",
    type: "journal",
  },
  {
    title: "Molecular Surveillance of Malaria in Nigeria Reveals a Low Frequency of Antimalarial Resistance Markers and Clonal Expansion of Chloroquine-Sensitive Infections",
    authors: "Ajibaye O, Oboh-Imafidon M, Ajibola O, Olusola F, Egwu CO, Amambua-Ngwa BN, Diop MF, et al.",
    journal: "Open Forum Infectious Diseases",
    year: 2026,
    url: "https://scholar.google.com/citations?user=vxpoSQIAAAAJ&hl=fr",
    type: "journal",
  },
  {
    title: "Towards an open analysis ecosystem for Plasmodium genomic epidemiology",
    authors: "Ruybal-Pesántez S, Amaya-Romero J, Bérubé S, Brazeau NF, Diop MF, Hathaway N, et al.",
    journal: "medRxiv",
    year: 2025,
    url: "https://scholar.google.com/citations?user=vxpoSQIAAAAJ&hl=fr",
    type: "preprint",
  },
  {
    title: "New insights on malaria parasite adaptation yielded by samples archived for more than 50 years",
    authors: "Amambua-Ngwa A, Diop MF, Drakeley CJ, d'Alessandro U, Kwiatkowski DP, Conway DJ",
    journal: "bioRxiv",
    year: 2025,
    url: "https://scholar.google.com/citations?user=vxpoSQIAAAAJ&hl=fr",
    type: "preprint",
  },
  {
    title: "Reduced genetic diversity of key fertility and vector competency related genes in Anopheles gambiae s.l. across Sub-Saharan Africa",
    authors: "Seck F, Diop MF, Mané K, Diallo A, Dieng I, Namountougou M, et al.",
    journal: "Genes",
    year: 2025,
    url: "https://scholar.google.com/citations?user=vxpoSQIAAAAJ&hl=fr",
    type: "journal",
  },
  {
    title: "Genetic variations in Plasmodium falciparum invasion ligands and their cognate human receptor variants in malaria cases from The Gambia",
    authors: "Nganyewo NN, Martha MA, Diop MF, Oriero EC, Amenga-Etego LN, Amambua-Ngwa A",
    journal: "American Journal of Tropical Medicine and Hygiene",
    year: 2025,
    url: "https://scholar.google.com/citations?user=vxpoSQIAAAAJ&hl=fr",
    type: "journal",
  },
  {
    title: "Prevalence and Antimicrobial Resistance Patterns of Pathogenic Bacterial Isolates of Hospitalized Sickle Cell Disease Patients Admitted in Our Tertiary Hospital in the Gambia",
    authors: "Dibbasey M, Dahaba M, Sarfo F, Ceesay B, Umukoro S, Diop MF, Amambua-Ngwa A",
    journal: "Blood",
    year: 2023,
    url: "https://scholar.google.com/citations?user=vxpoSQIAAAAJ&hl=fr",
    type: "journal",
  },
  {
    title: "Laboratory indices of hospitalized sickle cell disease patients, prevalence and antimicrobial susceptibility of pathogenic bacterial isolates at MRCG ward in the Gambia",
    authors: "Dibbasey M, Dahaba M, Sarfo F, Jallow-Manneh I, Ceesay B, Umukoro S, Diop MF, et al.",
    journal: "BMC Infectious Diseases",
    year: 2023,
    url: "https://scholar.google.com/citations?user=vxpoSQIAAAAJ&hl=fr",
    type: "journal",
  },
  {
    title: "Plasmodium malariae structure and genetic diversity in sub-Saharan Africa determined from microsatellite variants and linked SNPs in orthologues of antimalarial resistance genes",
    authors: "Oriero EC, Demba MA, Diop MF, Ishengoma DS, Amenga-Etego LN, Ghansah A, et al.",
    journal: "Scientific Reports",
    year: 2022,
    url: "https://scholar.google.com/citations?user=vxpoSQIAAAAJ&hl=fr",
    type: "journal",
  },
  {
    title: "Genome-wide SNP analysis of Plasmodium falciparum shows differentiation at drug-resistance-associated loci among malaria transmission settings in southern Mali",
    authors: "Coulibaly A, Diop MF, Kone A, Dara A, Ouattara A, Mulder N, et al.",
    journal: "Frontiers in Genetics",
    year: 2022,
    url: "https://scholar.google.com/citations?user=vxpoSQIAAAAJ&hl=fr",
    type: "journal",
  },
  {
    title: "Plasmodium falciparum merozoite invasion ligands, linked antimalarial resistance loci and ex vivo responses to antimalarials in The Gambia",
    authors: "Mbye H, Mane K, Diop MF, Demba MA, Bojang F, Mohammed NI, et al.",
    journal: "Journal of Antimicrobial Chemotherapy",
    year: 2022,
    url: "https://scholar.google.com/citations?user=vxpoSQIAAAAJ&hl=fr",
    type: "journal",
  },
  {
    title: "In silico characterisation of putative Plasmodium falciparum vaccine candidates in African malaria populations",
    authors: "Ajibola O, Diop MF, Ghansah A, Amenga-Etego L, Golassa L, Apinjoh T, et al.",
    journal: "Scientific Reports",
    year: 2021,
    url: "https://scholar.google.com/citations?user=vxpoSQIAAAAJ&hl=fr",
    type: "journal",
  },
  {
    title: "Balancing selection and genetic variation of Plasmodium falciparum vaccine candidate genes in sub-Saharan Africa populations",
    authors: "Diop MF, Worwui A, Mane K, Kamau E, Djimde A, D'Alessandro U, Amambua-Ngwa A",
    journal: "Open Research Africa",
    year: 2019,
    url: "https://scholar.google.com/citations?user=vxpoSQIAAAAJ&hl=fr",
    type: "journal",
  },
];

const stats = [
  { label: "Publications", value: "14+", icon: FileText },
  { label: "Citations", value: "200+", icon: BookOpen },
  { label: "Collaborators", value: "50+", icon: Users },
];

export function Research() {
  const getTypeColor = (type: Publication["type"]) => {
    switch (type) {
      case "journal": return "bg-primary/10 text-primary";
      case "preprint": return "bg-accent/10 text-accent";
    }
  };

  const getTypeLabel = (type: Publication["type"]) => {
    switch (type) {
      case "journal": return "Journal Article";
      case "preprint": return "Preprint";
    }
  };

  return (
    <section id="research" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-3">Scientific Contributions</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Research & <span className="text-gradient">Publications</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            My research focuses on applying computational methods to understand infectious disease transmission and develop tools for genomic surveillance.
          </p>
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
            <FileText className="w-5 h-5 text-primary" />Publications
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
                  </div>
                </div>
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
                >
                  <ExternalLink className="w-4 h-4" />View Paper
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground" asChild>
            <a href="https://scholar.google.com/citations?user=vxpoSQIAAAAJ&hl=fr" target="_blank" rel="noopener noreferrer">
              View All on Google Scholar<ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
