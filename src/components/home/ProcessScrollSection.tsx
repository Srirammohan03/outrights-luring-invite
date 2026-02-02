// src/components/home/ProcessScrollSection.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const THEME = "#a86dcd";

export default function ProcessScrollSection() {
  return (
    <section
      className="relative min-h-screen py-20 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 w-full px-4 flex flex-col items-center">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Our{" "}
            <span className="italic" style={{ color: THEME }}>
              Process
            </span>
          </h2>
          <p className="mt-2 text-muted-foreground text-sm md:text-base">
            Crafting your story, one layer at a time
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full flex items-center justify-center"
        >
          {/* Desktop image */}
          <img
            src="/assets/caterpillar.png"
            alt="Process Desktop"
            className="hidden md:block w-full max-w-7xl h-auto"
            loading="lazy"
            draggable={false}
          />

          {/* Mobile image */}
          <img
            src="/assets/ourprocess-mobile.png"
            alt="Process Mobile"
            className="block md:hidden w-full max-w-md h-auto"
            loading="lazy"
            draggable={false}
          />
        </motion.div>
      </div>
    </section>
  );
}
