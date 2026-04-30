import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Bio } from "@/components/sections/bio";
import { Music } from "@/components/sections/music";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Bio />
        <Music />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
