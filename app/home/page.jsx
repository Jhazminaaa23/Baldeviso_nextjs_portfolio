"use client";

import { useEffect, useState } from "react";
import Link from "next/link";



export default function FeminineHero() {
  const [mounted, setMounted] = useState(false);
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 120);
    return () => clearTimeout(t);
  }, []);

 
  function emitPetal(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2 + (Math.random() * 80 - 40);
    const y = rect.top + rect.height / 2 + (Math.random() * 10 - 6);
    const id = Date.now() + Math.random();
    const rot = Math.random() * 360;
    const size = 12 + Math.random() * 18;
    setPetals((p) => [...p, { id, x, y, rot, size }]);
   
    setTimeout(() => setPetals((p) => p.filter((s) => s.id !== id)), 1600);
  }

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-linear-to-br from-pastel-rose-50 via-pastel-lavender-50 to-pastel-azur-50 text-slate-900">
     
      <div className="absolute -left-48 -top-36 w-96 h-96 rounded-full bg-pastel-peach/50 blur-3xl -z-20 animate-floating-slow" />
      <div className="absolute right-4 -top-8 w-80 h-80 rounded-full bg-pastel-lilac/40 blur-3xl -z-20 animate-floating-slow delay-2000" />

      

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
         
          <section className="space-y-6">
            <div className="inline-flex items-center gap-4">
              <div className="w-16 h-16 rounded-3xl bg-linear-to-tr from-pastel-rose to-pastel-violet flex items-center justify-center text-white text-2xl font-bold shadow-soft">
                {"</>"}
              </div>
              <div className="text-sm text-pastel-rose">Frontend • UI/UX • Soft Aesthetics</div>
            </div>

            <h1
              className={`text-5xl md:text-6xl leading-tight ${mounted ? "heading-in" : "opacity-0"}`}
            >
              <span className="block text-6xl md:text-7xl leading-tight text-pastel-rose" style={{ fontFamily: "'Parisienne', cursive" }}>
                Jhazmine
              </span>
              <span className="block mt-5 text-xl md:text-2xl font-medium text-white" style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}>
                I craft soft, whimsical experiences ✨
              </span>
            </h1>

            <p className={`text-lg text-white max-w-xl ${mounted ? "fade-up delay-100" : "opacity-0"}`}>
              Pastel palettes, floral accents, and gentle motion — I design with kindness and attention to details.
            </p>

            <div className={`mt-6 flex flex-wrap gap-3 ${mounted ? "fade-up delay-200" : "opacity-0"}`}>
              <button
                onClick={emitPetal}
                className="relative overflow-hidden inline-flex items-center gap-2 px-5 py-3 bg-linear-to-br from-pastel-rose to-pastel-violet text-pastel-rose rounded-full font-semibold shadow-lg transform transition hover:scale-[1.035] focus:outline-none focus:ring-4 focus:ring-pastel-rose/30"
                aria-label="Contact — send a petal"
              >
                <span className="absolute inset-0 pointer-events-none animate-shimmer opacity-20" />
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-4.9-9-8.5A5.5 5.5 0 1112 21z" />
                </svg>
                Send a Petal
              </button>

              <a
                href="/project"
                className="inline-flex items-center gap-2 px-5 py-3 bg-pastel-rose hover:bg-white rounded-full font-semibold border border-white/10 shadow-sm text-white transition focus:outline-none focus:ring-4 focus:ring-pastel-rose/10"
              >
                See Projects
              </a>
            </div>

            
            <div className={`mt-6 flex items-center gap-6 ${mounted ? "fade-up delay-350" : "opacity-0"}`}>
              <div className="flex items-center gap-3">
                <Link href="https://github.com/Jhazminaaa23" aria-label="GitHub" className="group">
                  <svg className="w-6 h-6 text-pastel-rose group-hover:text-pastel-rose transition" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.11.78-.25.78-.55 0-.27-.01-1.15-.02-2.08-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.72 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a11 11 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.45-2.69 5.43-5.26 5.71.41.35.77 1.03.77 2.08 0 1.5-.01 2.71-.01 3.08 0 .3.21.67.79.56A11.51 11.51 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
                  </svg>
                </Link>

                <Link href="https://www.linkedin.com/in/jhazmine-claudette-n-baldeviso-380b4a399/" aria-label="LinkedIn" className="group">
                  <svg className="w-6 h-6 text-pastel-rose group-hover:text-pastel-rose transition" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7.5 19.5H4.5v-9h3v9zM6 8.9C4.9 8.9 4 8 4 6.9s.9-2 2-2c1.11 0 2 .9 2 2s-.89 2-2 2zM20 19.5h-3v-4.8c0-1.14-.02-2.6-1.59-2.6-1.59 0-1.83 1.24-1.83 2.52V19.5h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2.09 3.6 4.81V19.5z" />
                  </svg>
                </Link>
              </div>

              <div className="flex gap-2 items-center">
                <span className="px-3 py-1 bg-pastel-rose-50 rounded-full text-xs text-pastel-rose">HTML</span>
                <span className="px-3 py-1 bg-pastel-rose-50 rounded-full text-xs text-pastel-rose">CSS</span>
                <span className="px-3 py-1 bg-pastel-rose-50 rounded-full text-xs text-pastel-rose">React</span>
              </div>
            </div>
          </section>

          
          <aside>
            <div className={`rounded-3xl p-6 bg-white/95 backdrop-blur-md border border-pastel-rose-100 shadow-md ${mounted ? "card-pop" : "opacity-0"}`}>
              <h3 className="text-2xl font-semibold text-pastel-rose">Let’s make something lovely</h3>
              <p className="mt-3 text-slate-600">Available for small projects, collaborations, and internships. I love pastel palettes and friendly UI.</p>

              <div className="mt-5 flex gap-3">
                <Link onClick={emitPetal} href="/contact" className="px-4 py-2 bg-pastel-rose text-white rounded-full shadow-sm transition hover:scale-[1.02]">Work with me</Link>
                <Link href="/project" className="px-4 py-2 border border-pastel-rose-100 rounded-full">My Work</Link>
              </div>

              <div className="mt-6 flex gap-2 items-center">
                <svg className="w-6 h-6 text-pastel-rose" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 3.99 4 6.5 4c1.74 0 3.41 1 4.13 2.44C11.09 5 12.76 4 14.5 4 17.01 4 19 6 19 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                <span className="px-3 py-1 bg-pastel-rose-50 rounded-full">Designs with heart & care</span>
              </div>
            </div>
          </aside>
        </div>
      </main>

     
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        {petals.map((p) => (
          <span
            key={p.id}
            className="petal"
            style={{
              left: `${p.x}px`,
              top: `${p.y}px`,
              transform: `translate(-50%,-50%) rotate(${p.rot}deg)`,
              fontSize: `${p.size}px`,
            }}
          >
            ✿
          </span>
        ))}

        
        <span className="sparkle" style={{ left: '20%', top: '18%' }}>✦</span>
        <span className="sparkle" style={{ left: '68%', top: '30%' }}>✦</span>
        <span className="sparkle" style={{ left: '50%', top: '72%' }}>✦</span>
      </div>

      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Parisienne&family=Poppins:wght@300;400;600&display=swap');

        :root{
          --pastel-rose: #ff7aa2;
          --pastel-lilac: #d6b3ff;
          --pastel-peach: #ffd6c9;
          --pastel-azur: #d7f0ff;
        }

        .shadow-soft { box-shadow: 0 12px 36px rgba(160,80,120,0.08); }

        /* reveal / fades */
        .heading-in { opacity: 0; transform: translateY(12px) scale(.995); animation: headingIn 640ms cubic-bezier(.2,.9,.3,1) forwards; }
        @keyframes headingIn { to { opacity: 1; transform: translateY(0) scale(1); } }

        .fade-up { opacity: 0; transform: translateY(8px); animation: fadeUp .6s ease forwards; }
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }

        .card-pop { opacity: 0; transform: translateY(8px) scale(.997); animation: cardPop .56s cubic-bezier(.2,.9,.3,1) forwards; }
        @keyframes cardPop { to { opacity: 1; transform: translateY(0) scale(1); } }

        /* floating orbs */
        @keyframes floatingSlow { 0% { transform: translateY(0); } 50% { transform: translateY(-14px); } 100% { transform: translateY(0); } }
        .animate-floating-slow { animation: floatingSlow 8s ease-in-out infinite; }
        .delay-2000 { animation-delay: 2s; }

        /* shimmer on CTA */
        @keyframes shimmer { 0% { transform: translateX(-120%); } 100% { transform: translateX(120%); } }
        .animate-shimmer { background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent); transform: translateX(-100%); animation: shimmer 1.6s linear infinite; }

        /* petal particle */
        .petal {
          position: fixed;
          color: var(--pastel-rose);
          opacity: 0.95;
          animation: petalDrift 1.6s cubic-bezier(.2,.8,.2,1) forwards;
          text-shadow: 0 8px 24px rgba(255,122,162,0.12);
          pointer-events: none;
        }
        @keyframes petalDrift {
          0% { transform: translate(-50%,-50%) rotate(0deg) scale(0.95); opacity: 0.95; }
          30% { transform: translate(-40%,-110%) rotate(18deg) scale(1.04); opacity: 1; }
          100% { transform: translate(-50%,-220%) rotate(45deg) scale(0.8); opacity: 0; }
        }

        .sparkle { position: fixed; font-size: 12px; color: #fff; opacity: 0.8; filter: drop-shadow(0 6px 12px rgba(255,255,255,0.08)); animation: sparklePulse 3.4s ease-in-out infinite; }
        @keyframes sparklePulse { 0% { opacity: .2; transform: scale(.9); } 50% { opacity: 1; transform: scale(1.06); } 100% { opacity: .2; transform: scale(.9); } }

        /* reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .heading-in, .fade-up, .card-pop, .animate-floating-slow, .petal, .sparkle, .animate-shimmer { animation: none !important; opacity: 1 !important; transform: none !important; }
        }

        /* pastel utility aliases for easy Tailwind-like tokens (used in inline classes above) */
        .bg-pastel-rose { background: linear-gradient(90deg, var(--pastel-rose), var(--pastel-lilac)); }
        .text-pastel-rose { color: var(--pastel-rose); }
        .bg-pastel-peach { background-color: var(--pastel-peach); }
        .bg-pastel-lilac { background-color: var(--pastel-lilac); }
        .bg-pastel-azur { background-color: var(--pastel-azur); }
        .bg-pastel-rose-50 { background-color: rgba(255,122,162,0.06); }
        .border-pastel-rose-100 { border-color: rgba(255,122,162,0.12); }

        /* accessibility: ensure focus ring is visible */
        a:focus, button:focus { outline: none; box-shadow: 0 0 0 6px rgba(255,122,162,0.08); border-radius: 9999px; }
      `}</style>
    </div>
  );
}
