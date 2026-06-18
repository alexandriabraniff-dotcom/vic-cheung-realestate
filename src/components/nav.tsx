"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const leftLinks = [
  { label: "About", href: "#about" },
  { label: "Classes", href: "#classes" },
];

const rightLinks = [
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="h-px bg-[#E0DDD8] w-full" />

      <div className={`transition-all duration-400 ${scrolled ? "bg-white/96 backdrop-blur-md shadow-sm shadow-black/[0.04]" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between h-14 md:h-16">

          {/* LEFT links — desktop */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 flex-1">
            {leftLinks.map((link) => (
              <a key={link.href} href={link.href}
                className="text-[10px] uppercase tracking-[0.2em] text-[#6B7A7A] hover:text-[#2A5240] transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          {/* CENTER — wordmark (desktop) */}
          <a href="#"
            className="hidden md:block absolute left-1/2 -translate-x-1/2 tracking-[0.35em] text-sm font-light text-[#2A5240] uppercase">
            [Studio Name]
          </a>

          {/* RIGHT links — desktop */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 flex-1 justify-end">
            {rightLinks.map((link) => (
              <a key={link.href} href={link.href}
                className="text-[10px] uppercase tracking-[0.2em] text-[#6B7A7A] hover:text-[#2A5240] transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile layout */}
          <div className="md:hidden flex items-center justify-between w-full">
            <a href="#" className="tracking-[0.3em] text-sm font-light text-[#2A5240] uppercase">[Studio Name]</a>
            <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="text-[#1A2B2B] p-2 -mr-2">
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <div className="h-px bg-[#E0DDD8] w-full" />
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18 }}
            className="md:hidden bg-white border-b border-[#E0DDD8]"
          >
            <nav className="flex flex-col px-6 py-2 divide-y divide-[#F0EDEA]">
              {[...leftLinks, ...rightLinks].map((link) => (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)}
                  className="text-[10px] uppercase tracking-[0.2em] text-[#6B7A7A] hover:text-[#2A5240] transition-colors py-4">
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
