import { useEffect, useRef, useState } from "react";
import { ParallaxSection } from "./ParallaxLayer";
import { useParallax } from "@/hooks/use-scroll";
import { PremiumCard } from "./PremiumCard";

const stats = [
  { value: 500, suffix: "+", label: "Threats Prevented Daily" },
  { value: 99.99, suffix: "%", label: "Uptime Guarantee", decimals: 2 },
  { value: 250, suffix: "+", label: "Enterprise Clients" },
  { value: 60, suffix: "s", label: "Avg Response Time" },
];

function Counter({ value, suffix, decimals = 0 }: { value: number; suffix: string; decimals?: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const dur = 1800;
          const tick = (now: number) => {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(value * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {n.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function Stats() {
  const { ref, progress } = useParallax<HTMLDivElement>();
  return (
    <ParallaxSection className="py-24 px-6" variant="mixed" speed={120}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <PremiumCard
          trace
          className="p-10 md:p-16"
          style={{
            transform: `translate3d(0, ${progress * -20}px, 0) rotateX(${progress * 2}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="text-center relative"
              >
                {i > 0 && (
                  <span className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-12 w-px bg-gradient-to-b from-transparent via-[var(--gold)]/30 to-transparent" />
                )}
                <div className="font-display text-4xl md:text-6xl font-black text-gradient">
                  <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
                </div>
                <div className="hairline mx-auto mt-3 w-10" />
                <p className="mt-3 text-[10px] md:text-xs text-muted-foreground uppercase tracking-[0.3em]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </PremiumCard>
      </div>
    </ParallaxSection>
  );
}
