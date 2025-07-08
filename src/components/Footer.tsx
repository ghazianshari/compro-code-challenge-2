"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaDiscord, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmojiPeople, MdHome, MdLocalPhone, MdWork } from "react-icons/md";

const navLinks = [
  { href: "/", label: "Home", icon: MdHome },
  { href: "/about", label: "About", icon: MdEmojiPeople },
  { href: "/products", label: "Products", icon: MdWork },
  { href: "/teams", label: "Teams", icon: MdLocalPhone },
  { href: "/blog", label: "Blog", icon: MdLocalPhone },
];

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/helmarket" },
  { icon: FaTwitter, href: "https://twitter.com/helmarket" },
  { icon: FaLinkedin, href: "https://linkedin.com/company/helmarket" },
  { icon: FaDiscord, href: "https://discord.gg/helmarket" },
];

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-gray-300 py-12 px-6 md:px-16 lg:px-24 border-t-2 border-red-600">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Left: Logo and Creed */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-red-500 mb-4">HelMarket</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            In darkness, we trade. In fire, we trust. HelMarket isn’t just a
            brand — it’s a blood pact.
          </p>
        </motion.div>

        {/* Middle: Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-red-400 mb-4">Navigate</h3>
          <ul className="space-y-3">
            {navLinks.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="flex items-center gap-2 hover:text-red-500 transition-colors"
                >
                  <Icon className="text-red-500" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right: Social */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-red-400 mb-4">Follow Us</h3>
          <div className="flex gap-5">
            {socialLinks.map(({ href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-gray-400 hover:text-red-500 transition"
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom: Copyright */}
      <motion.div
        className="mt-12 text-center text-sm text-gray-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} HelMarket. All souls reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
