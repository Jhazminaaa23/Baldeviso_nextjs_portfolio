"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootHeader() {
  const path = usePathname();

  return (
    <header className="w-full bg-transparent backdrop-blur-sm border-b border-pastel-rose-25">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3 no-underline">
            <div className="w-11 h-11 rounded-2xl bg-linear-to-br from-pastel-rose to-pastel-lilac flex items-center justify-center text-white shadow-soft text-lg font-bold transform transition-transform hover:-translate-y-0.5">
              {`</>`}
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-semibold text-[#ff9bbb]">Jhazmine</span>
              <span className="text-xs text-[#ffb3cc] -mt-1">Soft UI • Pastel Aesthetics</span>
            </div>
          </Link>
        </div>

        <nav className="flex gap-4 items-center">
          {[
            { href: "/home", label: "Home", icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75V21h15V9.75" },
            { href: "/about", label: "About", icon: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a8.25 8.25 0 1 1 15 0v.75H4.5v-.75Z" },
            { href: "/project", label: "Projects", icon: "M3 7.5A2.25 2.25 0 0 1 5.25 5.25h4.836c.597 0 1.17.237 1.59.658l1.266 1.265c.42.421.993.657 1.59.657h4.218A2.25 2.25 0 0 1 21.75 10.5v7.5A2.25 2.25 0 0 1 19.5 20.25H5.25A2.25 2.25 0 0 1 3 18V7.5Z" },
            { href: "/skills", label: "Skills", icon: "M12 3v2.25M12 18.75V21M4.5 12H6.75M17.25 12H19.5M6.364 6.364l1.591 1.591M16.045 16.045l1.591 1.591M6.364 17.636l1.591-1.591M16.045 7.955l1.591-1.591M12 8.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5Z" },
            { href: "/contact", label: "Contact", icon: "M21.75 6.75v10.5A2.25 2.25 0 0 1 19.5 19.5h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15A2.25 2.25 0 0 0 2.25 6.75m19.5 0v.243a2.25 2.25 0 0 1-.97 1.875l-7.5 4.875a2.25 2.25 0 0 1-2.56 0L3.22 8.868a2.25 2.25 0 0 1-.97-1.875V6.75" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm transition-all ${path === item.href ? 'bg-white/80 shadow-sm text-[#ff7aa2] ring-1 ring-pastel-rose/10' : 'text-[#ff8fb5] hover:text-[#ff7aa2] hover:bg-white/50'}`}
              aria-current={path === item.href ? 'page' : undefined}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d={item.icon} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Parisienne&family=Poppins:wght@300;400;600&display=swap');

        :root{
          --pastel-rose: #ff7aa2;
        }

        .shadow-soft { box-shadow: 0 10px 30px rgba(160,80,120,0.08); }
        .border-pastel-rose-25 { border-color: rgba(255,122,162,0.06); }

        header { font-family: 'Poppins', system-ui, sans-serif; }

        a { text-decoration: none; }

        @media (prefers-reduced-motion: reduce) {
          .hover\:-translate-y-0.5 { transition: none !important; }
        }
      `}</style>
    </header>
  );
}
