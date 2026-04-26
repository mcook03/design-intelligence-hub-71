import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/silicore/SiteHeader";
import { Logo } from "@/components/silicore/Logo";
import { Reveal, RevealWords } from "@/components/silicore/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, Network, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Silicore — Hardware Design Intelligence" },
      { name: "description", content: "Silicore is engineering intelligence for hardware teams. Identify risks, understand design weaknesses, and improve performance before production." },
      { property: "og:title", content: "Silicore — Hardware Design Intelligence" },
      { property: "og:description", content: "Deep engineering intelligence for PCB design and hardware teams." },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <System />
      <WhatItDoes />
      <Lifecycle />
      <CTA />
      <Footer />
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* HERO                                                              */
/* ---------------------------------------------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_30%,transparent_80%)]" />
      <div className="bg-hero-glow pointer-events-none absolute inset-0" />

      {/* Floating colored glows */}
      <div
        className="pointer-events-none absolute -left-24 top-24 h-[420px] w-[420px] rounded-full opacity-60 blur-3xl animate-float-glow"
        style={{ background: "radial-gradient(circle, oklch(0.88 0.15 175 / 0.55), transparent 65%)" }}
      />
      <div
        className="pointer-events-none absolute right-[-120px] top-10 h-[460px] w-[460px] rounded-full opacity-50 blur-3xl animate-float-glow"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.13 255 / 0.5), transparent 65%)", animationDelay: "1.5s" }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-[60%] h-[380px] w-[380px] -translate-x-1/2 rounded-full opacity-40 blur-3xl animate-float-glow"
        style={{ background: "radial-gradient(circle, oklch(0.86 0.13 215 / 0.55), transparent 65%)", animationDelay: "3s" }}
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-28 pt-24 text-center md:pt-36">
        <Reveal>
          <SectionLabel center>Silicore</SectionLabel>
        </Reveal>
        <h1 className="text-gradient mx-auto mt-6 max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
          <RevealWords text="Hardware Design Intelligence." stagger={90} />
        </h1>
        <Reveal delay={500}>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            Deep engineering intelligence for your PCB designs — identify potential
            risks, understand design weaknesses, and improve performance before
            production.
          </p>
        </Reveal>
        <Reveal delay={700}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="rounded-full px-6 font-medium">
              Request demo <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Button size="lg" variant="ghost" className="rounded-full px-6 text-muted-foreground hover:text-foreground">
              Learn more
            </Button>
          </div>
        </Reveal>

        <Reveal delay={900}>
          <div className="relative mx-auto mt-24 h-[320px] max-w-3xl md:h-[420px]">
            <HeroVisual />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function HeroVisual() {
  const ringColors = [
    "oklch(0.86 0.13 215 / 0.35)", // cyan
    "oklch(0.78 0.13 255 / 0.32)", // electric blue
    "oklch(0.88 0.15 175 / 0.32)", // teal
    "oklch(0.86 0.13 215 / 0.45)", // cyan
  ];
  return (
    <div className="relative h-full w-full">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          {[480, 380, 280, 180].map((s, i) => (
            <div
              key={s}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
              style={{
                width: s,
                height: s,
                borderColor: ringColors[i],
                opacity: 1 - i * 0.12,
                animation: `spin ${30 + i * 10}s linear infinite ${i % 2 ? "reverse" : ""}`,
              }}
            />
          ))}
          <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-primary/40 bg-surface shadow-[0_0_60px_-10px_oklch(0.86_0.13_215_/_0.6)] animate-pulse-ring">
            <div className="absolute inset-2 rounded-full border border-primary/30" />
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">core</div>
          </div>
        </div>
      </div>
      {/* Corner ticks */}
      {[
        "left-0 top-0",
        "right-0 top-0",
        "left-0 bottom-0",
        "right-0 bottom-0",
      ].map((p) => (
        <div key={p} className={`absolute ${p} h-3 w-3 border-primary/40`} style={{
          borderTopWidth: p.includes("top") ? 1 : 0,
          borderBottomWidth: p.includes("bottom") ? 1 : 0,
          borderLeftWidth: p.includes("left") ? 1 : 0,
          borderRightWidth: p.includes("right") ? 1 : 0,
        }} />
      ))}
      <style>{`@keyframes spin { to { transform: translate(-50%,-50%) rotate(360deg);} from { transform: translate(-50%,-50%) rotate(0deg);} }`}</style>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* THE SYSTEM                                                        */
/* ---------------------------------------------------------------- */

function System() {
  const cards = [
    {
      icon: Layers,
      tag: "01 / Company",
      title: "Silicore",
      desc:
        "The brand and company behind the system. Silicore represents a new category of hardware design intelligence built for teams designing real, high-stakes physical products.",
    },
    {
      icon: Network,
      tag: "02 / Platform",
      title: "Silicore Nexus",
      desc:
        "The platform layer. Nexus is where the experience comes together into one coherent environment for hardware organizations, design review flow, and engineering coordination.",
    },
    {
      icon: Sparkles,
      tag: "03 / Intelligence",
      title: "Atlas Intelligence",
      desc:
        "The intelligence engine inside Nexus. Atlas interprets hardware context, organizes technical signal, and gives the platform a sharper understanding of what matters in design decisions.",
    },
  ];
  return (
    <section id="system" className="border-t border-border/60 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <SectionLabel>The System</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Three names. One connected experience.
          </h2>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Silicore is the company. Silicore Nexus is the platform. Atlas
            Intelligence is the reasoning layer inside it. The relationship is
            intentional — so the product feels deliberate before anyone ever
            reaches the dashboard.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="group relative bg-background p-8 transition-colors hover:bg-surface">
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <c.icon className="h-5 w-5" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{c.tag}</span>
              </div>
              <h3 className="mt-8 text-2xl font-medium tracking-tight">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* WHAT IT DOES                                                      */
/* ---------------------------------------------------------------- */

function WhatItDoes() {
  const items = [
    {
      title: "Clarity",
      sub: "Turn technical complexity into a readable operating surface.",
      desc:
        "Silicore Nexus is designed to transform dense engineering context into something leaders, reviewers, and design teams can actually navigate.",
    },
    {
      title: "Continuity",
      sub: "Connect hardware decisions into one platform narrative.",
      desc:
        "Atlas Intelligence gives Nexus continuity across design thinking, review context, and the broader system around the board.",
    },
    {
      title: "Confidence",
      sub: "Create a stronger sense of trust around hardware execution.",
      desc:
        "The result is a platform experience that feels premium, deliberate, and engineered for teams building advanced hardware products.",
    },
  ];
  return (
    <section id="what" className="border-t border-border/60 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionLabel>What it does</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Built to make hardware systems feel legible.
            </h2>
            <p className="mt-5 text-muted-foreground">
              A visual introduction to a company and platform that help hardware
              teams see their work more clearly, move with more confidence, and
              operate with stronger technical continuity.
            </p>
          </div>
          <div className="space-y-px rounded-2xl border border-border bg-border">
            {items.map((it, i) => (
              <div key={it.title} className="grid grid-cols-[80px_1fr] gap-6 bg-background p-8 first:rounded-t-2xl last:rounded-b-2xl md:grid-cols-[120px_1fr]">
                <div className="font-mono text-xs text-muted-foreground">0{i + 1}</div>
                <div>
                  <h3 className="text-xl font-medium">{it.title}</h3>
                  <p className="mt-1 text-sm text-foreground/80">{it.sub}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{it.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* LIFECYCLE                                                         */
/* ---------------------------------------------------------------- */

function Lifecycle() {
  const steps = [
    { n: "01", title: "Ingest", desc: "Upload your design files and structure the PCB data." },
    { n: "02", title: "Analyze", desc: "Run checks across electrical, thermal, and layout." },
    { n: "03", title: "Score & Prioritize", desc: "Highlight the most important risks and focus areas." },
    { n: "04", title: "Recommend", desc: "Provide clear, actionable suggestions to fix issues." },
    { n: "05", title: "Project Improvement", desc: "Track changes across revisions and continuously improve." },
  ];
  return (
    <section className="border-t border-border/60 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <SectionLabel>How Silicore works</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Intelligence across the Silicore lifecycle.
          </h2>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Silicore Nexus moves from raw design input to actionable engineering
            guidance through a connected lifecycle built for hardware teams.
          </p>
        </div>

        <div className="relative mt-16">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
          <ol className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-5 lg:rounded-none lg:border-0 lg:bg-transparent">
            {steps.map((s) => (
              <li key={s.n} className="relative bg-background p-6 lg:bg-transparent">
                <div className="flex items-center gap-3">
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-background font-mono text-xs text-primary">
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-medium">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* CTA                                                               */
/* ---------------------------------------------------------------- */

function CTA() {
  return (
    <section className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-12 text-center md:p-20">
          <div className="bg-hero-glow pointer-events-none absolute inset-0" />
          <div className="relative">
            <h2 className="text-gradient text-3xl font-semibold tracking-tight md:text-5xl">
              Accelerate your <br className="hidden md:block" /> Silicore journey.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-muted-foreground">
              Analyze your designs with Silicore. Build with intelligence.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/dashboard">
                <Button size="lg" className="rounded-full px-6">
                  Open Nexus <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" variant="ghost" className="rounded-full text-muted-foreground hover:text-foreground">
                Sign in
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* FOOTER                                                            */
/* ---------------------------------------------------------------- */

function Footer() {
  const cols = [
    { title: "Platform", items: ["Overview", "Features", "Lifecycle"] },
    { title: "Resources", items: ["Blog", "Webinars"] },
    { title: "Company", items: ["About Us", "Contact Us"] },
  ];
  return (
    <footer className="border-t border-border/60 py-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Deep engineering intelligence for PCB design and hardware teams.
          </p>
          <div className="mt-6 flex items-center gap-3 text-muted-foreground">
            <SocialDot label="in" />
            <SocialDot label="X" />
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{c.title}</div>
            <ul className="mt-4 space-y-3 text-sm">
              {c.items.map((i) => (
                <li key={i}><a href="#" className="text-foreground/80 transition-colors hover:text-primary">{i}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl items-center justify-between border-t border-border/60 px-6 pt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        <span>© 2026 Silicore</span>
        <span>Engineering Intelligence</span>
      </div>
    </footer>
  );
}

function SocialDot({ label }: { label: string }) {
  return (
    <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-border font-mono text-[10px] uppercase transition-colors hover:border-primary hover:text-primary">
      {label}
    </a>
  );
}

/* ---------------------------------------------------------------- */
/* SHARED                                                            */
/* ---------------------------------------------------------------- */

function SectionLabel({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-primary ${center ? "justify-center" : ""}`}>
      <span className="h-px w-6 bg-primary/60" />
      {children}
    </div>
  );
}
