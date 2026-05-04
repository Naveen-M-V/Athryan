import { useParallax } from "@/hooks/use-scroll";
import { ReactNode } from "react";

/**
 * Wraps a section and exposes parallax-driven decorative layers behind its children.
 * `speed` controls how strongly the background moves (px per progress unit).
 */
export function ParallaxSection({
  children,
  className = "",
  speed = 80,
  variant = "neon",
  id,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
  variant?: "neon" | "electric" | "cyber" | "mixed";
  id?: string;
}) {
  const { ref, progress } = useParallax<HTMLElement>();

  const colorMap = {
    neon: "var(--gold)",
    electric: "var(--platinum)",
    cyber: "var(--teal)",
    mixed: "var(--gold)",
  };
  const color = colorMap[variant];
  const color2 =
    variant === "mixed" ? "var(--platinum)" : colorMap[variant];

  const bgY = progress * speed;
  const blobAY = -progress * speed * 1.4;
  const blobBY = progress * speed * 1.8;
  const gridY = progress * speed * 0.6;
  const contentY = progress * speed * 0.15;

  return (
    <section
      ref={ref}
      id={id}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Moving grid */}
      <div
        className="absolute inset-0 grid-bg opacity-[0.07] pointer-events-none"
        style={{ transform: `translate3d(0, ${gridY}px, 0)` }}
      />

      {/* Glow blob A */}
      <div
        className="absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 70%)`,
          transform: `translate3d(0, ${blobAY}px, 0)`,
        }}
      />

      {/* Glow blob B */}
      <div
        className="absolute -right-32 bottom-1/4 h-[480px] w-[480px] rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${color2}, transparent 70%)`,
          transform: `translate3d(0, ${blobBY}px, 0)`,
        }}
      />

      {/* Subtle background sheen that drifts opposite */}
      <div
        className="absolute inset-x-0 top-0 h-full pointer-events-none opacity-40"
        style={{
          background: `linear-gradient(180deg, transparent, ${color}08 50%, transparent)`,
          transform: `translate3d(0, ${bgY}px, 0)`,
        }}
      />

      {/* Content with very subtle counter-parallax */}
      <div
        className="relative"
        style={{ transform: `translate3d(0, ${contentY}px, 0)` }}
      >
        {children}
      </div>
    </section>
  );
}
