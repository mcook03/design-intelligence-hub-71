import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <Logo />
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:inline">
            Engineering Intelligence
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#system" className="transition-colors hover:text-foreground">Silicore</a>
          <a href="#system" className="transition-colors hover:text-foreground">Nexus</a>
          <a href="#system" className="transition-colors hover:text-foreground">Atlas</a>
          <a href="#what" className="transition-colors hover:text-foreground">Experience</a>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/dashboard" className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground md:block">
            Sign in
          </Link>
          <Link to="/dashboard">
            <Button size="sm" className="rounded-full font-medium">Open Nexus →</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
