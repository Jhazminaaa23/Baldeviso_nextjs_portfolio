"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link"; 


export default function Project() {
  return (
    <main className="min-h-screen w-full bg-black text-pink-200 pt-32 px-6">

      <h1
        className="text-5xl font-bold text-center mb-14 text-pink-200"
        style={{ fontFamily: "'Parisienne', cursive" }}
      >
        My Projects
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

       
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 shadow-xl hover:scale-[1.03] transition backdrop-blur-xl">
          <Image
            src="/Project1.jpg"
            width={400}
            height={300}  
            alt="Project 1"
            className="w-full h-48 object-cover rounded-2xl mb-4 border border-white/10"
          />


          <h3 className="text-xl font-semibold text-pink-200 mb-2">
            Student Friendly Lost and Found Mobile App (UI/UX Design)
          </h3>
          <p className="text-sm text-pink-200/70 mb-4">
            A cute convenient and organized digital solution for students to manage campus lost and found items.
          </p>

          <div className="mb-4">
            <h4 className="text-sm font-semibold text-pink-300 mb-2">
              Tech Stack:
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs">React Native</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs">Firebase</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs">Figma</span>
                
                </div>
              </div>

          <Link
            href="https://github.com/Jhazminaaa23/Lost-and-Found-.git"
            className="inline-block px-5 py-2 bg-pink-300 text-black rounded-xl font-semibold shadow-md hover:brightness-110 transition"
          >
            View Project
          </Link>
        </div>

        
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 shadow-xl hover:scale-[1.03] transition backdrop-blur-xl">
          <Image  
            src="/Porfolio.jpg"
            width={400}
            height={300}
            alt="Project 2"
            className="w-full h-48 object-cover rounded-2xl mb-4 border border-white/10"
          />

          <h3 className="text-xl font-semibold text-pink-200 mb-2">
            Portfolio Website
          </h3>
          <p className="text-sm text-pink-200/70 mb-4">
            A smooth pastel portfolio with animations, petals, and a dreamy
            feminine aesthetic.
          </p>
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-pink-300 mb-2">
              Tech Stack:
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs">Next.js</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs">TypeScript</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs">Tailwind CSS</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs">Framer Motion</span>
                </div>
                </div>

          <a
            href="https://baldeviso-nextjs-portfolio.vercel.app/home"
            className="inline-block px-5 py-2 bg-pink-300 text-black rounded-xl font-semibold shadow-md hover:brightness-110 transition"
          >
            View Project
          </a>
        </div>

        
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 shadow-xl hover:scale-[1.03] transition backdrop-blur-xl">
          <Image
            src="/Project3.png"
            width={400}
            height={300}
            alt="Project 3"
            className="w-full h-48 object-cover rounded-2xl mb-4 border border-white/10"
          />

          <h3 className="text-xl font-semibold text-pink-200 mb-2">
            It Fits Outfits Case Study
          </h3>
          <p className="text-sm text-pink-200/70 mb-4">
          This case study focuses on creating a clean and intuitive UI layout for the
          “It Fits Outfits” concept. The project is UI-only, and my role was the
          <span className="text-pink-300 font-semibold"> Programmer</span> responsible for
          building the structure, layout, and interface behavior.</p>
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-pink-300 mb-2">
              Tech Stack:
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs">HTML</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs">CSS</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs">JavaScript</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs">MySql</span>
                </div>
                </div>

          <Link
            href="https://github.com/Jhazminaaa23/Case-Study.git"
            className="inline-block px-5 py-2 bg-pink-300 text-black rounded-xl font-semibold shadow-md hover:brightness-110 transition"
          >
            View Project
          </Link>
        </div>

      </div>
    </main>
  );
}
