import { Parallax } from "@/components/parallax";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 text-center sm:px-10">
      {/* Aurora ribbons — parallax at slower rate so they lag behind scroll */}
      <Parallax speed={-0.15} className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0">
          <div
            className="absolute top-[38%] left-1/2 h-[350px] w-[120vw] origin-center -translate-x-1/2 rounded-[50%]"
            style={{
              background:
                "radial-gradient(ellipse 100% 100% at 50% 50%, oklch(0.72 0.19 45 / 0.55) 0%, oklch(0.60 0.20 35 / 0.25) 40%, transparent 70%)",
              animation: "aurora-1 10s ease-in-out infinite",
              filter: "blur(30px)",
            }}
          />
          <div
            className="absolute top-[44%] left-[40%] h-[220px] w-[80vw] origin-center rounded-[50%]"
            style={{
              background:
                "radial-gradient(ellipse 100% 100% at 50% 50%, oklch(0.80 0.17 55 / 0.5) 0%, oklch(0.65 0.19 40 / 0.15) 50%, transparent 75%)",
              animation: "aurora-2 8s ease-in-out infinite",
              filter: "blur(20px)",
            }}
          />
          <div
            className="absolute top-[50%] left-[55%] h-[140px] w-[70vw] origin-center rounded-[50%]"
            style={{
              background:
                "radial-gradient(ellipse 100% 100% at 50% 50%, oklch(0.85 0.15 60 / 0.45) 0%, oklch(0.70 0.18 45 / 0.1) 60%, transparent 80%)",
              animation: "aurora-3 6.5s ease-in-out infinite",
              filter: "blur(12px)",
            }}
          />
        </div>
      </Parallax>

      {/* Grid overlay */}
      <div className="hero-grid pointer-events-none absolute inset-0" />

      {/* Radial fade so edges blend to background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 45%, transparent 20%, oklch(0.10 0 0) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
          Making music since {siteConfig.sinceYear}
        </p>

        <h1 className="font-display leading-[0.85] tracking-tight text-accent-orange drop-shadow-[0_0_40px_oklch(0.70_0.17_50_/_0.3)]">
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
