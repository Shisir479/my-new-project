// src/components/AboutHero.tsx
import React from "react";

export default function AboutHero() {
  return (
    <header className="relative w-full overflow-hidden">
      <div className="relative h-[420px] md:h-[520px] lg:h-[620px]">
        <img
          src="/Hansy-banner.jpg"
          alt="Amar Gallery interior"
          className="absolute inset-0 w-full h-full object-cover brightness-90"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-transparent"></div>

        <div className="relative max-w-[1200px] mx-auto px-4 py-28 md:py-36">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-6xl font-serif font-semibold leading-tight">
              About Amar Gallery
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/90 leading-relaxed">
              A curated home for contemporary and classic expressions. We
              showcase limited editions, support local artists, and create
              thoughtful exhibitions that connect people with art.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="/collections"
                className="inline-block px-5 py-3 rounded-full bg-white text-black font-semibold shadow"
              >
                Browse Collections
              </a>
              <a
                href="/exhibitions"
                className="inline-block px-4 py-2 rounded-full border border-white text-white text-sm"
              >
                Current exhibitions
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
