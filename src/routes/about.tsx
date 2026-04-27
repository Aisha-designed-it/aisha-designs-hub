import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/Section";
import portrait from "@/assets/aisha-portrait.jpg";
import { GraduationCap, Heart, BookOpen, ChefHat } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Aisha Aliyu Arinola" },
      {
        name: "description",
        content:
          "Learn about Aisha Aliyu Arinola — a UI/UX designer with a background in Educational Technology and a passion for user-centered design.",
      },
      { property: "og:title", content: "About — Aisha Aliyu Arinola" },
      { property: "og:description", content: "UI/UX designer with a background in Educational Technology." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={<>A designer led by <span className="italic text-primary">curiosity</span>.</>}
        intro="I bridge creativity and structure to design interfaces that feel intuitive, accessible and human."
      />

      <section className="mx-auto max-w-6xl px-6 grid md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-5 md:sticky md:top-28 reveal">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-soft">
            <img
              src={portrait}
              alt="Aisha Aliyu Arinola"
              width={800}
              height={1024}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-7 space-y-10 reveal" style={{ animationDelay: "120ms" }}>
          <p className="text-lg leading-relaxed text-foreground/90">
            I'm a passionate UI/UX designer focused on creating intuitive,
            user-centered digital experiences. My work spans wireframes,
            prototypes and user flows — always grounded in research and shaped
            by an empathy for the people I'm designing for.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            With a background in Graphics Design and Educational Technology, I
            bring a balance of creative thinking and structured problem-solving.
            I'm currently growing through hands-on practice, mentorship and a
            deep commitment to continuous learning.
          </p>

          <div>
            <h3 className="font-display text-2xl mb-4 flex items-center gap-2">
              <GraduationCap size={20} className="text-primary" /> Education
            </h3>
            <div className="space-y-4">
              <EduCard
                degree="B.Sc (Ed.) Educational Technology"
                school="University of Ilorin"
                year="2019"
              />
              <EduCard
                degree="Master's in Educational Psychology"
                school="Ahmadu Bello University, Zaria"
                year="2027 (In View)"
              />
            </div>
          </div>

          <div>
            <h3 className="font-display text-2xl mb-4 flex items-center gap-2">
              <Heart size={20} className="text-primary" /> Beyond design
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <PersonalCard icon={<BookOpen size={18} />} title="Writing" desc="Stories, reflections and the occasional UX teardown." />
              <PersonalCard icon={<ChefHat size={18} />} title="Cooking" desc="Cooking is design too — composition, balance, joy." />
            </div>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition"
          >
            Work with me
          </Link>
        </div>
      </section>
    </>
  );
}

function EduCard({ degree, school, year }: { degree: string; school: string; year: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-medium">{degree}</p>
          <p className="text-sm text-muted-foreground mt-1">{school}</p>
        </div>
        <span className="shrink-0 text-xs rounded-full bg-secondary px-3 py-1">{year}</span>
      </div>
    </div>
  );
}

function PersonalCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center gap-2 text-primary">{icon}<span className="font-medium text-foreground">{title}</span></div>
      <p className="text-sm text-muted-foreground mt-2">{desc}</p>
    </div>
  );
}
