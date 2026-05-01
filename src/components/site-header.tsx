import { siteConfig } from "@/lib/site-config";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { label: "Showreel", href: "#showreel" },
  { label: "Music", href: "#music" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 sm:px-10 backdrop-blur-sm bg-background/80">
      <a
        href="#"
        className="font-display text-2xl tracking-wide text-foreground"
      >
        {siteConfig.firstName[0]}
        <span className="text-accent-orange">.</span>
        {siteConfig.lastName[0]}
      </a>

      <nav className="flex items-center gap-5 sm:gap-6">
        {navLinks.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="hidden text-sm font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-accent-orange sm:inline-block"
          >
            {label}
          </a>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  );
}
