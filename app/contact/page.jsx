"use client";

import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br via-pastel-rose to-black text-pastel-rose p-6">
      <div className="max-w-xl w-full bg-white/5 backdrop-blur-md p-8 rounded-3xl shadow-md border border-white/10 space-y-6">
        <h1 className="text-3xl font-bold text-center mb-4 text-slate-100">Contact Me</h1>

        <div>
          <label className="block text-sm mb-1 text-pastel-rose">Name</label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/10 placeholder:text-pastel-rose/60 focus:ring-2 focus:ring-pastel-rose outline-none text-slate-100"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-pastel-rose">Email</label>
          <input
            type="email"
            className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/10 placeholder:text-pastel-rose/60 focus:ring-2 focus:ring-pastel-rose outline-none text-slate-100"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-pastel-rose">Subject</label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/10 placeholder:text-pastel-rose/60 focus:ring-2 focus:ring-pastel-rose outline-none text-slate-100"
            placeholder="Subject"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-pastel-rose">Message</label>
          <textarea
            rows={5}
            className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/10 placeholder:text-pastel-rose/60 focus:ring-2 focus:ring-pastel-rose outline-none text-slate-100"
            placeholder="Your message..."
          />
        </div>

        <button className="w-full py-3 rounded-xl font-semibold text-pastel-rose
  bg-linear-to-r from-pastel-rose to-pastel-lilac 
  shadow-[0_8px_20px_rgba(255,122,162,0.25)]
  hover:brightness-110 active:scale-[0.98] transition">
  Send Message🩷
</button>

        <div className="mt-6 flex justify-center gap-6 text-2xl">
          <Link href="https://github.com/Jhazminaaa23" className="hover:scale-110 transition text-pastel-rose" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.11.78-.25.78-.55 0-.27-.01-1.15-.02-2.08-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.72 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a11 11 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.45-2.69 5.43-5.26 5.71.41.35.77 1.03.77 2.08 0 1.5-.01 2.71-.01 3.08 0 .3.21.67.79.56A11.51 11.51 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
            </svg>
          </Link>

          <Link href="https://www.linkedin.com/in/jhazmine-claudette-n-baldeviso-380b4a399/" className="hover:scale-110 transition text-pastel-rose" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.027-3.059-1.865-3.059-1.865 0-2.151 1.457-2.151 2.963v5.7h-3v-11h2.881v1.507h.041c.401-.758 1.379-1.558 2.837-1.558 3.036 0 3.599 2.085 3.599 4.793v6.258z" />
            </svg>
          </Link>

          <Link href="https://x.com/Jhazminaaaaa" className="hover:scale-110 transition text-pastel-rose" aria-label="X / Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
              <path d="M18.244 2h3.308l-7.227 8.26L24 22h-6.828l-5.003-6.585L6.41 22H3.1l7.73-8.835L0 2h6.953l4.513 6.023L18.244 2zm-1.159 18h1.839L7.01 4h-2L17.085 20z" />
            </svg>
          </Link>
        </div>
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
        .border-pastel-rose-100 { border-color: rgba(255,122,162,0.12); }

        /* small helper so placeholder color works even if Tailwind plugin isn't configured */
        .placeholder\\:text-pastel-rose\\/60::placeholder { color: rgba(255,122,162,0.6); }

        /* reduced motion */
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
