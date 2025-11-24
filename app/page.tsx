"use client";
import Link from "next/link";
import React from "react";

export default function Hero() {
    return ( 
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-pastel-rose via-pastel-rose-950 to-black text-pink-200 text-center px-6">
      <h1 className="text-6xl font-bold mb-4 heading-in" style={{ fontFamily: "'Parisienne', cursive" }}>
        Welcome to My Portfolio
        </h1>
        <p className="text-xl max-w-2xl mb-8 fade-up" style={{ animationDelay: "200ms" }}>
        Explore my world of pastel aesthetics, dreamy designs, and calming user experiences.
        </p>
        <Link href="/project" className="inline-block px-6 py-3 rounded-xl font-semibold text-pastel-rose
          bg-linear-to-r from-pastel-rose to-pastel-lilac 
          shadow-[0_8px_20px_rgba(255,122,162,0.25)]        
            hover:brightness-110 active:scale-[0.98] transition fade-up" style={{ animationDelay: "400ms" }}>
          View My Projects 💖
        </Link>
    </section>
    );
}