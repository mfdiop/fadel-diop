import { Navigation } from "@/components/portfolio/Navigation";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Research } from "@/components/portfolio/Research";
import { Projects } from "@/components/portfolio/Projects";
import { Blog } from "@/components/portfolio/Blog";
import { CV } from "@/components/portfolio/CV";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navigation />
    <Hero />
    <About />
    <Research />
    <Projects />
    <Blog />
    <CV />
    <Contact />
    <Footer />
  </div>
);

export default Index;
