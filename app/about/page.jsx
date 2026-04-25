"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen w-full bg-linear-to-br from-pastel-rose via-pastel-rose-950 to-black text-pastel-rose flex items-center justify-center p-8">
      
      
      <div className="max-w-2xl w-full bg-white/5 backdrop-blur-xl border border-white/10 
                      rounded-3xl shadow-2xl p-14 text-center
                      glow-card floating-soft">

        
        <div className="relative mx-auto mb-6 w-[320px] h-[px]">
          <div className="absolute inset-0 rounded-full bg-pastel-rose/40 blur-3xl animate-image-glow"></div>

          <Image
            src="/profile.jpg"
            width={320}
            height={200 }
            alt="Jhazmine Claudette Baldeviso"
            className="rounded-full object-cover border-4 border-white/60 shadow-xl relative z-10"
          />
        </div>

        <h1 className="text-5xl font-bold mb-1 heading-in" style={{ fontFamily: "'Parisienne', cursive" }}>
          Jhazmine Claudette Baldeviso
        </h1>

        <p className="h-3 text-base text-pink-200/80 mb-6 fade-up">
          Frontend Developer • Soft UI Designer • Pastel Lover
        </p>

        
        <div className="flex justify-center gap-5 mb-8 text-pastel-rose fade-up" style={{ animationDelay: "220ms" }}>
          <a href="https://facebook.com" target="_blank" className="hover:scale-110 transition" rel="noreferrer">
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07C2 17.09 5.66 21.19 10.44 21.98v-6.99H7.9v-2.92h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87h2.74l-.44 2.92h-2.3V21.98C18.34 21.19 22 17.09 22 12.07z"/></svg>
          </a>

          <a href="https://instagram.com" target="_blank" className="hover:scale-110 transition" rel="noreferrer">
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2A4.8 4.8 0 1 0 16.8 13 4.8 4.8 0 0 0 12 8.2zm6.4-2.7a1.12 1.12 0 1 1-1.12-1.12A1.12 1.12 0 0 1 18.4 5.5z"/></svg>
          </a>

          <a href="https://x.com" target="_blank" className="hover:scale-110 transition" rel="noreferrer">
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M18.9 2H22l-7.6 8.7L23.3 22H16l-5.2-6.8L4.8 22H2l8.2-9.4L2.4 2H9l4.7 6.2L18.9 2z"/></svg>
          </a>
        </div>

        
        <p className="text-sm text-white leading-relaxed mb-8 fade-up" style={{ animationDelay: "320ms" }}>
          I love building soft, dreamy, feminine UI experiences that feel warm and calming.
          I combine pastel gradients, subtle glow effects, and smooth layouts to create
          interfaces that feel magical.
        </p>

        
        <div className="flex justify-center gap-4 fade-up" style={{ animationDelay: "360ms" }}>
          <Link href="/contact" className="px-6 py-2 rounded-xl bg-linear-to-r from-pink-200 to-rose-300 text-black font-semibold shadow-lg hover:brightness-110 transition">
            Contact
          </Link>
        </div>
      </div>

      
      <style>{`
        /* container glow */
        .glow-card {
          box-shadow: 0 0 40px rgba(255,122,162,0.18), 
                      0 0 120px rgba(255,122,162,0.12);
          transition: box-shadow .4s ease;
        }
        .glow-card:hover {
          box-shadow: 0 0 55px rgba(255,122,162,0.35), 
                      0 0 160px rgba(255,122,162,0.25);
        }

        /* container floating effect */
        .floating-soft {
          animation: floatSoft 6s ease-in-out infinite;
        }
        @keyframes floatSoft {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        /* profile glow animation */
        @keyframes imageGlow {
          0% { opacity: .4; }
          50% { opacity: .85; }
          100% { opacity: .4; }
        }
        .animate-image-glow {
          animation: imageGlow 3.5s ease-in-out infinite;
        }

        /* fade + pop animations */
        .heading-in {
          opacity: 0;
          transform: translateY(10px) scale(.98);
          animation: headingIn .7s ease forwards;
        }
        @keyframes headingIn {
          to { opacity:1; transform: translateY(0) scale(1); }
        }

        .fade-up {
          opacity: 0;
          transform: translateY(10px);
          animation: fadeUp .7s ease forwards;
        }
        @keyframes fadeUp {
          to { opacity:1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
