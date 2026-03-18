"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { NAV_LINKS, CALENDLY_URL } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      setHidden(currentScrollY > lastScrollY && currentScrollY > 300);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-2xl border-b border-white/[0.04]"
          : "bg-transparent"
      }`}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
          className="flex items-center gap-2.5"
        >
          <Image src="/logo.svg" alt="Aaxelera" width={24} height={24} className="w-6 h-6" />
          <span className="text-base font-medium tracking-[0.1em] uppercase text-white/80">
            Aaxelera
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-[12px] text-white/35 hover:text-white/80 transition-colors duration-300 tracking-[0.08em] uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[12px] font-medium tracking-[0.08em] uppercase rounded-full px-5 py-2 bg-white/[0.08] text-white/80 border border-white/[0.1] hover:bg-white/[0.15] hover:border-white/[0.2] backdrop-blur-xl transition-all duration-300"
          >
            Book a Strategy Call
          </a>
        </div>

        <button
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <motion.span className="w-4 h-[1px] bg-white block" animate={isOpen ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }} />
          <motion.span className="w-4 h-[1px] bg-white block" animate={isOpen ? { opacity: 0 } : { opacity: 1 }} />
          <motion.span className="w-4 h-[1px] bg-white block" animate={isOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a key={link.label} href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-xl text-white/50 hover:text-white transition-colors tracking-[0.1em] uppercase"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
              >{link.label}</motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
