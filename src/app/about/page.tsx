"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <main className="bg-black text-white px-6 md:px-16 lg:px-24 py-24 space-y-11">
      {/* Intro */}
      <motion.section
        className="text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-red-500 mb-6">
          About HelMarket
        </h1>
        <p className="text-lg text-gray-300">
          Built in the shadows, powered by rebellion. HelMarket is not just a
          platform — it’s a resistance against the mundane.
        </p>
      </motion.section>

      {/* Origin Story */}
      <motion.section
        className="grid md:grid-cols-2 gap-16 items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div>
          <h2 className="text-3xl font-bold text-red-400 mb-4">Our Origin</h2>
          <p className="text-gray-400 leading-relaxed">
            Forged in the digital abyss, HelMarket was born from chaos and
            vision. We emerged when the world needed a marketplace that dared to
            go where others wouldn’t — the underworld of innovation.
          </p>
        </div>
        <Image
          src="/helAssets/hell_origin_illustration.png"
          alt="Origin"
          width={600}
          height={400}
          className="w-full h-auto rounded-xl shadow-lg border border-red-800"
        />
      </motion.section>

      {/* What Drives Us */}
      <motion.section
        className="grid md:grid-cols-2 gap-16 items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Image
          src="/helAssets/hell_culture_rituals.png"
          alt="Culture"
          width={600}
          height={400}
          className="w-full h-auto rounded-xl shadow-lg border border-red-800"
        />
        <div>
          <h2 className="text-3xl font-bold text-red-400 mb-4">
            What Drives Us
          </h2>
          <p className="text-gray-400 leading-relaxed">
            At HelMarket, creativity isn’t a skill — it’s a ritual. We thrive in
            paradox: bold yet calculated, chaotic yet precise. We welcome all
            forms of expression, as long as they burn bright and true.
          </p>
        </div>
      </motion.section>

      {/* Final Quote or CTA */}
      <motion.section
        className="text-center max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="mt-20 text-xl italic text-red-300 mb-4">
          “Trade with fire, rise from ash.”
        </p>
        <p className="text-gray-500 text-sm mb-8">— Lucifer, Founder & CEO</p>

        <Link
          href="/products"
          className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300"
        >
          Enter the Market
        </Link>
      </motion.section>
    </main>
  );
};

export default AboutPage;
