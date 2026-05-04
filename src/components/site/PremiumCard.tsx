import { ReactNode, useRef, MouseEvent, CSSProperties } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  brackets?: boolean;
  trace?: boolean;
};

export function PremiumCard({
  children,
  className = "",
  style,
  brackets = true,
  trace = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      style={style}
      className={`premium-card shine ${trace ? "border-trace" : ""} ${
        brackets ? "corner-brackets" : ""
      } ${className}`}
    >
      {brackets && (
        <>
          <span className="corner left-3 top-3 border-l border-t" />
          <span className="corner right-3 top-3 border-r border-t" />
          <span className="corner left-3 bottom-3 border-l border-b" />
          <span className="corner right-3 bottom-3 border-r border-b" />
        </>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
