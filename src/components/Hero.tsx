"use client";

import { motion, scale } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background Glow or Pattern */}
      <div className="inset-0 opacity-20">
        <Image
          src="/helAssets/hellbg.jpg"
          alt="Background texture"
          fill
          className="pointer-events-none object-cover"
        />
      </div>

      <motion.div
        className="relative z-10 text-center px-4 max-w-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 text-red-500 drop-shadow-lg">
          Welcome to HelMarket
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Dive into the abyss of exclusive underground deals. One click closer
          to damnation.
        </p>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
          <Link
            href="/products"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300"
          >
            Browse Products
          </Link>
        </motion.button>
      </motion.div>

      {/* Optional Hero Image */}
      <motion.div
        className="hidden md:block absolute bottom-0 right-0 max-w-md"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <Image
          src="/helAssets/herormv.png"
          alt="Hero character"
          width={300}
          height={300}
          className="drop-shadow-2xl"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
