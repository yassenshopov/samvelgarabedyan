import { MusicBars } from "@/components/music-bars";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-background px-6 text-center sm:px-10">
      {/* Music bars background */}
      <MusicBars className="pointer-events-none absolute inset-0 h-full w-full" />

      {/* Grid overlay */}
      <div className="hero-grid pointer-events-none absolute inset-0" />

      {/* Radial fade so edges blend to background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 45%, transparent 20%, var(--color-hero-bg) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
          Making music since {siteConfig.sinceYear}
        </p>

        <h1 className="font-display leading-[0.85] tracking-tight text-accent-orange">
          <span className="block text-[clamp(4rem,15vw,12rem)]">
            {siteConfig.firstName}
          </span>
          <span className="block text-[clamp(4rem,15vw,12rem)]">
            {siteConfig.lastName}
          </span>
        </h1>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 z-10 flex flex-col items-center gap-2">
        <div
          className="h-10 w-px bg-accent-orange"
          style={{ animation: "scroll-pulse 2s ease-in-out infinite" }}
        />
        <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          Scroll
        </span>
      </div>
    </section>
  );
}
