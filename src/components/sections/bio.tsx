import { Parallax } from "@/components/parallax";
import { siteConfig } from "@/lib/site-config";

export function Bio() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-24 text-center sm:px-10">
      <Parallax speed={0.1}>
        <div className="mx-auto mb-8 flex items-center justify-center">
          <span className="text-accent-orange text-2xl">&#10022;</span>
        </div>
      </Parallax>
      <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
        {siteConfig.bio}
      </p>
    </section>
  );
}
