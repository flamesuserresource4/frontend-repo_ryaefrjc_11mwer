import { Menu, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex h-14 items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md px-4">
          <a href="#hero" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-indigo-500 to-sky-400 shadow-[0_0_18px_rgba(99,102,241,0.8)]" />
            <span className="text-sm font-semibold tracking-tight text-white/90">AI Software Engineer</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200">
              <Linkedin size={18} />
            </a>
            <a href="#contact" aria-label="Email" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200">
              <Mail size={18} />
            </a>
          </div>

          <button className="md:hidden p-2 rounded-lg bg-white/5 text-slate-200" onClick={() => setOpen((v) => !v)}>
            <Menu size={20} />
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-md px-4 py-3 md:hidden">
            <nav className="flex flex-col gap-2">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-slate-200">
                  {l.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-2">
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 text-slate-200"><Github size={18} /></a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 text-slate-200"><Linkedin size={18} /></a>
                <a href="#contact" className="p-2 rounded-lg bg-white/5 text-slate-200"><Mail size={18} /></a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
