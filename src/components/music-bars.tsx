"use client";

import { useEffect, useRef } from "react";

const BAR_COUNT = 48;
const MIN_HEIGHT = 0.05;
const MAX_HEIGHT = 0.95;

function seededRandom(i: number, t: number) {
  const x = Math.sin(i * 127.1 + t * 0.0008) * 43758.5453;
  return x - Math.floor(x);
}

export function MusicBars({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const speeds = Array.from({ length: BAR_COUNT }, (_, i) =>
      0.6 + seededRandom(i, 0) * 1.4,
    );
    const phases = Array.from({ length: BAR_COUNT }, (_, i) =>
      seededRandom(i + 100, 0) * Math.PI * 2,
    );
    const freqs = Array.from({ length: BAR_COUNT }, (_, i) =>
      0.8 + seededRandom(i + 200, 0) * 0.6,
    );

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas!.getBoundingClientRect();
      canvas!.width = rect.width * dpr;
      canvas!.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    }

    resize();
    window.addEventListener("resize", resize);

    let startTime: number | null = null;

    function draw(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const t = timestamp - startTime;

      const { width, height } = canvas!.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      ctx.clearRect(0, 0, width * dpr, height * dpr);

      const gap = 3;
      const totalGaps = (BAR_COUNT - 1) * gap;
      const barWidth = (width - totalGaps) / BAR_COUNT;

      const style = getComputedStyle(canvas!);
      const color = style.getPropertyValue("--bar-color").trim() || "oklch(0.70 0.17 50)";

      for (let i = 0; i < BAR_COUNT; i++) {
        const wave1 = Math.sin(t * 0.001 * speeds[i] + phases[i]) * 0.5 + 0.5;
        const wave2 =
          Math.sin(t * 0.0006 * freqs[i] + phases[i] * 1.7) * 0.5 + 0.5;
        const wave3 =
          Math.sin(t * 0.0003 + i * 0.15) * 0.5 + 0.5;

        const centerBias = 1 - Math.abs((i / (BAR_COUNT - 1)) * 2 - 1);
        const centerWeight = 0.3 + centerBias * 0.7;

        const raw = (wave1 * 0.5 + wave2 * 0.3 + wave3 * 0.2) * centerWeight;
        const h =
          (MIN_HEIGHT + raw * (MAX_HEIGHT - MIN_HEIGHT)) * height;

        const x = i * (barWidth + gap);
        const y = (height - h) / 2;

        const alpha = 0.25 + raw * 0.55;
        ctx.fillStyle = color.replace(")", ` / ${alpha})`).replace("oklch(", "oklch(");
        ctx.beginPath();
        ctx.roundRect(x, y, barWidth, h, barWidth / 2);
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

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={
        {
          "--bar-color": "var(--accent-orange)",
        } as React.CSSProperties
      }
    />
  );
}
