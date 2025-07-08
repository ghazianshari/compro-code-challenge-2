"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const LoginPage = () => {
  const [form, setForm] = useState({ identity: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert("AUTH RITUAL INITIATED ⚔️");
    // TODO: Connect to your auth API here
  };

  return (
    <main className="bg-black text-white min-h-screen flex items-center justify-center px-6 py-24">
      <motion.div
        className="w-full max-w-md bg-zinc-900 border border-red-600 rounded-2xl p-8 shadow-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-red-500 text-center mb-6">
          Welcome Back, Mortal
        </h1>
        <p className="text-center text-sm text-gray-400 mb-8">
          Access the marketplace of shadows.
        </p>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Username or Email
            </label>
            <input
              type="text"
              name="identity"
              required
              value={form.identity}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-zinc-800 border border-red-500 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="you@helmarket.dev"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Password</label>
            <input
              type="password"
              name="password"
              required
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-zinc-800 border border-red-500 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="••••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-red-600 hover:bg-red-700 transition rounded-md text-white font-semibold"
          >
            Enter the Market
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-400">
          Forgot your password?{" "}
          <Link href="/recover" className="text-red-500 hover:underline">
            Summon recovery
          </Link>
        </div>
      </motion.div>
    </main>
  );
};

export default LoginPage;
