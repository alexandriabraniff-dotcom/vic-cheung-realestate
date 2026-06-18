"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

const classes = [
  {
    number: "01",
    name: "Private Session",
    tag: "One-on-one with [Instructor Name]",
    image: "/489972824_18307666117237707_9088277353174030011_n.jpg",
    imageOffset: "center 65%",
    details: {
      description:
        "A session built entirely around you: your body, your goals, your pace. [Instructor Name] guides you through sequences with hands-on adjustments and careful, personalised attention.",
      features: ["60 or 90 minutes", "Personalised sequencing", "Hands-on adjustments", "Mat & props provided", "All levels welcome", "Mornings and evenings available"],
    },
  },
  {
    number: "02",
    name: "Small Group Class",
    tag: "Intimate and attentive",
    image: "/2025-05-13.webp",
    imageOffset: "center center",
    details: {
      description:
        "Kept deliberately small so every student receives real attention. Flowing Ashtanga sequences, breathwork, and a warm unhurried pace in a beautiful home studio. Beginners especially welcome.",
      features: ["Ashtanga Vinyasa flow", "Kept deliberately small", "Personal guidance throughout", "Mat & props provided", "Complimentary tea", "All levels welcome"],
    },
  },
];

export default function Classes() {
  const [active, setActive] = useState<typeof classes[0] | null>(null);

  return (
    <>
      <section id="classes" className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#2A5240]" />
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#2A5240]">The Practice</p>
            </div>
            <h2 className="font-display font-light text-3xl sm:text-4xl text-[#1A2B2B] leading-[1.15]">
              Ashtanga Vinyasa, <em className="italic text-[#2A5240]">your way.</em>
            </h2>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {classes.map((c, i) => (
              <motion.button
                key={c.name}
                onClick={() => setActive(c)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden text-left cursor-pointer focus:outline-none"
              >
                {/* Image */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    style={{ objectPosition: c.imageOffset }}
                  />
                  <div className="absolute inset-0 bg-[#1A2B2B]/20 group-hover:bg-[#1A2B2B]/10 transition-colors duration-300" />
                  <span className="absolute top-3 left-4 font-display text-2xl font-light text-white/30 leading-none">
                    {c.number}
                  </span>
                </div>

                {/* Label row */}
                <div className="flex items-center justify-between px-4 py-3.5 border border-t-0 border-[#E8E5E0] group-hover:border-[#2A5240]/25 transition-colors duration-300">
                  <div>
                    <p className="text-xs font-light text-[#1A2B2B] tracking-wide">{c.name}</p>
                    <p className="text-[10px] text-[#A0A8A8] mt-0.5">{c.tag}</p>
                  </div>
                  <span className="text-[#C4C0BA] group-hover:text-[#2A5240] transition-colors duration-200 text-xs">→</span>
                </div>
              </motion.button>
            ))}
          </div>

          <p className="text-[10px] text-[#A0A8A8] mt-5 tracking-wide">Select a class to learn more</p>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActive(null)}
              className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm"
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="fixed inset-x-4 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 top-1/2 -translate-y-1/2 w-full sm:w-[480px] bg-white z-50 overflow-hidden shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-52 sm:h-60 overflow-hidden">
                <Image
                  src={active.image}
                  alt={active.name}
                  fill
                  sizes="480px"
                  className="object-cover"
                  style={{ objectPosition: active.imageOffset }}
                />
                <div className="absolute inset-0 bg-[#1A2B2B]/20" />
                <button
                  onClick={() => setActive(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                  aria-label="Close"
                >
                  <X size={14} className="text-[#1A2B2B]" />
                </button>
              </div>

              {/* Content */}
              <div className="p-7">
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#2A5240] mb-1">{active.tag}</p>
                <h3 className="font-display font-light text-2xl text-[#1A2B2B] mb-4">{active.name}</h3>
                <p className="text-xs text-[#6B7A7A] font-light leading-[1.85] mb-6">{active.details.description}</p>

                <ul className="grid grid-cols-2 gap-y-2 gap-x-4 mb-7">
                  {active.details.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[11px] font-light text-[#6B7A7A]">
                      <span className="w-3 h-px bg-[#2A5240]/40 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  onClick={() => setActive(null)}
                  className="block w-full text-center bg-[#2A5240] text-white py-3 text-[10px] uppercase tracking-[0.2em] hover:bg-[#1E3D2F] transition-colors duration-300"
                >
                  Enquire About This Class
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
