import { Award, Clock, Zap, Shield, Star, Rocket } from "lucide-react";
import { useReveal } from "@/hooks/use-scroll";

export function WhyChooseUs() {
  useReveal();

  const features = [
    {
      icon: Award,
      title: "Unparalleled Expertise",
      desc: "Tailored solutions that precisely meet your unique business needs",
      highlight: true,
    },
    {
      icon: Zap,
      title: "Innovative Approach", 
      desc: "Cutting-edge technologies blended with creative strategies",
      highlight: false,
    },
    {
      icon: Star,
      title: "Quality at Affordable Rates",
      desc: "Premium services that prioritize your satisfaction above all",
      highlight: true,
    },
    {
      icon: Shield,
      title: "Comprehensive Solutions",
      desc: "From web development to branding - everything under one roof",
      highlight: false,
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      desc: "Seamless project management with reliable deadlines",
      highlight: false,
    },
    {
      icon: Rocket,
      title: "Exceptional Journey",
      desc: "Where excellence is our standard and your success is our goal",
      highlight: true,
    },
  ];

  return (
    <section id="why-choose-us" className="relative py-32 px-6 overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[var(--gold)]/8 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-[var(--platinum)]/8 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 reveal">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[var(--gold)]">
            — Why Choose Us
          </span>
          <h2 className="mt-5 text-4xl md:text-6xl font-display font-bold">
            Elevating Your{" "}
            <span className="text-gradient italic font-serif font-medium">
              Digital Presence
            </span>
          </h2>
          <div className="hairline mx-auto mt-6 w-32" />
        </div>

        {/* Main Description */}
        <div className="text-center max-w-4xl mx-auto mb-16 reveal">
          <p className="text-lg text-muted-foreground leading-relaxed">
            At <span className="text-[var(--gold)] font-medium">Athryan Media Solutions</span>, we offer unparalleled expertise, ensuring tailored solutions that precisely meet your needs. Stay ahead of the curve with our innovative approach, blending cutting-edge technologies with creative strategies. Enjoy quality at affordable rates, as we prioritize your satisfaction above all. From web development to branding, we provide comprehensive solutions under one roof, personalized to your goals. With us, you can rely on timely delivery and seamless project management. Join us for an exceptional digital journey, where excellence is our standard.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="reveal group relative"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative h-full p-8 rounded-2xl border border-[var(--gold)]/20 bg-[var(--card)]/50 backdrop-blur-sm hover:border-[var(--gold)]/40 transition-all duration-300">
                {/* Icon container */}
                <div className={`flex h-14 w-14 items-center justify-center rounded-xl border ${feature.highlight ? 'border-[var(--gold)]/40 bg-[var(--gold)]/20' : 'border-[var(--platinum)]/40 bg-[var(--platinum)]/20'} group-hover:scale-105 transition-transform duration-300`}>
                  <feature.icon className={`h-6 w-6 ${feature.highlight ? 'text-[var(--gold)]' : 'text-[var(--platinum)]'}`} />
                </div>

                <h3 className="mt-6 font-display font-semibold text-xl tracking-wide">
                  {feature.title}
                </h3>
                
                <div className={`hairline mt-3 w-12 ${feature.highlight ? 'bg-[var(--gold)]' : 'bg-[var(--platinum)]'}`} />
                
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats/Claims */}
        <div className="grid md:grid-cols-2 gap-8 items-center reveal">
          {/* Left side - Leader claim */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--gold)]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative p-8 rounded-2xl border border-[var(--gold)]/30 bg-[var(--card)]/50 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <Award className="h-8 w-8 text-[var(--gold)]" />
                <div>
                  <h4 className="font-display font-bold text-2xl tracking-wider text-[var(--gold)]">
                    Leader of
                  </h4>
                  <p className="text-lg text-muted-foreground">
                    Creative Agency
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Quality claim */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-l from-[var(--platinum)]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative p-8 rounded-2xl border border-[var(--platinum)]/30 bg-[var(--card)]/50 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <Star className="h-8 w-8 text-[var(--platinum)]" />
                <div>
                  <h4 className="font-display font-bold text-2xl tracking-wider text-[var(--platinum)]">
                    Highest Quality
                  </h4>
                  <p className="text-lg text-muted-foreground">
                    Development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 reveal">
          <p className="text-sm text-muted-foreground uppercase tracking-[0.3em]">
            Ready to elevate your digital presence?
          </p>
        </div>
      </div>
    </section>
  );
}
