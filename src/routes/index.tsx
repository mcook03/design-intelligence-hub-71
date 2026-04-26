import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/silicore/SiteHeader";
import { Button } from "@/components/ui/button";
import {
  Upload,
  Cpu,
  Sparkles,
  ShieldCheck,
  Gauge,
  Zap,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Silicore — The intelligence layer for PCB design" },
      { name: "description", content: "Upload a PCB and get an instant risk score, categorized issues, and actionable recommendations. An intelligence layer for Altium, KiCad and beyond." },
      { property: "og:title", content: "Silicore — Intelligence layer for PCB design" },
      { property: "og:description", content: "Score, analyze and improve your boards. Faster validation, less design risk." },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_30%,transparent_80%)]" />
        <div className="bg-hero-glow pointer-events-none absolute inset-0" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-24 lg:pt-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              v1.4 · DRC intelligence engine
            </div>
            <h1 className="text-gradient text-5xl font-semibold tracking-tight md:text-7xl">
              Ship boards that
              <br /> don&apos;t fail review.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
              Silicore is the intelligence layer for PCB design. Upload a board,
              get a risk score, categorized issues, and the exact fixes — in seconds.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/analyze">
                <Button size="lg" className="rounded-full px-6 font-medium">
                  Upload a board <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button size="lg" variant="ghost" className="rounded-full px-6 text-muted-foreground hover:text-foreground">
                  See live demo
                </Button>
              </Link>
            </div>
            <p className="mt-6 font-mono text-xs text-muted-foreground">
              Works alongside Altium · KiCad · Eagle · Allegro
            </p>
          </div>

          {/* Product preview */}
          <div className="relative mx-auto mt-20 max-w-5xl">
            <div className="absolute -inset-x-12 -inset-y-8 rounded-[2rem] bg-primary/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-elegant)]">
              <ProductPreview />
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="border-t border-border/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Workflow</SectionLabel>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            From upload to fix in three steps.
          </h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
            {[
              { n: "01", icon: Upload, title: "Upload", desc: "Drop a Gerber, ODB++ or native CAD export. We parse the stack, the nets and the geometry." },
              { n: "02", icon: Cpu, title: "Analyze", desc: "Silicore scores 40+ DFM, signal-integrity and thermal vectors against your ruleset." },
              { n: "03", icon: Sparkles, title: "Improve", desc: "Get prioritized issues and one-line recommendations engineers can apply immediately." },
            ].map((s) => (
              <div key={s.n} className="bg-background p-8">
                <div className="flex items-center justify-between">
                  <s.icon className="h-5 w-5 text-primary" />
                  <span className="font-mono text-xs text-muted-foreground">{s.n}</span>
                </div>
                <h3 className="mt-6 text-lg font-medium">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="border-t border-border/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <SectionLabel>Platform</SectionLabel>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                The intelligence your CAD tool was missing.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Silicore doesn&apos;t replace Altium or KiCad. It sits on top — turning raw geometry into design intelligence.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
              {[
                { icon: Gauge, title: "Risk score", desc: "A single 0–100 number that tracks across revisions." },
                { icon: ShieldCheck, title: "Categorized issues", desc: "DFM, EMI, thermal, signal-integrity, BOM — by severity." },
                { icon: Zap, title: "Actionable fixes", desc: "Each finding ships with the exact change to make." },
                { icon: Sparkles, title: "Version diffs", desc: "Compare revisions side-by-side and see why the score moved." },
              ].map((f) => (
                <div key={f.title} className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-primary/30">
                  <f.icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-4 font-medium">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section id="integrations" className="border-t border-border/60 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <SectionLabel>Integrations</SectionLabel>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            Lives next to the tools your team already uses.
          </h2>
          <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-x-12 gap-y-6 font-mono text-sm text-muted-foreground">
            {["Altium", "KiCad", "Eagle", "Allegro", "OrCAD", "Fusion 360"].map((n) => (
              <span key={n} className="opacity-70 transition-opacity hover:opacity-100">{n}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-12 text-center md:p-16">
            <div className="bg-hero-glow pointer-events-none absolute inset-0 opacity-80" />
            <div className="relative">
              <h2 className="text-gradient text-3xl font-semibold tracking-tight md:text-5xl">
                Score your next revision.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-muted-foreground">
                Free for the first three boards. No CAD plugin required.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link to="/analyze">
                  <Button size="lg" className="rounded-full px-6">
                    Start an analysis <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button size="lg" variant="ghost" className="rounded-full text-muted-foreground hover:text-foreground">
                    Explore the product
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
          <span className="font-mono text-xs">© 2026 Silicore Systems</span>
          <span className="font-mono text-xs">Designed for hardware teams who ship.</span>
        </div>
      </footer>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
      — {children}
    </span>
  );
}

function ProductPreview() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px]">
      <div className="border-b border-border p-6 lg:border-b-0 lg:border-r">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-mono text-xs text-muted-foreground">board · sentinel-rev-c.brd</div>
            <div className="mt-1 text-lg font-medium">Sentinel Power Module</div>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-3 py-1 font-mono text-xs text-success">
            <span className="h-1.5 w-1.5 rounded-full bg-success" /> analysis ready
          </div>
        </div>

        <div className="mt-8 flex items-center gap-8">
          <ScoreRing score={82} />
          <div className="space-y-3">
            <Stat label="Issues" value="14" sub="3 critical · 6 medium" />
            <Stat label="Δ vs rev-b" value="+9" sub="improved" tone="up" />
          </div>
        </div>

        <div className="mt-8 space-y-2">
          {[
            { sev: "high", tone: "danger" as const, title: "Insufficient clearance — net VBUS to GND", loc: "L2 · 0.12mm" },
            { sev: "med", tone: "warning" as const, title: "Via-in-pad on U7 not tented", loc: "U7.3" },
            { sev: "low", tone: "primary" as const, title: "Thermal relief missing on TP4", loc: "TP4" },
          ].map((i) => (
            <IssueRow key={i.title} {...i} />
          ))}
        </div>
      </div>

      <div className="space-y-4 bg-background/40 p-6">
        <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Categories</div>
        {[
          { name: "DFM", value: 88 },
          { name: "Signal integrity", value: 76 },
          { name: "Thermal", value: 91 },
          { name: "EMI", value: 72 },
          { name: "BOM risk", value: 84 },
        ].map((c) => (
          <div key={c.name}>
            <div className="mb-1.5 flex items-center justify-between text-xs">
              <span className="text-muted-foreground">{c.name}</span>
              <span className="font-mono">{c.value}</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-muted">
              <div className="h-full rounded-full bg-primary" style={{ width: `${c.value}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ScoreRing({ score, size = 96 }: { score: number; size?: number }) {
  const r = (size - 10) / 2;
  const c = 2 * Math.PI * r;
  const dash = (score / 100) * c;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} stroke="currentColor" strokeOpacity="0.15" strokeWidth={5} fill="none" className="text-muted-foreground" />
        <circle
          cx={size / 2} cy={size / 2} r={r}
          stroke="currentColor" strokeWidth={5} fill="none"
          strokeDasharray={`${dash} ${c}`} strokeLinecap="round"
          className="text-primary transition-all duration-700"
          style={{ filter: "drop-shadow(0 0 6px oklch(0.85 0.16 195 / 0.6))" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-mono text-2xl font-semibold">{score}</span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">score</span>
      </div>
    </div>
  );
}

function Stat({ label, value, sub, tone }: { label: string; value: string; sub: string; tone?: "up" }) {
  return (
    <div>
      <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className={`text-2xl font-semibold ${tone === "up" ? "text-success" : ""}`}>{value}</div>
      <div className="text-xs text-muted-foreground">{sub}</div>
    </div>
  );
}

function IssueRow({ title, loc, tone }: { sev: string; title: string; loc: string; tone: "danger" | "warning" | "primary" }) {
  const styles = {
    danger: "text-danger bg-danger/10 border-danger/20",
    warning: "text-warning bg-warning/10 border-warning/20",
    primary: "text-primary bg-primary/10 border-primary/20",
  }[tone];
  const Icon = tone === "primary" ? CheckCircle2 : AlertTriangle;
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border bg-background/50 p-3">
      <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md border ${styles}`}>
        <Icon className="h-3.5 w-3.5" />
      </span>
      <div className="min-w-0 flex-1">
        <div className="truncate text-sm">{title}</div>
        <div className="font-mono text-[11px] text-muted-foreground">{loc}</div>
      </div>
    </div>
  );
}
