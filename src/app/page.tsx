import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-24 text-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
          Samvel Garabedyan
        </h1>
        <p className="max-w-md text-lg text-muted-foreground">
          A simple website built with Next.js, Tailwind CSS, and shadcn/ui.
        </p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button size="lg">Get in touch</Button>
        <Button size="lg" variant="outline">
          Learn more
        </Button>
      </div>
    </main>
  );
}
