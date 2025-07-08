"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const RegisterPage = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("☠️ Your passwords do not match. Chaos detected.");
      return;
    }

    alert("🔥 SOUL CONTRACT INITIATED. You are now bound.");
    // TODO: Connect to your Backendless or custom API here
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
          Join the Market
        </h1>
        <p className="text-center text-sm text-gray-400 mb-8">
          One of us. One of us.
        </p>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Username</label>
            <input
              type="text"
              name="username"
              required
              value={form.username}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-zinc-800 border border-red-500 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="darklord88"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
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

          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              required
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-zinc-800 border border-red-500 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="••••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-red-600 hover:bg-red-700 transition rounded-md text-white font-semibold"
          >
            Join the Market
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-400">
          Already marked?{" "}
          <Link href="/login" className="text-red-500 hover:underline">
            Return to the Gate
          </Link>
        </div>
      </motion.div>
    </main>
  );
};

export default RegisterPage;
