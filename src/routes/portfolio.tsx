import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/Section";
import { ArrowUpRight } from "lucide-react";
import ecom from "@/assets/project-ecommerce.jpg";
import podcast from "@/assets/project-podcast.jpg";
import cyber from "@/assets/project-cybersecurity.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Aisha Aliyu Arinola" },
      {
        name: "description",
        content:
          "Selected UI/UX projects by Aisha Aliyu Arinola — e-commerce, podcast and cybersecurity case studies built in Figma.",
      },
      { property: "og:title", content: "Portfolio — Aisha Aliyu Arinola" },
      { property: "og:description", content: "Selected UI/UX case studies built in Figma." },
    ],
  }),
  component: PortfolioPage,
});

const projects = [
  {
    tag: "E-commerce · Web",
    title: "A frictionless checkout experience",
    desc: "Conducted user research via surveys and translated insights into high-fidelity wireframes and an interactive Figma prototype focused on a smoother shopping journey.",
    image: ecom,
    deliverables: ["User research", "High-fidelity wireframes", "Figma prototype"],
  },
  {
    tag: "Mobile · Audio",
    title: "Podcast app — listening, simplified",
    desc: "Mid-fidelity wireframes for a focused, distraction-free listening experience with thoughtful navigation and personalised discovery.",
    image: podcast,
    deliverables: ["Mid-fidelity wireframes", "User flows", "Interaction design"],
  },
  {
    tag: "Internship · Web Dashboard",
    title: "Cybersecurity website & dashboard",
    desc: "Internship project where I designed wireframes, dashboards and an interactive Figma prototype for a security-focused product, in close collaboration with the team.",
    image: cyber,
    deliverables: ["Wireframing", "Dashboard design", "Interactive prototype"],
  },
];

function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        title={<>A small body of work, <span className="italic text-primary">growing fast</span>.</>}
        intro="A look at the projects I've shaped over the past two years from research and wireframes to interactive prototypes."
      />

      <section className="mx-auto max-w-6xl px-6 space-y-24 pb-12">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className={`grid md:grid-cols-12 gap-10 items-center reveal ${
              i % 2 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="md:col-span-7 group relative overflow-hidden rounded-3xl border border-border bg-secondary/40">
              <img
                src={p.image}
                alt={p.title}
                width={1024}
                height={768}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="md:col-span-5">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.tag}</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl leading-tight text-balance">{p.title}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{p.desc}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.deliverables.map((d) => (
                  <li key={d} className="text-xs rounded-full border border-border bg-card px-3 py-1">
                    {d}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition"
              >
                Discuss a similar project <ArrowUpRight size={14} />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
