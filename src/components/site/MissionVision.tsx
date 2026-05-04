import { Target, Eye, Sparkles, Zap } from "lucide-react";
import { useReveal } from "@/hooks/use-scroll";

export function MissionVision() {
  useReveal();

  return (
    <section id="mission" className="relative py-32 px-6 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-[var(--gold)]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-[var(--platinum)]/10 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 reveal">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[var(--gold)]">
            — Our Purpose
          </span>
          <h2 className="mt-5 text-4xl md:text-6xl font-display font-bold">
            Driven by{" "}
            <span className="text-gradient italic font-serif font-medium">
              purpose
            </span>
          </h2>
          <div className="hairline mx-auto mt-6 w-32" />
        </div>

        {/* Split Cards Layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Mission Card */}
          <div className="reveal group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative h-full p-8 md:p-10 rounded-2xl border border-[var(--gold)]/20 bg-[var(--card)]/50 backdrop-blur-sm overflow-hidden">
              {/* Animated corner accents */}
              <div className="absolute top-0 left-0 w-20 h-px bg-gradient-to-r from-[var(--gold)] to-transparent" />
              <div className="absolute top-0 left-0 w-px h-20 bg-gradient-to-b from-[var(--gold)] to-transparent" />
              <div className="absolute bottom-0 right-0 w-20 h-px bg-gradient-to-l from-[var(--gold)] to-transparent" />
              <div className="absolute bottom-0 right-0 w-px h-20 bg-gradient-to-t from-[var(--gold)] to-transparent" />

              {/* Floating icon */}
              <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Target className="w-32 h-32 text-[var(--gold)]" strokeWidth={0.5} />
              </div>

              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-[var(--gold)]/30 bg-[var(--gold)]/10 group-hover:bg-[var(--gold)]/20 transition-colors">
                    <Target className="h-6 w-6 text-[var(--gold)]" />
                  </span>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-muted-foreground">
                      01
                    </span>
                    <h3 className="font-display font-bold text-2xl tracking-wider">
                      OUR MISSION
                    </h3>
                  </div>
                </div>

                <div className="hairline w-16 mb-6" />

                <p className="text-lg text-foreground/90 leading-relaxed font-light">
                  At <span className="text-[var(--gold)] font-medium">Athryan Media Solutions</span>, we blend{" "}
                  <span className="italic font-serif">creativity</span> and{" "}
                  <span className="italic font-serif">tech</span> to craft tailored digital experiences, exceeding expectations with expertise, affordability, and client satisfaction to set new standards.
                </p>

                <div className="mt-8 flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  <Sparkles className="h-3 w-3 text-[var(--gold)]" />
                  <span>Excellence in every pixel</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="reveal group relative" style={{ transitionDelay: "150ms" }}>
            <div className="absolute inset-0 bg-gradient-to-bl from-[var(--platinum)]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative h-full p-8 md:p-10 rounded-2xl border border-[var(--platinum)]/20 bg-[var(--card)]/50 backdrop-blur-sm overflow-hidden">
              {/* Animated corner accents */}
              <div className="absolute top-0 right-0 w-20 h-px bg-gradient-to-l from-[var(--platinum)] to-transparent" />
              <div className="absolute top-0 right-0 w-px h-20 bg-gradient-to-b from-[var(--platinum)] to-transparent" />
              <div className="absolute bottom-0 left-0 w-20 h-px bg-gradient-to-r from-[var(--platinum)] to-transparent" />
              <div className="absolute bottom-0 left-0 w-px h-20 bg-gradient-to-t from-[var(--platinum)] to-transparent" />

              {/* Floating icon */}
              <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Eye className="w-32 h-32 text-[var(--platinum)]" strokeWidth={0.5} />
              </div>

              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-[var(--platinum)]/30 bg-[var(--platinum)]/10 group-hover:bg-[var(--platinum)]/20 transition-colors">
                    <Eye className="h-6 w-6 text-[var(--platinum)]" />
                  </span>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-muted-foreground">
                      02
                    </span>
                    <h3 className="font-display font-bold text-2xl tracking-wider">
                      OUR VISION
                    </h3>
                  </div>
                </div>

                <div className="hairline w-16 mb-6" />

                <p className="text-lg text-foreground/90 leading-relaxed font-light">
                  To pioneer <span className="text-[var(--platinum)] font-medium">accessible</span> and{" "}
                  <span className="text-[var(--platinum)] font-medium">impactful</span> digital solutions, revolutionizing{" "}
                  <span className="italic font-serif">Tirunelveli&apos;s</span> tech landscape and beyond.
                </p>

                <div className="mt-8 flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  <Zap className="h-3 w-3 text-[var(--platinum)]" />
                  <span>Leading the digital revolution</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Connecting Line */}
        <div className="hidden lg:flex justify-center my-12 reveal">
          <div className="w-px h-16 bg-gradient-to-b from-[var(--gold)] via-[var(--platinum)] to-transparent" />
        </div>

        {/* Bottom Tagline */}
        <div className="text-center mt-12 reveal">
          <p className="text-sm text-muted-foreground uppercase tracking-[0.3em]">
            Crafting the future of digital experiences
          </p>
        </div>
      </div>
    </section>
  );
}
