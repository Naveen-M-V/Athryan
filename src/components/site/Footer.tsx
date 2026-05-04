import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <img
                src={logo}
                alt="Athryan Tech Solution Logo"
                className="h-9 w-9 object-contain"
              />
          <span className="font-display font-bold text-sm tracking-[0.2em]">
            ATHRYAN TECH<span className="text-gradient"> SOLUTION</span>
          </span>
        </div>
        <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          © {new Date().getFullYear()} Athryan Tech Solution. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
