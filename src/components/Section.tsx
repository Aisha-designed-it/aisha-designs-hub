import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
      <span className="h-px w-8 bg-foreground/30" />
      {children}
    </span>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-16 pb-12 reveal">
      <SectionLabel>{eyebrow}</SectionLabel>
      <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[0.95] text-balance">
        {title}
      </h1>
      {intro && (
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">{intro}</p>
      )}
    </div>
  );
}
