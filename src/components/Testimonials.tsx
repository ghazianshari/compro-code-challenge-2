"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Az'Rok the Soul Eater",
    title: "Infernal UX Designer",
    quote:
      "HelMarket gave me tools even the ninth circle couldn’t offer. Usability? As smooth as spilled blood.",
    avatar: "/helAssets/avatar-azrok.jpeg",
  },
  {
    name: "Lilith.exe",
    title: "Cyber Witch",
    quote:
      "Finally, a marketplace that respects my hexes and handles dark data gracefully. A literal hellsend.",
    avatar: "/helAssets/avatar-lilith.jpeg",
  },
  {
    name: "Greg",
    title: "The Random Dude",
    quote:
      "I don’t know what I bought, but I glitched through three realities and woke up enlightened.",
    avatar: "/helAssets/avatar-greg.jpeg",
  },
];

const partners = [
  "/helAssets/partner-1.png",
  "/helAssets/partner-2.png",
  "/helAssets/partner-3.png",
  "/helAssets/partner-4.png",
  "/helAssets/partner-5.png",
];

const Testimonials = () => {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-16 lg:px-24 relative">
      {/* Background Glow or Pattern */}
      <div className="absolute inset-0 opacity-15">
        <Image
          src="/helAssets/hellbg.jpg"
          alt="Background texture"
          fill
          className="pointer-events-none object-cover"
        />
      </div>
      {/* Testimonials */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-red-500 mb-4">
          Voices from the Void
        </h2>
        <p className="text-gray-400 text-lg">
          Here's what our... satisfied entities... had to say.
        </p>
      </motion.div>

      <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <motion.div
            key={t.name}
            className="bg-black p-6 rounded-xl border border-red-600 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={t.avatar}
                alt={t.name}
                width={50}
                height={50}
                className="rounded-full border border-red-500"
              />
              <div>
                <h4 className="font-semibold text-red-400">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.title}</p>
              </div>
            </div>
            <p className="text-gray-300 italic">“{t.quote}”</p>
          </motion.div>
        ))}
      </div>

      {/* Partners */}
      <motion.div
        className="mt-24 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">
          Our Trusted Partners
        </h3>
        <p className="text-gray-400 mb-8">Even dark empires need friends.</p>
        <div className="flex justify-center">
          {partners.map((logo, i) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Image src={logo} alt="partner logo" width={220} height={220} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
