import logo from "@/assets/logo.png";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Features", href: "#features" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <nav className="glass rounded-full px-5 py-3 flex items-center justify-between border border-[var(--gold)]/10">
          <a href="#top" className="flex items-center gap-2.5">
            <img
                src={logo}
                alt="Athryan Tech Solution Logo"
                className="h-10 w-10 object-contain"
              />
            <span className="font-display font-bold tracking-[0.2em] text-sm">
              ATHRYAN TECH<span className="text-gradient"> SOLUTION</span>
            </span>
          </a>
          <ul className="hidden md:flex items-center gap-9 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative hover:text-foreground transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[var(--gold)] after:transition-all hover:after:w-full"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="text-[11px] uppercase tracking-[0.2em] font-medium px-4 py-2 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] text-primary-foreground hover:opacity-90 transition-all duration-300 hover:scale-105"
          >
            Get Protected
          </a>
        </nav>
      </div>
    </header>
  );
}
