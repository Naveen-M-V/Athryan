import { ShieldCheck, Cpu, Globe2 } from "lucide-react";
import { ParallaxSection } from "./ParallaxLayer";
import { PremiumCard } from "./PremiumCard";

const cards = [
  {
    icon: ShieldCheck,
    title: "Web & App Development",
    desc: "Sleek, responsive websites and powerful mobile applications that bring your vision to life with cutting-edge technology.",
    tag: "01",
  },
  {
    icon: Cpu,
    title: "Content & Branding",
    desc: "Engaging content writing and eye-catching branding that makes your business stand out in the digital landscape.",
    tag: "02",
  },
  {
    icon: Globe2,
    title: "Digital Marketing",
    desc: "Strategic digital marketing campaigns that boost your online presence and drive measurable results for your business.",
    tag: "03",
  },
];

export function About() {
  return (
    <ParallaxSection id="about" className="py-32 px-6" variant="neon" speed={90}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[var(--gold)]">
            — About the firm
          </span>
          <h2 className="mt-5 text-4xl md:text-6xl font-display font-bold">
            Digital{" "}
            <span className="text-gradient italic font-serif font-medium">
              excellence
            </span>{" "}
            for everyone
          </h2>
          <div className="hairline mx-auto mt-6 w-32" />
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Welcome to <span className="text-[var(--gold)] font-medium">Athryan Media Solutions</span> – your one-stop hub for top-tier digital design services in <span className="italic font-serif">Tirunelveli</span>, est. 2020! From sleek Web & App Development to engaging Content Writing and eye-catching Branding, we&apos;ve got the expertise to make your vision a reality.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            At Athryan Media Solutions, we&apos;re all about making tech <span className="text-[var(--platinum)] font-medium">accessible</span> to everyone. Whether you&apos;re a big business or a budding entrepreneur, we&apos;ve got the tools to elevate your brand and make it shine. But here&apos;s the kicker – our services aren&apos;t just high-quality, they&apos;re <span className="text-[var(--gold)] font-medium">affordable</span> too! So why settle for ordinary when you can join the <span className="text-gradient font-bold">Athryan revolution</span>? Let&apos;s make your digital dreams a reality – together!
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <PremiumCard
              key={c.title}
              trace
              className="reveal p-8 min-h-[280px]"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--gold)]/30 bg-[var(--gold)]/5">
                  <c.icon className="h-5 w-5 text-[var(--gold)]" />
                </div>
                <span className="font-display text-xs tracking-[0.3em] text-muted-foreground/70">
                  {c.tag}
                </span>
              </div>
              <h3 className="mt-8 text-xl font-display font-semibold">
                {c.title}
              </h3>
              <div className="hairline mt-3 w-12" />
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {c.desc}
              </p>
            </PremiumCard>
          ))}
        </div>
      </div>
    </ParallaxSection>
  );
}
