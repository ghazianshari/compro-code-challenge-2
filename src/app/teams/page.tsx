"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const team = [
  {
    name: "Zar'kath the Architect",
    role: "Lead Devourer of Code",
    image: "/helAssets/teams/zarkath.png",
    bio: "Wrote the first commit in blood. Hates semicolons.",
  },
  {
    name: "Nyx Voidweaver",
    role: "Creative Ritual Director",
    image: "/helAssets/teams/nyx.png",
    bio: "Can animate anything... even your nightmares.",
  },
  {
    name: "Thorn.exe",
    role: "Full-stack Cyberlich",
    image: "/helAssets/teams/thorn.png",
    bio: "Part human, part compiler. Will haunt your stacktrace.",
  },
  {
    name: "Mira the Intern",
    role: "Soul Courier (Intern)",
    image: "/helAssets/teams/mira.png",
    bio: "Unpaid. Unbothered. Unholy.",
  },
];

const TeamsPage = () => {
  // requesting random user Client Side
  const [users, setUsers] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("https://randomuser.me/api/?results=4");
        if (!res.ok) throw new Error(`API Error: ${res.status}`);
        const data = await res.json();
        setUsers(data.results);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) return <p className="fixed top-85 left-183">Loading...</p>;
  if (error) return <p className="fixed">Error: {error}</p>;

  return (
    <>
      <Navbar />
      <main className="bg-black text-white px-6 md:px-16 lg:px-24 py-24">
        {/* Header */}
        <motion.section
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-extrabold text-red-500 mb-4">
            Meet the Coven
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            These are the cursed minds keeping HelMarket alive and kicking
            through the void. Do not stare too long.
          </p>
        </motion.section>

        {/* Team Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {team.map((member, index) => {
            const user = users[index]; // match one user to one team member

            return (
              <motion.div
                key={member.name}
                className="bg-zinc-900 border border-red-600 p-6 rounded-xl text-center shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                {user && (
                  <img
                    src={user.picture.large}
                    alt={member.name}
                    className="mx-auto rounded-full border border-red-500 mb-4"
                  />
                )}

                <h2 className="text-xl font-semibold text-red-400">
                  {member.name}
                </h2>
                <p className="text-sm text-gray-500 mb-2">{member.role}</p>
                <p className="text-gray-300 italic">“{member.bio}”</p>
              </motion.div>
            );
          })}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TeamsPage;
