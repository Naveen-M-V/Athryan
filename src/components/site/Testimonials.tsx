import { Quote } from "lucide-react";
import { ParallaxSection } from "./ParallaxLayer";
import { useParallax } from "@/hooks/use-scroll";
import { PremiumCard } from "./PremiumCard";

const items = [
  {
    quote:
      "Athryan Tech Solution caught an APT campaign in our network within hours of deployment. They saved us from what could have been a catastrophic breach.",
    name: "Sarah Chen",
    role: "CISO, Fintech Corp",
    initials: "SC",
  },
  {
    quote:
      "Their pen-test team is on another level. We finally feel ahead of the curve instead of always reacting.",
    name: "Marcus Riley",
    role: "VP Engineering, Healthtech",
    initials: "MR",
  },
  {
    quote:
      "Incredible response times and a team that genuinely understands cloud-native security. The best partner we have worked with.",
    name: "Priya Anand",
    role: "Head of Security, SaaS Platform",
    initials: "PA",
  },
];

export function Testimonials() {
  const { ref, progress } = useParallax<HTMLDivElement>();
  return (
    <ParallaxSection className="py-32 px-6" variant="electric" speed={110}>
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[var(--platinum)]">
            — Testimonials
          </span>
          <h2 className="mt-5 text-4xl md:text-6xl font-display font-bold">
            Trusted by the{" "}
            <span className="text-gradient italic font-serif font-medium">
              best
            </span>
          </h2>
          <div className="hairline mx-auto mt-6 w-32" />
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => {
            const offset = ((i - 1) * progress) * 35;
            return (
              <PremiumCard
                key={t.name}
                className="reveal p-8 min-h-[300px] flex flex-col"
                style={{
                  transitionDelay: `${i * 110}ms`,
                  transform: `translate3d(0, ${offset}px, 0)`,
                }}
              >
                <Quote className="h-7 w-7 text-[var(--gold)]/60" />
                <blockquote className="mt-5 font-serif text-lg leading-relaxed text-foreground/90 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="hairline mt-6" />
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--gold)]/30 bg-[var(--gold)]/5 font-display text-xs tracking-widest text-[var(--gold)]">
                    {t.initials}
                  </span>
                  <div>
                    <div className="font-display font-semibold text-sm">
                      {t.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {t.role}
                    </div>
                  </div>
                </figcaption>
              </PremiumCard>
            );
          })}
        </div>
      </div>
    </ParallaxSection>
  );
}
