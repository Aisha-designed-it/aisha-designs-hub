import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import portrait from "@/assets/aisha-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aisha Aliyu Arinola — UI/UX Designer & Freelancer" },
      {
        name: "description",
        content:
          "Portfolio of Aisha Aliyu Arinola — entry-level UI/UX designer crafting wireframes, prototypes and user flows with clarity and creativity.",
      },
      { property: "og:title", content: "Aisha Aliyu Arinola — UI/UX Designer" },
      { property: "og:description", content: "Designing intuitive digital experiences with clarity and creativity." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden grain">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent blob" />
        <div className="absolute top-20 -right-40 h-[500px] w-[500px] rounded-full bg-lavender blob" />

        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-28 md:pt-28 md:pb-36 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-3 py-1 text-xs">
              <Sparkles size={12} className="text-primary" />
              Available for freelance projects
            </span>
            <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,5.75rem)] leading-[0.95] tracking-tight text-balance">
              Designing
              <span className="italic font-light text-primary"> intuitive </span>
              digital experiences with clarity & creativity.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
              I'm <span className="text-foreground">Aisha Aliyu Arinola</span> — a UI/UX
              designer focused on wireframes, prototypes and user flows that feel
              effortless to use.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition"
              >
                View Portfolio
                <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-6 py-3 text-sm font-medium hover:bg-secondary transition"
              >
                Contact Me
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-8 text-sm">
              <div>
                <p className="font-display text-3xl">2+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Years exploring</p>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <p className="font-display text-3xl">3</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Case studies</p>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <p className="font-display text-3xl">Figma</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Primary tool</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 reveal" style={{ animationDelay: "150ms" }}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-accent via-background to-lavender opacity-70" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border shadow-soft">
                <img
                  src={portrait}
                  alt="Aisha Aliyu Arinola"
                  width={800}
                  height={1024}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-background border border-border shadow-soft px-4 py-3">
                <p className="text-xs text-muted-foreground">Currently</p>
                <p className="font-display text-sm">Crafting in Figma ✦</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border bg-secondary/40 overflow-hidden">
        <div className="flex marquee whitespace-nowrap py-6 font-display text-3xl md:text-4xl">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-12 px-6">
              {["Wireframing", "Prototyping", "User Flows", "UX Research", "Visual Design", "Usability"].map((w) => (
                <span key={w} className="flex items-center gap-12">
                  <span>{w}</span>
                  <span className="text-primary">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">About</span>
          </div>
          <div className="md:col-span-8">
            <p className="font-display text-3xl md:text-4xl leading-tight text-balance">
              Passionate about user-centered design, with a background in
              <span className="italic text-primary"> Educational Technology </span>
              and an eye for the small details that make interfaces feel human.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition"
            >
              Read more about me <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* WORK PREVIEW */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Selected work</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Recent projects</h2>
          </div>
          <Link to="/portfolio" className="hidden md:inline-flex items-center gap-2 text-sm hover:text-primary">
            All work <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <FeatureCard
            tag="E-Commerce"
            title="Frictionless checkout flow"
            href="/portfolio"
          />
          <FeatureCard
            tag="Mobile App"
            title="Podcast listening experience"
            href="/portfolio"
            tone="lavender"
          />
        </div>
      </section>
    </>
  );
}

function FeatureCard({
  tag,
  title,
  href,
  tone = "accent",
}: {
  tag: string;
  title: string;
  href: "/portfolio";
  tone?: "accent" | "lavender";
}) {
  return (
    <Link
      to={href}
      className="group block rounded-3xl border border-border bg-card p-8 hover:shadow-soft transition-all hover:-translate-y-1"
    >
      <div
        className={`aspect-[16/10] rounded-2xl mb-6 ${
          tone === "lavender" ? "bg-lavender" : "bg-accent"
        } grid place-items-center font-display text-6xl text-foreground/40`}
      >
        ✦
      </div>
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{tag}</span>
      <p className="mt-2 font-display text-2xl group-hover:text-primary transition">{title}</p>
    </Link>
  );
}
