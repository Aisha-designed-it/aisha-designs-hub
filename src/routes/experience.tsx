import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/Section";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Aisha Aliyu Arinola" },
      {
        name: "description",
        content:
          "UI/UX experience including PDU Africa training and the iRES internship, where Aisha designed wireframes, dashboards and user flows.",
      },
      { property: "og:title", content: "Experience — Aisha Aliyu Arinola" },
      { property: "og:description", content: "Hands-on UI/UX experience and training." },
    ],
  }),
  component: ExperiencePage,
});

const items = [
  {
    role: "UI/UX Designer (Trainee)",
    org: "Product Design University — PDU Africa",
    period: "2024 — 2025",
    points: [
      "Designed wireframes and interactive prototypes in Figma",
      "Presented work in design critiques and iterated on feedback",
      "Practiced research-driven, user-centered design methods",
    ],
  },
  {
    role: "Intern UI/UX Designer",
    org: "Incident Response Emergency System (iRES)",
    period: "2024",
    points: [
      "Designed wireframes and end-to-end user flows",
      "Built dashboards balancing density with clarity",
      "Collaborated with engineers on the company website",
    ],
  },
];

function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title={<>Hands-on, <span className="italic text-primary">always</span> learning.</>}
        intro="Where I've sharpened my craft so far."
      />

      <section className="mx-auto max-w-4xl px-6 pb-8">
        <div className="relative">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-border" aria-hidden />
          <ul className="space-y-10">
            {items.map((it, i) => (
              <li key={it.role} className="relative pl-12 reveal" style={{ animationDelay: `${i * 100}ms` }}>
                <span className="absolute left-0 top-2 h-6 w-6 rounded-full border-4 border-background bg-primary shadow-soft" />
                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <p className="font-display text-xl">{it.role}</p>
                      <p className="text-sm text-primary mt-1">{it.org}</p>
                    </div>
                    <span className="text-xs rounded-full bg-secondary px-3 py-1">{it.period}</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {it.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="text-primary mt-1">✦</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
