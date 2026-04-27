import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/Section";
import { Layout, MousePointer2, Workflow, Smartphone, Search, Wand2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Aisha Aliyu Arinola" },
      {
        name: "description",
        content:
          "Freelance UI/UX services: wireframing, prototyping, user flows, mobile and web interface design and usability improvements.",
      },
      { property: "og:title", content: "Services — Aisha Aliyu Arinola" },
      { property: "og:description", content: "Freelance UI/UX services tailored to your product." },
    ],
  }),
  component: ServicesPage,
});

const skills = [
  "Wireframing", "UI Prototyping", "User Flow Mapping", "UX Research",
  "Figma", "Canva", "Visual Communication", "Usability Design", "Team Collaboration",
];

const services = [
  { icon: Layout, title: "Wireframing", desc: "Low and high-fidelity wireframes that map ideas before pixels." },
  { icon: MousePointer2, title: "Prototyping", desc: "Interactive Figma prototypes that bring flows to life." },
  { icon: Workflow, title: "User Flow Design", desc: "Clear journeys that reduce friction and build trust." },
  { icon: Smartphone, title: "Mobile & Web UI", desc: "Responsive interfaces designed for every screen." },
  { icon: Search, title: "UX Research", desc: "Surveys and usability testing to ground decisions in evidence." },
  { icon: Wand2, title: "Usability Improvements", desc: "Audits and redesigns to make existing products feel better." },
];

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services & skills"
        title={<>Tools, craft and a <span className="italic text-primary">collaborative</span> mindset.</>}
        intro="From the first wireframe to a polished prototype — here's how I can help."
      />

      <section className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group rounded-3xl border border-border bg-card p-7 hover:-translate-y-1 hover:shadow-soft transition reveal"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="h-11 w-11 rounded-xl bg-accent grid place-items-center text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition">
                <s.icon size={20} />
              </div>
              <h3 className="mt-5 font-display text-xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 mt-24">
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Skills</span>
        <h2 className="mt-3 font-display text-4xl md:text-5xl">A toolkit, refined with practice.</h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((s) => (
            <span
              key={s}
              className="rounded-full border border-border bg-background px-5 py-2 text-sm hover:bg-foreground hover:text-background transition cursor-default"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 mt-24">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-accent via-secondary to-background p-10 md:p-14 text-center grain relative overflow-hidden">
          <h2 className="font-display text-3xl md:text-5xl text-balance">Have a project in mind?</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            I'm currently taking on a small number of freelance projects. Let's talk about what you're building.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center rounded-full bg-foreground text-background px-7 py-3 text-sm font-medium hover:opacity-90 transition"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  );
}
