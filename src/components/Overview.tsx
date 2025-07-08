"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Overview = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16 lg:px-24">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-red-500 mb-6">
          What is HelMarket?
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
          Born in the underworld, forged by chaos — HelMarket is the
          black-flamed bazaar where bold ideas become forbidden reality. We
          operate where others fear to tread.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 text-left">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-red-400 mb-4">Our Team</h3>
          <p className="text-gray-400 leading-relaxed">
            From rogue engineers to creative misfits, our team is stacked with
            talent that thrives beyond conventional limits. Curious? Get to know
            them soon.
          </p>
          <Link
            href="/teams"
            className="text-red-500 hover:underline mt-3 inline-block"
          >
            Meet the crew →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-red-400 mb-4">
            Our Culture
          </h3>
          <p className="text-gray-400 leading-relaxed">
            We embrace the weird, worship innovation, and raise hell against
            mediocrity. At HelMarket, it’s not just work — it’s ritual. 🔥
          </p>
          <Link
            href="/about"
            className="text-red-500 hover:underline mt-3 inline-block"
          >
            Learn more →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Overview;
