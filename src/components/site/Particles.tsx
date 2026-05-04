export function Particles() {
  const dots = Array.from({ length: 40 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((_, i) => {
        const size = Math.random() * 3 + 1;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * 6;
        const duration = 6 + Math.random() * 8;
        const colors = ["var(--gold)", "var(--platinum)", "var(--teal)"];
        const color = colors[i % colors.length];
        return (
          <span
            key={i}
            className="absolute rounded-full animate-drift"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
              background: color,
              boxShadow: `0 0 ${size * 4}px ${color}`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              opacity: 0.6,
            }}
          />
        );
      })}
    </div>
  );
}
