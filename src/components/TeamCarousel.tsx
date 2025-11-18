// src/components/TeamSection.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TeamSection() {
  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Hansy-banner.jpg"
          alt="Amar Gallery interior"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 md:px-10 text-center">
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-widest text-white/70"
        >
          Founder & Curator
        </motion.p>

        {/* Name */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-3 text-3xl md:text-5xl font-serif font-semibold text-white"
        >
          Hansy Yaegy
        </motion.h2>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2 }}
          className="mt-6 max-w-2xl mx-auto text-center text-white/80 text-sm md:text-base leading-relaxed"
        >
          The visionary behind Amar Gallery — Hansy Yaegy curates exhibitions
          that merge contemporary artistry with cultural heritage, crafting
          immersive experiences that resonate deeply with the modern audience.
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-10 h-[1px] w-24 bg-white/40"
        />

        {/* Additional message */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-6 text-white/70 text-sm"
        >
          Inspiring the next generation of art enthusiasts & storytellers.
        </motion.p>
      </div>
    </section>
  );
}
