"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="bg-[#F7F5F1]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 bg-[#2A5240]/8" />
            <div className="relative h-[340px] sm:h-[420px] lg:h-[500px] overflow-hidden">
              <Image
                src="/yoga-with-pack-yosana.jpg"
                alt="Yoga instructor"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#2A5240]" />
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#2A5240]">Meet [Instructor Name]</p>
            </div>

            <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-[#1A2B2B] leading-[1.15] mb-7">
              Welcome to{" "}
              <br className="hidden sm:block" />
              <em className="italic text-[#2A5240]">[Studio Name].</em>
            </h2>

            <div className="space-y-5 text-sm text-[#6B7A7A] font-light leading-[1.9]">
              <p>
                [Studio Name] was created by <strong className="text-[#1A2B2B] font-normal">[Instructor Name]</strong>. A yoga specialist based in [Suburb, State], what began as a deeply personal practice grew into a quiet, intentional space where others could experience yoga the way it was always meant to feel: unhurried, attentive, and genuinely caring.
              </p>
              <p>
                [Instructor Name] brings a rare quality to their teaching. They watch carefully, reading each body with patience and precision, adjusting postures with a gentle hand and meeting every student exactly where they are. Whether you have practised for years or are stepping onto a mat for the very first time, they have a gift for making you feel seen.
              </p>
              <p>
                The studio is kept deliberately small, because [Instructor Name] believes that real yoga cannot happen in a crowd. It happens in the space between breath and stillness, when a teacher is truly present with you.
              </p>
              <p>
                This is that space.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
