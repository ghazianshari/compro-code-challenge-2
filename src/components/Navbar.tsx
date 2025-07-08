"use client";

import { Bars3Icon, SunIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdEmojiPeople, MdHome, MdLocalPhone, MdWork } from "react-icons/md";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { href: "/", label: "Home", icon: MdHome },
    { href: "/about", label: "About Us", icon: MdEmojiPeople },
    { href: "/products", label: "Products", icon: MdWork },
    { href: "/teams", label: "Teams", icon: MdLocalPhone },
    { href: "/blog", label: "Blog List", icon: MdLocalPhone },
  ];

  return (
    <>
      <motion.div>
        <nav className="container mx-auto p-4 fixed flex z-20 items-center justify-between drop-shadow-lg">
          <Link href="/">
            <Image
              src="/helAssets/HelMarketLogo.png"
              alt="globe"
              width={200}
              height={100}
            />
          </Link>

          <ul className="hidden md:flex gap-10 items-center">
            {menuItems.map((item) => (
              <motion.li
                key={item.href}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-red-500 flex items-center gap-1 transition-colors"
                >
                  {item.icon && <item.icon />}
                  {item.label}
                </Link>
              </motion.li>
            ))}
            <button
              onClick={() => alert("THERE IS NO LIGHTMODE IN HELL")}
              className="flex gap-2 rounded-md text-sm items-center bg-white text-black px-2 cursor-pointer p-1"
            >
              <SunIcon className="h-3 w-3" />
              LightMode
            </button>
          </ul>
        </nav>
        {/* MOBILE BUTTON */}
        <motion.button
          className="md:hidden fixed top-4 right-4 z-40 rounded-lg p-2"
          onClick={toggleMobileMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={
            isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"
          }
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute z-30 top-0 left-0 w-full bg-black"
            >
              <div className="space-y-4 py-4">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="hover:text-red-500 flex items-center gap-1 py-2 w-fit"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.icon && <item.icon />}
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: menuItems.length * 0.1 }}
                >
                  <button
                    onClick={() => {
                      alert("THERE IS NO LIGHT MODE IN HELL");
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center rounded-lg w-fit text-black bg-white p-2 text-sm font-bold"
                  >
                    <SunIcon className="mr-2 h-5 w-5" />
                    LightMode
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Navbar;
