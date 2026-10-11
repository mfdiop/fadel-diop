import { Github, Linkedin, Mail, GraduationCap, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/mfdiop", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/fadel-diop/", label: "LinkedIn" },
  { icon: GraduationCap, href: "https://scholar.google.com/citations?user=vxpoSQIAAAAJ&hl=fr", label: "Google Scholar" },
  { icon: Mail, href: "mailto:diop.mfadel@gmail.com", label: "Email" },
];

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#research", label: "Research" },
  { href: "#projects", label: "Projects" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
            className="font-mono text-xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
            Fadel
          </a>

          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Mouhamadou Fadel DIOP. Built with{" "}
            <Heart className="w-3.5 h-3.5 text-primary inline" />{" "}
            using React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
