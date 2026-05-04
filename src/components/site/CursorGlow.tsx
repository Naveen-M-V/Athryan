import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setEnabled(false);
      return;
    }
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      // Service-card spotlight tracking
      const target = (e.target as HTMLElement)?.closest<HTMLElement>("#services .group");
      if (target) {
        const r = target.getBoundingClientRect();
        target.style.setProperty("--mx", `${e.clientX - r.left}px`);
        target.style.setProperty("--my", `${e.clientY - r.top}px`);
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[100] h-6 w-6 rounded-full mix-blend-screen transition-transform duration-100"
      style={{
        left: pos.x - 12,
        top: pos.y - 12,
        background: "radial-gradient(circle, oklch(0.72 0.15 250 / 0.6), transparent 70%)",
        boxShadow: "0 0 30px oklch(0.72 0.15 250 / 0.5)",
      }}
    />
  );
}
