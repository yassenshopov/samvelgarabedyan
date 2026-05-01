import { Parallax } from "@/components/parallax";
import { siteConfig } from "@/lib/site-config";

export function Music() {
  return (
    <section className="px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <Parallax speed={0.08}>
          <div className="mb-12 flex items-center gap-4">
            <h2 className="shrink-0 font-display text-3xl tracking-wide text-foreground sm:text-4xl">
              MY MUSIC
            </h2>
            <div className="h-px flex-1 bg-border" />
            <span className="text-accent-orange text-2xl">&#10022;</span>
          </div>
        </Parallax>

        <iframe
          src={siteConfig.reelCrafterUrl}
          className="w-full rounded-lg border-0"
          height="400"
          scrolling="no"
          allow="autoplay; fullscreen"
          allowFullScreen
          title={`${siteConfig.name} — Music Reel`}
        />

        <div className="mt-6 text-center">
          <a
            href={siteConfig.fullReelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent-orange"
          >
            View full reel &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
