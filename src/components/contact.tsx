"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { MapPin, Phone, Camera, Users } from "lucide-react";

const details = [
  {
    icon: MapPin,
    label: "Studio Address",
    value: "[Street Address, Suburb State Postcode]",
    href: "#",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "[Phone Number]",
    href: "tel:[Phone Number]",
  },
  {
    icon: Camera,
    label: "Instagram",
    value: "@[handle]",
    href: "#",
  },
  {
    icon: Users,
    label: "Facebook",
    value: "facebook.com/[page]",
    href: "#",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-20 md:py-32">

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
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#2A5240]">Get in Touch</p>
          </div>
          <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-[#1A2B2B] leading-[1.1]">
            Ready to begin?{" "}
            <em className="italic text-[#2A5240]">Say hello.</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* LEFT — contact details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="divide-y divide-[#F0EDE8]"
          >
            {details.map((d, i) => {
              const Icon = d.icon;
              return (
                <motion.a
                  key={d.label}
                  href={d.href}
                  target={d.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-center gap-5 py-5 group cursor-pointer"
                >
                  <div className="w-10 h-10 bg-[#2A5240]/8 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2A5240] transition-colors duration-300">
                    <Icon size={15} className="text-[#2A5240] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] uppercase tracking-widest text-[#A0A8A8] mb-0.5">{d.label}</p>
                    <p className="text-sm text-[#1A2B2B] font-light group-hover:text-[#2A5240] transition-colors duration-200">
                      {d.value}
                    </p>
                  </div>
                  <span className="text-[#D0CCC8] group-hover:text-[#2A5240] transition-colors duration-200 text-xs">→</span>
                </motion.a>
              );
            })}
          </motion.div>

          {/* RIGHT — image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative h-[340px] sm:h-[420px] lg:h-full min-h-[340px] overflow-hidden"
          >
            <Image
              src="/481332882_18301849903237707_4741467126479165117_n.jpg"
              alt="Yoga class"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              style={{ objectPosition: "center bottom" }}
            />
            {/* Subtle green tint */}
            <div className="absolute inset-0 bg-[#2A5240]/10" />

          </motion.div>
        </div>
      </div>
    </section>
  );
}
