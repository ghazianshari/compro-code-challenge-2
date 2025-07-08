"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: "soul-extract-vial",
    name: "Soul Extract Vial",
    price: "66.6",
    image: "/helAssets/SampleProducts.png",
    description: "A vial containing... something. Guaranteed to whisper back.",
  },
  {
    id: "void-cloak",
    name: "Void Cloak",
    price: "999.0",
    image: "/helAssets/SampleProducts.png",
    description: "Wrap yourself in anti-light. Feels like forgetting.",
  },
  {
    id: "eldritch-charm",
    name: "Eldritch Charm",
    price: "333.3",
    image: "/helAssets/SampleProducts.png",
    description: "Boosts luck, or curses your enemies. Possibly both.",
  },
  {
    id: "infernal-blade",
    name: "Infernal Blade",
    price: "1,000.0",
    image: "/helAssets/SampleProducts.png",
    description: "Forged in hate. Banned in 17 dimensions.",
  },
  {
    id: "human-soul",
    name: "Human Soul",
    price: "9,000.0",
    image: "/helAssets/SampleProducts.png",
    description: "Once full of dreams and regret. Now available for purchase.",
  },
  {
    id: "essence-of-wrath",
    name: "Essence of Wrath",
    price: "1,000.0",
    image: "/helAssets/SampleProducts.png",
    description: "Boils endlessly. Handle with rage-resistant gloves.",
  },
  {
    id: "essence-of-gluttony",
    name: "Essence of Gluttony",
    price: "1,000.0",
    image: "/helAssets/SampleProducts.png",
    description: "Hungers for more. Even when you're full, it isn't.",
  },
  {
    id: "essence-of-sloth",
    name: "Essence of Sloth",
    price: "1,000.0",
    image: "/helAssets/SampleProducts.png",
    description:
      "Heavy, slow, and impossible to motivate. Just like you wanted.",
  },
  {
    id: "essence-of-greed",
    name: "Essence of Greed",
    price: "1,000.0",
    image: "/helAssets/SampleProducts.png",
    description: "Whispers promises of more. Never enough, never satisfied.",
  },
  {
    id: "essence-of-lust",
    name: "Essence of Lust",
    price: "1,000.0",
    image: "/helAssets/SampleProducts.png",
    description: "Seductive and dangerous. Be careful what you crave.",
  },
  {
    id: "essence-of-envy",
    name: "Essence of Envy",
    price: "1,000.0",
    image: "/helAssets/SampleProducts.png",
    description: "Wants everything that isn’t yours. Especially happiness.",
  },
  {
    id: "essence-of-pride",
    name: "Essence of Pride",
    price: "1,000.0",
    image: "/helAssets/SampleProducts.png",
    description: "Thinks it's better than the rest. Arrogance sold separately.",
  },
];

const ProductsPage = () => {
  return (
    <main className="bg-black text-white px-6 md:px-16 lg:px-24 py-24">
      <motion.section
        className="text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold text-red-500 mb-4">
          Infernal Goods
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          All items are bound by dark contracts. No refunds. No regrets.
        </p>
      </motion.section>

      {/* PRODUCT CARDS */}
      <section
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto"
        style={{ zoom: 0.8 }}
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="bg-zinc-900 border border-red-600 p-6 rounded-xl shadow-xl flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div>
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={300}
                className="w-full h-auto rounded-lg object-contain border border-red-500 mb-4"
              />
              <h2 className="text-2xl font-bold text-red-400">
                {product.name}
              </h2>
              <p className="text-red-300 text-lg mt-1">${product.price}</p>
              <p className="text-gray-400 mt-2">{product.description}</p>
            </div>
            <Link
              href={`/products/${product.id}`}
              className="mt-6 inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-bold transition-all duration-300 text-center"
            >
              View Details
            </Link>
          </motion.div>
        ))}
      </section>
    </main>
  );
};

export default ProductsPage;
