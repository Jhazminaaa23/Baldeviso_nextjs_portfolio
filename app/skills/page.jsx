"use client";

import React, { useEffect, useState } from "react";

const skillsList = [
  { name: "HTML🌸", desc: "Semantic markup & accessibility", level: 90 },
  { name: "CSS / Tailwind🌸", desc: "Responsive design & components", level: 75 },
  { name: "JavaScript🌸", desc: "DOM, ESNext, and logic", level: 85 },
  { name: "React🌸", desc: "Components, hooks & state", level: 70 },
  { name: "Next.js🌸", desc: "Routing, SSR & app router", level: 60 },
  { name: "UI/UX🌸", desc: "Design systems & usability", level: 95 },
];

export default function Skills() {
  const [petals, setPetals] = useState([]);

  
  const [animatedLevels, setAnimatedLevels] = useState(
    () => skillsList.map(() => 0)
  );

  
  useEffect(() => {
    const timers = skillsList.map((s, i) => {
      const safe = typeof s.level === "number" && !Number.isNaN(s.level)
        ? Math.max(0, Math.min(100, Math.round(s.level)))
        : 0;
      return setTimeout(() => {
        setAnimatedLevels(prev => {
          const copy = [...prev];
          copy[i] = safe;
          return copy;
        });
      }, 160 * i + 200);
    });
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  useEffect(() => {
    const iv = setInterval(() => {
      const id = Date.now() + Math.random();
      const x = Math.random() * window.innerWidth;
      const y = window.innerHeight + 40;
      const rot = Math.random() * 360;
      const size = 10 + Math.random() * 22;
      setPetals((p) => [...p, { id, x, y, rot, size }]);
      setTimeout(() => setPetals((p) => p.filter((t) => t.id !== id)), 4200);
    }, 900);
    return () => clearInterval(iv);
  }, []);

  function emitPetalAt(x, y) {
    const id = Date.now() + Math.random();
    const rot = Math.random() * 360;
    const size = 10 + Math.random() * 22;
    setPetals((p) => [...p, { id, x, y, rot, size }]);
    setTimeout(() => setPetals((p) => p.filter((t) => t.id !== id)), 2200);
  }

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-pastel-rose via-pastel-rose-950 to-black text-pastel-rose">
      <div className="max-w-6xl mx-auto relative z-20">

        <header className="mb-20 text-center height-auto pt-24 px-6">
          <h1 className="text-5xl font-bold text-pink-200 text-shadow-pink-700" style={{ fontFamily: "'Parisienne', cursive" }}>
            Skills & Tools
          </h1>
          <p className="mt-3 text-white text-lg max-w-xl mx-auto">
            Technologies I use to build clean, responsive and delightful user interfaces.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {skillsList.map((s, i) => {
            const safeLevel = typeof s.level === "number" && !Number.isNaN(s.level)
              ? Math.max(0, Math.min(100, Math.round(s.level)))
              : 0;
            const visual = animatedLevels[i] ?? 0;

            return (
              <article
                key={s.name + i}
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  emitPetalAt(rect.left + rect.width / 2, rect.top + rect.height / 2);
                }}
                className="relative overflow-hidden rounded-2xl bg-pastel-rose/5 backdrop-blur-md border border-pastel-rose-100 p-6 shadow-soft transform transition hover:scale-[1.03] hover:shadow-xl"
                style={{ animation: `slideUp 480ms cubic-bezier(.2,.9,.3,1) both`, animationDelay: `${i * 120}ms` }}
              >
                <div className="flex items-start justify-between gap-4">

                  <div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl
                               bg-black text-pink-500 text-lg font-bold select-none
                               shadow-[0_0_12px_rgba(255,122,162,0.25)]
                               border border-white/10 animate-pulse-soft">
                    {String(s.name).trim()[0] ?? "•"}
                  </div>

                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-pink-200">{s.name}</h3>
                    <p className="mt-1 text-sm text-pastel-rose">{s.desc}</p>

                    
                    <div className="mt-4 flex items-center gap-4">
                      {/* bar (flex-grow) */}
                      <div className="flex-1">
                        <div className="relative w-full h-3 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.04)" }}>
                          
                          <div
                            className="absolute left-0 top-0 h-3 rounded-full"
                            style={{
                              width: `${Math.max(0, Math.min(100, visual))}%`,
                              transition: "width 900ms cubic-bezier(.2,.9,.3,1)",
                              background: "linear-gradient(90deg, rgba(255,122,162,0.95), rgba(255,185,210,0.95))",
                              boxShadow: "0 6px 18px rgba(255,122,162,0.12)",
                            }}
                          />
                        </div>
                      </div>

                      
                      <div className="w-12 text-right">
                        <span className="text-xs font-medium text-pink-100">{safeLevel}%</span>
                      </div>
                    </div>
                    

                  </div>

                </div>

                <div className="absolute -right-10 -bottom-10 w-36 h-36 bg-pastel-rose/20 rounded-full blur-3xl pointer-events-none" />
              </article>
            );
          })}
        </div>
      </div>

      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        {petals.map((p) => (
          <span
            key={p.id}
            className="petal"
            style={{ left: `${p.x}px`, top: `${p.y}px`, transform: `translate(-50%,-50%) rotate(${p.rot}deg)`, fontSize: `${p.size}px` }}
          >
            ✿     
          </span>
        ))}
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(18px) scale(.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes glowPulse {
          0% { box-shadow: 0 0 6px rgba(255,122,162,0.25); }
          50% { box-shadow: 0 0 14px rgba(255,122,162,0.45); }
          100% { box-shadow: 0 0 6px rgba(255,122,162,0.25); }
        }

        .animate-pulse-soft {
          animation: glowPulse 2.2s ease-in-out infinite;
        }

        .petal {
          position: fixed;
          color: var(--pastel-rose);
          opacity: 0.95;
          animation: petalDrift 4s cubic-bezier(.2,.8,.2,1) forwards;
          text-shadow: 0 8px 24px rgba(255,122,162,0.12);
          pointer-events: none;
        }

        @keyframes petalDrift {
          0% { transform: translate(-50%,-50%) translateY(0) scale(0.9) rotate(0deg); opacity: 0.95; }
          100% { transform: translate(-50%,-420%) translateY(-420%) scale(0.7) rotate(45deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
