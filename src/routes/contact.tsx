import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/Section";
import { Mail, Phone, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Aisha Aliyu Arinola" },
      {
        name: "description",
        content:
          "Get in touch with Aisha Aliyu Arinola for UI/UX freelance work, collaborations or design conversations.",
      },
      { property: "og:title", content: "Contact — Aisha Aliyu Arinola" },
      { property: "og:description", content: "Let's talk about your next product." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(5, "Tell me a little more").max(1000),
});

const WEB3FORMS_ACCESS_KEY = "780bd4a0-c68d-43c8-8f1b-800b4cd0f5a8";

function ContactPage() {
  const [status, setStatus] = useState<{ type: "idle" | "ok" | "error" | "loading"; msg?: string }>({
    type: "idle",
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      setStatus({ type: "error", msg: parsed.error.issues[0]?.message ?? "Please check the form." });
      return;
    }

    setStatus({ type: "loading", msg: "Sending your message…" });

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: parsed.data.name,
          email: parsed.data.email,
          message: parsed.data.message,
          subject: `New portfolio message from ${parsed.data.name}`,
          from_name: "Portfolio Contact Form",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ type: "ok", msg: "Thanks! Your message has been sent. I'll be in touch soon." });
        form.reset();
      } else {
        setStatus({ type: "error", msg: data.message ?? "Something went wrong. Please try again." });
      }
    } catch {
      setStatus({ type: "error", msg: "Network error. Please try again in a moment." });
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={<>Let's <span className="italic text-primary">design</span> something together.</>}
        intro="Whether you have a project in mind or just want to say hello my inbox is open."
      />

      <section className="mx-auto max-w-6xl px-6 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5 space-y-4 reveal">
          <ContactRow icon={<Mail size={18} />} label="Email" value="aliyuaishah50@gmail.com" href="mailto:aliyuaishah50@gmail.com" />
          <ContactRow icon={<Phone size={18} />} label="Phone" value="0814 661 1930" href="tel:08146611930" />
          <ContactRow
            icon={<Linkedin size={18} />}
            label="LinkedIn"
            value="Aisha Aliyu Arinola"
            href="https://www.linkedin.com/in/aisha-aliyu-arinola"
          />

          <div className="mt-8 rounded-3xl border border-border bg-secondary/50 p-6">
            <p className="font-display text-xl">Currently</p>
            <p className="text-sm text-muted-foreground mt-2">
              Open to freelance UI/UX projects, internships and collaborative design work.
            </p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="md:col-span-7 rounded-3xl border border-border bg-card p-7 md:p-9 reveal" style={{ animationDelay: "120ms" }}>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Your name" name="name" placeholder="Jane Doe" />
            <Field label="Email" name="email" type="email" placeholder="jane@studio.com" />
          </div>
          <div className="mt-4">
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
            <textarea
              name="message"
              rows={6}
              maxLength={1000}
              placeholder="Tell me a bit about your project…"
              className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
          </div>

          {status.type !== "idle" && (
            <p className={`mt-4 text-sm ${status.type === "ok" ? "text-primary" : "text-destructive"}`}>
              {status.msg}
            </p>
          )}

          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition"
          >
            Send message <Send size={14} />
          </button>
        </form>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={255}
        className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
      />
    </div>
  );
}

function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover:border-primary hover:bg-secondary/50 transition group"
    >
      <span className="h-10 w-10 grid place-items-center rounded-xl bg-accent text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition">
        {icon}
      </span>
      <span className="flex-1">
        <span className="block text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
        <span className="block text-sm mt-0.5">{value}</span>
      </span>
    </a>
  );
}
