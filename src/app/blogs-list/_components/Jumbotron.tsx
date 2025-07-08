"use client";

import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const Jumbotron = () => {
  return (
    <section className="bg-black text-white py-20 flex flex-col justify-center items-center gap-6 px-4 text-center border-b border-red-700 shadow-red-900 shadow-inner">
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-red-500 drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        HelBlog
      </motion.h1>

      <motion.p
        className="text-gray-400 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Updates, secrets, and whispers from the depths.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Input
          type="text"
          placeholder="Search forbidden knowledge..."
          className="bg-zinc-900 border border-red-600 text-white placeholder-gray-500 focus-visible:ring-1 focus-visible:ring-red-600 w-[300px] md:w-[400px]"
        />
      </motion.div>
    </section>
  );
};

export default Jumbotron;
