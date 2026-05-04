import dashboard from "@/assets/dashboard-screen.jpg";

export function Laptop({ style }: { style?: React.CSSProperties }) {
  return (
    <div
      className="relative mx-auto w-full max-w-4xl"
      style={style}
    >
      {/* glow */}
      <div className="absolute -inset-10 rounded-full bg-[var(--gold)]/15 blur-3xl animate-pulse-glow" />

      {/* screen */}
      <div className="relative rounded-t-2xl bg-[#0a0a0f] p-3 border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.85)]">
        <div className="absolute top-0 inset-x-0 h-6 flex items-center justify-center">
          <div className="h-1.5 w-16 rounded-full bg-black/60" />
        </div>
        <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-white/10 scanline">
          <img
            src={dashboard}
            alt="Cybersecurity dashboard interface"
            className="w-full h-full object-cover"
            width={1600}
            height={1024}
          />
          <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent animate-scan" />
        </div>
      </div>

      {/* base */}
      <div className="relative mx-auto h-3 w-[105%] -translate-x-[2.5%] rounded-b-3xl bg-gradient-to-b from-[#1a1a22] to-[#0a0a0f] border-x border-b border-white/10" />
      <div className="mx-auto h-1 w-[60%] rounded-b-xl bg-black/60" />
    </div>
  );
}
