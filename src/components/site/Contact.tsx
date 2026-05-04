import { useState } from "react";
import { Send, Mail, MapPin, Phone, Check } from "lucide-react";
import { ParallaxSection } from "./ParallaxLayer";
import { useParallax } from "@/hooks/use-scroll";
import { PremiumCard } from "./PremiumCard";

export function Contact() {
  const [sent, setSent] = useState(false);
  const { ref, progress } = useParallax<HTMLDivElement>();
  return (
    <ParallaxSection id="contact" className="py-32 px-6" variant="neon" speed={100}>
      <div ref={ref} className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        <div
          className="reveal"
          style={{ transform: `translate3d(0, ${progress * -25}px, 0)` }}
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[var(--gold)]">
            — Get in touch
          </span>
          <h2 className="mt-5 text-4xl md:text-6xl font-display font-bold">
            Ready to{" "}
            <span className="text-gradient italic font-serif font-medium">
              secure
            </span>{" "}
            your future?
          </h2>
          <div className="hairline mt-6 w-32" />
          <p className="mt-6 text-muted-foreground max-w-md leading-relaxed">
            Speak with our experts about a tailored security assessment. We will
            respond within 24 hours.
          </p>
          <ul className="mt-12 space-y-5 text-sm">
            {[
              { Icon: Mail, text: "info@athryantech.com" },
              { Icon: Phone, text: "+91 86083 10101" },
              { Icon: MapPin, text: "23A - 137, bharathipuram 1st Street, Shennoy Nagar, Chennai - 600030, Tamilnadu" },
            ].map(({ Icon, text }) => (
              <li key={text} className="flex items-center gap-4 group">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--gold)]/25 bg-[var(--gold)]/5 group-hover:border-[var(--gold)]/60 transition-colors">
                  <Icon className="h-4 w-4 text-[var(--gold)]" />
                </span>
                <span className="text-foreground/85">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <PremiumCard
          trace
          className="reveal p-8 md:p-10"
          style={{ transform: `translate3d(0, ${progress * 25}px, 0)` }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="space-y-5"
          >
            <Field label="Name" id="name" placeholder="Jane Doe" />
            <Field label="Email" id="email" type="email" placeholder="jane@company.com" />
            <Field label="Company" id="company" placeholder="Acme Inc." />
            <div>
              <label htmlFor="msg" className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
                Message
              </label>
              <textarea
                id="msg"
                rows={4}
                required
                placeholder="Tell us about your security needs…"
                className="w-full rounded-lg bg-input/40 border border-border px-4 py-3 text-sm outline-none focus:border-[var(--gold)] focus:shadow-[0_0_0_3px_oklch(0.72_0.15_250/0.15)] transition-all"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 w-full rounded-lg bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:scale-[1.01] transition-all duration-300 shadow-[0_10px_40px_-10px_oklch(0.72_0.15_250/0.5)]"
            >
              {sent ? (
                <>
                  Message sent
                  <Check className="h-4 w-4" />
                </>
              ) : (
                <>
                  Send Message
                  <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </PremiumCard>
      </div>
    </ParallaxSection>
  );
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-lg bg-input/40 border border-border px-4 py-3 text-sm outline-none focus:border-[var(--gold)] focus:shadow-[0_0_0_3px_oklch(0.72_0.15_250/0.15)] transition-all"
      />
    </div>
  );
}
