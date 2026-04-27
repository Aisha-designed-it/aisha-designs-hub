import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl tracking-tight">Aisha Aliyu Arinola</p>
          <p className="mt-2 text-sm text-muted-foreground max-w-xs">
            Designing intuitive digital experiences with clarity and creativity.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Navigate</p>
          <Link to="/about" className="hover:text-primary transition">About</Link>
          <Link to="/portfolio" className="hover:text-primary transition">Portfolio</Link>
          <Link to="/services" className="hover:text-primary transition">Services</Link>
          <Link to="/contact" className="hover:text-primary transition">Contact</Link>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Get in touch</p>
          <a href="mailto:aliyuaishah50@gmail.com" className="flex items-center gap-2 hover:text-primary transition">
            <Mail size={16} /> aliyuaishah50@gmail.com
          </a>
          <a href="tel:08146611930" className="flex items-center gap-2 hover:text-primary transition">
            <Phone size={16} /> 0814 661 1930
          </a>
          <a
            href="https://www.linkedin.com/in/aisha-aliyu-arinola"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-primary transition"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Aisha Aliyu Arinola. All rights reserved.</span>
          <span className="font-display italic">Made with care.</span>
        </div>
      </div>
    </footer>
  );
}
