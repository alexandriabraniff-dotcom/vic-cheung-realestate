"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="h-screen bg-white flex flex-col overflow-hidden relative">

      {/* Main grid */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 min-h-0">

        {/* LEFT — text */}
        <div className="flex flex-col justify-center px-6 sm:px-10 md:px-14 lg:px-20 py-12 relative z-20">

          {/* Location tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <span className="w-4 h-px bg-[#2A5240]" />
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#2A5240]">[Suburb] · [City]</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-display font-light leading-[1.08] tracking-tight text-[#1A2B2B] mb-6"
            style={{ fontSize: "clamp(2.6rem, 6vw, 4.5rem)" }}
          >
            A home for
            <br />
            <em className="italic text-[#2A5240]">your practice.</em>
          </motion.h1>

          {/* Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="space-y-1 mb-10"
          >
            <p className="text-sm text-[#6B7A7A] font-light leading-relaxed">
              Intimate yoga classes with [Instructor Name].
            </p>
            <p className="text-sm text-[#6B7A7A] font-light leading-relaxed">
              Private sessions &amp; small group classes. All levels welcome.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-row gap-3"
          >
            <a
              href="#contact"
              className="bg-[#1A2B2B] text-white px-6 sm:px-8 py-3.5 text-xs uppercase tracking-[0.15em] hover:bg-[#2A5240] transition-colors duration-300"
            >
              Book a Class
            </a>
            <a
              href="#about"
              className="border border-[#C4C0BA] text-[#1A2B2B] px-6 sm:px-8 py-3.5 text-xs uppercase tracking-[0.15em] hover:border-[#2A5240] hover:text-[#2A5240] transition-colors duration-300"
            >
              Learn More
            </a>
          </motion.div>
        </div>

        {/* RIGHT — photo (desktop only) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="relative hidden lg:block"
        >
          <Image
            src="/490067908_18307666102237707_4229634514786476192_n.jpg"
            alt="Yoga studio interior"
            fill
            priority
            sizes="50vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-y-0 left-0 w-px bg-[#E0DDD8]" />
        </motion.div>

      </div>
    </section>
  );
}
