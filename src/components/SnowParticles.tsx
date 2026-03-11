import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  speed: number;
  drift: number;
  opacity: number;
  twinklePhase: number;
  layer: number; // 0 = far, 1 = mid, 2 = near
}

export default function SnowParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const particleCount = 180;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const layer = i % 3;
      const sizeMultiplier = layer === 0 ? 0.5 : layer === 1 ? 1 : 1.8;
      const speedMultiplier = layer === 0 ? 0.4 : layer === 1 ? 0.8 : 1.2;
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: (Math.random() * 2 + 0.8) * sizeMultiplier,
        speed: (Math.random() * 0.8 + 0.3) * speedMultiplier,
        drift: (Math.random() - 0.5) * 0.6,
        opacity: Math.random() * 0.5 + 0.3,
        twinklePhase: Math.random() * Math.PI * 2,
        layer,
      });
    }

    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      time += 0.016;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        const twinkle = 0.7 + 0.3 * Math.sin(time * 2 + p.twinklePhase);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity * twinkle})`;
        ctx.fill();

        p.y += p.speed;
        p.x += p.drift;

        if (p.y > canvas.height + 5) {
          p.y = -5;
          p.x = Math.random() * canvas.width;
        }
        if (p.x > canvas.width + 5) p.x = -5;
        if (p.x < -5) p.x = canvas.width + 5;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{ mixBlendMode: 'screen' }}
      aria-hidden
    />
  );
}
