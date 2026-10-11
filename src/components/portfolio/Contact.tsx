import { useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin, GraduationCap, CheckCircle2, AlertCircle, Loader2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

// ─── Formspree ────────────────────────────────────────────────────────────────
// 1. Sign up free at https://formspree.io
// 2. Create a form pointed at diop.mfadel@gmail.com
// 3. Paste your form ID below (e.g. "xpwzabcd")
const FORMSPREE_ID = "https://formspree.io/f/mbgdypba";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm " +
  "focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary " +
  "placeholder:text-muted-foreground/50 transition-all duration-200";

const socialLinks = [
  { icon: Github, href: "https://github.com/mfdiop", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/fadel-diop/", label: "LinkedIn" },
  { icon: GraduationCap, href: "https://scholar.google.com/citations?user=vxpoSQIAAAAJ&hl=fr", label: "Google Scholar" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(FORMSPREE_ID, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg((data as { error?: string }).error ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error — please check your connection and try again.");
      setStatus("error");
    }
  };

  const reset = () => { setStatus("idle"); setErrorMsg(""); };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-3">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Contact <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Open to research collaborations, data science projects, and speaking opportunities.
            Feel free to reach out — I typically respond within a few days.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* ── Info panel ── */}
          <div className="space-y-8">
            <div className="glass rounded-xl p-6 space-y-5">
              <InfoRow icon={Mail} label="Email">
                <a href="mailto:diop.mfadel@gmail.com" className="hover:text-primary transition-colors font-medium">
                  diop.mfadel@gmail.com
                </a>
              </InfoRow>
              <InfoRow icon={MapPin} label="Location">
                <p className="font-medium">Banjul, The Gambia</p>
                <p className="text-xs text-muted-foreground">MRC Unit The Gambia at LSHTM</p>
              </InfoRow>
              <InfoRow icon={Clock} label="Response time">
                <p className="font-medium">Within a few days</p>
                <p className="text-xs text-muted-foreground">Available for collaborations & consulting</p>
              </InfoRow>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-4 font-medium uppercase tracking-widest">Find me on</p>
              <div className="flex gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="p-3 rounded-xl border border-border hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-200 hover:scale-110"
                  >
                    <s.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="glass rounded-xl p-5 border-primary/20">
              <p className="text-sm font-semibold mb-1">Looking to collaborate?</p>
              <p className="text-sm text-muted-foreground">
                I'm particularly interested in malaria genomics, infectious disease epidemiology,
                and open-source bioinformatics tool development.
              </p>
            </div>
          </div>

          {/* ── Form panel ── */}
          {status === "success" ? (
            <div className="glass rounded-xl p-10 flex flex-col items-center justify-center text-center gap-5 min-h-[420px]">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Message received!</h3>
                <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                  Thank you for reaching out. I'll get back to you at the email you provided within a few days.
                </p>
              </div>
              <Button variant="outline" size="sm" className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground" onClick={reset}>
                Send another message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass rounded-xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Name *</label>
                  <input required value={form.name} onChange={set("name")} placeholder="Your full name" className={inputClass} />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Email *</label>
                  <input required type="email" value={form.email} onChange={set("email")} placeholder="your@email.com" className={inputClass} />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Subject *</label>
                <input required value={form.subject} onChange={set("subject")} placeholder="e.g. Research collaboration, consulting inquiry…" className={inputClass} />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider flex justify-between">
                  <span>Message *</span>
                  <span className={form.message.length > 900 ? "text-destructive" : ""}>{form.message.length}/1000</span>
                </label>
                <textarea
                  required
                  rows={6}
                  maxLength={1000}
                  value={form.message}
                  onChange={set("message")}
                  placeholder="Describe your project, collaboration idea, or question…"
                  className={`${inputClass} resize-none`}
                />
              </div>

              {status === "error" && (
                <div className="flex items-start gap-3 rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={status === "loading"}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-70"
              >
                {status === "loading" ? (
                  <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Sending…</>
                ) : (
                  <><Send className="w-4 h-4 mr-2" />Send Message</>
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Your message is sent directly to my inbox via{" "}
                <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-primary">
                  Formspree
                </a>
                . No data is stored beyond delivery.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon: Icon, label, children }: { icon: React.ElementType; label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
        <Icon className="w-4 h-4 text-primary" />
      </div>
      <div>
        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-0.5">{label}</p>
        {children}
      </div>
    </div>
  );
}
