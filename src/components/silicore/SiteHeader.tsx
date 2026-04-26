import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#how" className="transition-colors hover:text-foreground">How it works</a>
          <a href="#features" className="transition-colors hover:text-foreground">Platform</a>
          <a href="#integrations" className="transition-colors hover:text-foreground">Integrations</a>
          <Link to="/dashboard" className="transition-colors hover:text-foreground">Product</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/dashboard" className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground md:block">
            Sign in
          </Link>
          <Link to="/analyze">
            <Button size="sm" className="rounded-full font-medium">Start analysis →</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
