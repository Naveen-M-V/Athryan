import { Zap, LockKeyhole, Radar, GitBranch, Users, Award } from "lucide-react";
import { ParallaxSection } from "./ParallaxLayer";
import { PremiumCard } from "./PremiumCard";

const features = [
  { icon: Zap, title: "Lightning Response", desc: "Sub-60-second incident response SLA across every engagement." },
  { icon: LockKeyhole, title: "Zero-Trust", desc: "Identity-first security applied across every endpoint and workload." },
  { icon: Radar, title: "24/7 Monitoring", desc: "Always-on SOC analysts watching your perimeter without pause." },
  { icon: GitBranch, title: "DevSecOps", desc: "Security baked into every commit, pipeline and deployment." },
  { icon: Users, title: "Expert Team", desc: "OSCP, CISSP and OSCE-certified specialists with field experience." },
  { icon: Award, title: "Compliance-Ready", desc: "SOC2, ISO 27001, HIPAA and PCI-DSS aligned out of the box." },
];

export function Features() {
  return (
    <ParallaxSection id="features" className="py-32 px-6" variant="cyber" speed={110}>
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[var(--teal)]">
            — Why choose us
          </span>
          <h2 className="mt-5 text-4xl md:text-6xl font-display font-bold">
            Built for{" "}
            <span className="text-gradient italic font-serif font-medium">
              resilience
            </span>
          </h2>
          <div className="hairline mx-auto mt-6 w-32" />
        </div>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <PremiumCard
              key={f.title}
              brackets={false}
              className="reveal p-7"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="flex items-start gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[var(--gold)]/25 bg-[var(--gold)]/5">
                  <f.icon className="h-5 w-5 text-[var(--gold)]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold tracking-wide">
                    {f.title}
                  </h3>
                  <div className="hairline mt-2 w-10" />
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            </PremiumCard>
          ))}
        </div>
      </div>
    </ParallaxSection>
  );
}
