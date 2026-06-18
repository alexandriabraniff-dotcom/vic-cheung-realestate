"use client";

import { motion } from "motion/react";

const plans = [
  {
    number: "01",
    name: "Private Session",
    price: "Contact for pricing",
    features: ["60 or 90 minutes", "Personalised sequencing", "Hands-on adjustments", "Mat & props provided", "All levels"],
    cta: "Enquire",
    featured: false,
  },
  {
    number: "02",
    name: "Small Group",
    price: "Contact for pricing",
    features: ["Ashtanga Vinyasa flow", "Kept deliberately small", "Personal guidance", "Mat & props", "Complimentary tea"],
    cta: "Book a Spot",
    featured: true,
  },
  {
    number: "03",
    name: "First Class",
    price: "New students",
    features: ["No experience needed", "All levels welcome", "Personal attention", "Mat & props provided"],
    cta: "Say Hello",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#F7F5F1] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#2A5240]" />
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#2A5240]">Pricing</p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <h2 className="font-display font-light text-3xl sm:text-4xl text-[#1A2B2B] leading-[1.15]">
              <em className="italic">Simple</em> and personal.
            </h2>
            <p className="text-xs text-[#6B7A7A] font-light sm:text-right leading-relaxed shrink-0">
              Reach out directly. [Instructor Name] will find<br className="hidden sm:block" /> the right fit for you.
            </p>
          </div>
        </motion.div>

        {/* Plans */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              className={`flex flex-col p-6 ${
                plan.featured
                  ? "bg-[#2A5240] text-white"
                  : "bg-white border border-[#E8E5E0]"
              }`}
            >
              {/* Number */}
              <span className={`font-display text-2xl font-light mb-4 ${plan.featured ? "text-white/20" : "text-[#DDDAD5]"}`}>
                {plan.number}
              </span>

              {/* Name + price */}
              <p className={`text-[10px] uppercase tracking-[0.25em] mb-1 ${plan.featured ? "text-[#8FC4D0]" : "text-[#2A5240]"}`}>
                {plan.name}
              </p>
              <p className={`font-display font-light text-lg mb-5 ${plan.featured ? "text-white" : "text-[#1A2B2B]"}`}>
                {plan.price}
              </p>

              {/* Divider */}
              <div className={`h-px mb-5 ${plan.featured ? "bg-white/10" : "bg-[#F0EDE8]"}`} />

              {/* Features */}
              <ul className="space-y-2.5 flex-1 mb-7">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-xs font-light">
                    <span className={`w-3 h-px flex-shrink-0 ${plan.featured ? "bg-[#8FC4D0]" : "bg-[#2A5240]/40"}`} />
                    <span className={plan.featured ? "text-[#B8DDE6]" : "text-[#6B7A7A]"}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`text-center py-2.5 text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${
                  plan.featured
                    ? "bg-white text-[#2A5240] hover:bg-[#F4F2EE]"
                    : "border border-[#C4C0BA] text-[#1A2B2B] hover:border-[#2A5240] hover:text-[#2A5240]"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
