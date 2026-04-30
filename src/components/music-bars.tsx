"use client";

import { useEffect, useRef } from "react";

const BAR_COUNT = 48;
const MIN_HEIGHT = 0.03;
const MAX_HEIGHT = 0.45;

function getAccentColor(el: HTMLElement): [number, number, number] {
  const probe = document.createElement("div");
  probe.style.color = "var(--accent-orange)";
  probe.style.position = "absolute";
  probe.style.visibility = "hidden";
  el.appendChild(probe);
  const computed = getComputedStyle(probe).color;
  el.removeChild(probe);

  const match = computed.match(/(\d+\.?\d*)/g);
  if (match && match.length >= 3) {
    return [Number(match[0]), Number(match[1]), Number(match[2])];
  }
  return [200, 100, 30];
}

export function MusicBars({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    let accentRgb: [number, number, number] = getAccentColor(canvas);
    let colorCheckFrame = 0;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas!.getBoundingClientRect();
      canvas!.width = rect.width * dpr;
      canvas!.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();
    window.addEventListener("resize", resize);

    let startTime: number | null = null;

    function draw(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const t = timestamp - startTime;

      const rect = canvas!.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      if (w === 0 || h === 0) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }

      const dpr = window.devicePixelRatio || 1;
      ctx.clearRect(0, 0, w * dpr, h * dpr);

      colorCheckFrame++;
      if (colorCheckFrame % 60 === 0) {
        accentRgb = getAccentColor(canvas!);
      }

      const barWidth = w / BAR_COUNT;
      const radius = 2;
      const [r, g, b] = accentRgb;

      const isDark = document.documentElement.classList.contains("dark");
      const alpha = isDark ? 0.2 : 0.08;
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;

      for (let i = 0; i < BAR_COUNT; i++) {
        const pos = i / (BAR_COUNT - 1);

        const wave1 = Math.sin(t * 0.0012 + pos * Math.PI * 3) * 0.5 + 0.5;
        const wave2 = Math.sin(t * 0.0008 + pos * Math.PI * 5) * 0.5 + 0.5;

        const centerBias = 1 - Math.abs(pos * 2 - 1);
        const centerWeight = 0.3 + centerBias * 0.7;

        const raw = (wave1 * 0.6 + wave2 * 0.4) * centerWeight;
        const barH = (MIN_HEIGHT + raw * (MAX_HEIGHT - MIN_HEIGHT)) * h;

        const x = i * barWidth;
        const y = (h - barH) / 2;

        ctx.beginPath();
        ctx.roundRect(x, y, barWidth, barH, radius);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} />;
}
