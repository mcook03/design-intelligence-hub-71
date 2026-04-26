export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative h-7 w-7">
        <div className="absolute inset-0 rounded-md bg-primary/15 blur-md" />
        <svg viewBox="0 0 28 28" className="relative h-7 w-7" fill="none">
          <rect x="2" y="2" width="24" height="24" rx="6" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.2" className="text-primary" />
          <rect x="7" y="7" width="14" height="14" rx="3" fill="currentColor" className="text-primary" fillOpacity="0.18" />
          <path d="M10 14h8M14 10v8" stroke="currentColor" className="text-primary" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="14" cy="14" r="2" fill="currentColor" className="text-primary" />
        </svg>
      </div>
      <span className="font-mono text-[15px] font-semibold tracking-tight">silicore</span>
    </div>
  );
}
