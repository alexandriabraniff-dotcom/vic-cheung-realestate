"use client";

import { motion } from "motion/react";

const testimonials = [
  {
    quote: "[Client quote — instructor's patience, careful attention, personalised adjustments.]",
    name: "[Client Name]",
    rotate: "-1.5deg",
    bg: "#FEFCE8",
  },
  {
    quote: "[Client quote — welcoming atmosphere, beginner-friendly, personal studio setting.]",
    name: "[Client Name]",
    rotate: "1.2deg",
    bg: "#F0FDF4",
  },
  {
    quote: "[Client quote — feeling of physical and mental transformation after sessions.]",
    name: "[Client Name]",
    rotate: "-0.8deg",
    bg: "#FFF7ED",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#F7F5F1] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          className="mb-14 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#2A5240]" />
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#2A5240]">Kind Words</p>
          </div>
          <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-[#1A2B2B] leading-[1.1]">
            From those who{" "}
            <em className="italic text-[#2A5240]">practise here.</em>
          </h2>
        </motion.div>

        {/* Post-it grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: t.rotate }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              whileHover={{ rotate: "0deg", y: -6, transition: { duration: 0.25 } }}
              className="relative shadow-[0_4px_24px_rgba(0,0,0,0.10)] cursor-default"
              style={{ backgroundColor: t.bg, transform: `rotate(${t.rotate})` }}
            >
              {/* Pin dot */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#2A5240]/20 shadow-inner" />

              <div className="px-7 pt-10 pb-9">
                {/* Quote mark */}
                <span className="font-display text-3xl text-[#2A5240]/20 leading-none block mb-3 select-none">&ldquo;</span>
                <p className="font-display font-light text-base text-[#3A3A3A] leading-[1.75] italic">
                  {t.quote}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
