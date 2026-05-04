import { Bug, Network, Eye, Cloud, ArrowUpRight } from "lucide-react";
import { ParallaxSection } from "./ParallaxLayer";
import { useParallax } from "@/hooks/use-scroll";
import { PremiumCard } from "./PremiumCard";

const services = [
  {
    icon: Bug,
    title: "Penetration Testing",
    desc: "Real-world attack simulations that uncover vulnerabilities before adversaries can exploit them.",
    tag: "Offensive",
  },
  {
    icon: Network,
    title: "Network Security",
    desc: "Next-generation firewalls, micro-segmentation and continuous traffic intelligence.",
    tag: "Perimeter",
  },
  {
    icon: Eye,
    title: "Threat Intelligence",
    desc: "Curated intel feeds and dark-web monitoring to anticipate emerging threats with clarity.",
    tag: "Analysis",
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    desc: "Hardened cloud configurations, IAM auditing and runtime workload protection.",
    tag: "Cloud-Native",
  },
];

export function Services() {
  const { ref, progress } = useParallax<HTMLDivElement>();
  return (
    <ParallaxSection id="services" className="py-32 px-6" variant="electric" speed={100}>
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[var(--platinum)]">
            — Practice areas
          </span>
          <h2 className="mt-5 text-4xl md:text-6xl font-display font-bold">
            Our{" "}
            <span className="text-gradient italic font-serif font-medium">
              Services
            </span>
          </h2>
          <div className="hairline mx-auto mt-6 w-32" />
          <p className="mt-6 text-muted-foreground">
            End-to-end protection for every layer of your digital infrastructure.
          </p>
        </div>

        <div className="mt-20 grid sm:grid-cols-2 gap-6">
          {services.map((s, i) => {
            const offset = (i % 2 === 0 ? -1 : 1) * progress * 30;
            return (
              <PremiumCard
                key={s.title}
                trace
                className="reveal p-10 group"
                style={{
                  transitionDelay: `${i * 90}ms`,
                  transform: `translate3d(0, ${offset}px, 0)`,
                }}
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[var(--gold)]/25 bg-gradient-to-br from-[var(--gold)]/10 to-transparent">
                    <s.icon className="h-6 w-6 text-[var(--gold)]" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground/70">
                    {s.tag}
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-display font-semibold">
                  {s.title}
                </h3>
                <div className="hairline mt-4 w-16" />
                <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
                <div className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[var(--gold)] opacity-70 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </PremiumCard>
            );
          })}
        </div>
      </div>
    </ParallaxSection>
  );
}
