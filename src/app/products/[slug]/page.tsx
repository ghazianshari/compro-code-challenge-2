"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";

// Dummy product data (same as in /products for now)
const products = [
  {
    id: "soul-extract-vial",
    name: "Soul Extract Vial",
    price: "66.6",
    image: "/helAssets/products/soul_vial.png",
    description:
      "This vial contains the condensed essence of the damned. Whispers. Regrets. Memories not your own.",
  },
  {
    id: "void-cloak",
    name: "Void Cloak",
    price: "999.0",
    image: "/helAssets/products/void_cloak.png",
    description:
      "A cloak woven from fragments of reality. Wearing it may cause existential instability. Stylish tho.",
  },
  {
    id: "eldritch-charm",
    name: "Eldritch Charm",
    price: "333.3",
    image: "/helAssets/products/eldritch_charm.png",
    description:
      "Infused with forbidden glyphs. Boosts chaotic probabilities. Don't sleep next to it.",
  },
  {
    id: "infernal-blade",
    name: "Infernal Blade",
    price: "1,000.0",
    image: "/helAssets/products/infernal_blade.png",
    description:
      "Forged in hatred, quenched in screams. One slash and you’ll hear its former owners.",
  },
];

const ProductDetail = () => {
  const params = useParams();
  const slug = params?.slug as string;

  const product = products.find((p) => p.id === slug);

  if (!product) {
    notFound(); // Optional custom 404 later
  }

  return (
    <main className="bg-black text-white px-6 md:px-16 lg:px-24 py-24 min-h-screen">
      <motion.section
        className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto my-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={400}
          className="rounded-xl border border-red-600 shadow-2xl"
        />
        <div>
          <h1 className="text-4xl font-bold text-red-500 mb-4">
            {product.name}
          </h1>
          <p className="text-2xl text-red-300 font-semibold mb-6">
            ${product.price}
          </p>
          <p className="text-gray-300 leading-relaxed mb-8">
            {product.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-md font-semibold text-sm"
            >
              ← Back to Products
            </Link>
            <button
              onClick={() => alert("SUMMONING INITIATED. SOUL BOUND.")}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-bold text-sm transition-all"
            >
              Summon this Item
            </button>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default ProductDetail;
