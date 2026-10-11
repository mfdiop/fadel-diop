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
          <Button variant="outline" size="lg" className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
            View All Posts<ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
