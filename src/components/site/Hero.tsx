import { useScrollY } from "@/hooks/use-scroll";
import { Laptop } from "./Laptop";
import { Particles } from "./Particles";
import { ArrowRight, Lock } from "lucide-react";

export function Hero() {
  const y = useScrollY();
  const laptopScale = 1 + Math.min(y / 1200, 0.4);
  const laptopRotate = Math.min(y / 40, 12);
  const laptopTranslate = -y * 0.4;
  const laptopOpacity = Math.max(1 - y / 700, 0);
  const bgTranslate = y * 0.2;
  const gridTranslate = y * 0.5;
  const headlineTranslate = y * 0.3;
  const headlineOpacity = Math.max(1 - y / 500, 0);

  return (
    <section
      id="top"
      className="relative min-h-[140vh] overflow-hidden"
    >
      <div
        className="absolute inset-0 -z-20"
        style={{ transform: `translate3d(0, ${bgTranslate}px, 0)` }}
      >
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      </div>

      <div
        className="absolute inset-0 -z-10 grid-bg animate-grid-pan opacity-50"
        style={{ transform: `translate3d(0, ${gridTranslate}px, 0)` }}
      />

      <Particles />
      <FloatingChips y={y} />

      <div
        className="relative z-10 pt-40 px-6 text-center max-w-5xl mx-auto"
        style={{
          transform: `translate3d(0, ${headlineTranslate}px, 0)`,
          opacity: headlineOpacity,
        }}
      >
        <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-8">
          <Lock className="h-3 w-3 text-[var(--gold)]" />
          Trusted by 500+ enterprises worldwide
        </span>
        <h1 className="font-display text-5xl md:text-7xl font-black leading-[1.05] tracking-tight">
          Securing the{" "}
          <span className="text-gradient italic font-serif font-medium">
            Digital Future
          </span>
        </h1>
        <div className="hairline mx-auto mt-8 w-40" />
        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Advanced cybersecurity solutions for modern threats. Stay one step
          ahead of adversaries with intelligence-driven defense.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-500 hover:scale-105 shadow-[0_10px_40px_-10px_oklch(0.72_0.15_250/0.6)]"
          >
            Get Protected
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold hover:bg-white/[0.06] transition-all duration-500"
          >
            View Services
          </a>
        </div>
      </div>

      <div
        className="relative z-10 mt-16 px-6"
        style={{
          transform: `translate3d(0, ${laptopTranslate}px, 0) scale(${laptopScale}) rotateX(${laptopRotate}deg)`,
          opacity: laptopOpacity,
          transformStyle: "preserve-3d",
          perspective: "1200px",
          willChange: "transform, opacity",
        }}
      >
        <Laptop />
      </div>
    </section>
  );
}

function FloatingChips({ y }: { y: number }) {
  const chips = [
    { text: "$ nmap -sV target", top: "18%", left: "8%", speed: 0.15, delay: 0 },
    { text: "[OK] firewall.up", top: "30%", right: "10%", speed: 0.25, delay: 1 },
    { text: "AES-256 verified", top: "55%", left: "5%", speed: 0.2, delay: 2 },
    { text: "threat.detected = false", top: "65%", right: "8%", speed: 0.1, delay: 0.5 },
  ];
  return (
    <>
      {chips.map((c, i) => (
        <div
          key={i}
          className="absolute hidden md:block glass rounded-md px-3 py-1.5 text-xs font-mono text-[var(--gold)]/90 animate-float pointer-events-none"
          style={{
            top: c.top,
            left: c.left,
            right: c.right,
            transform: `translate3d(0, ${-y * c.speed}px, 0)`,
            animationDelay: `${c.delay}s`,
          }}
        >
          {c.text}
        </div>
      ))}
    </>
  );
}
