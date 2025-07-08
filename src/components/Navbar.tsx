"use client";

import { Bars3Icon, SunIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaClipboardList, FaFire } from "react-icons/fa";
import { GiHellCrosses } from "react-icons/gi";
import { MdEmojiPeople, MdWork } from "react-icons/md";
import { Button } from "./ui/button";
import { useAuthStore } from "@/stores/auth";

const Navbar = () => {
  const { user, clearAuth } = useAuthStore(); // TODO: CEK KEABSAHAN
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [atPageBottom, setAtPageBottom] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const bottom =
        window.innerHeight + scrollY >= document.body.offsetHeight - 10;

      setIsScrolled(scrollY > 50);
      setAtPageBottom(bottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { href: "/", label: "Home", icon: FaFire },
    { href: "/about", label: "About Us", icon: GiHellCrosses },
    { href: "/products", label: "Products", icon: MdWork },
    { href: "/teams", label: "Teams", icon: MdEmojiPeople },
    { href: "/blogs-list", label: "Blog List", icon: FaClipboardList },
    // { href: "/write", label: "create blog", icon: FaClipboardList },
    // { href: "/login", label: "login", icon: FaClipboardList },
    // { href: "/", label: "login", icon: FaClipboardList },
  ];

  return (
    <>
      <motion.div
        initial={false}
        animate={{
          opacity: atPageBottom ? 0 : 1,
          y: atPageBottom ? -20 : 0,
        }}
        transition={{ duration: 0.4 }}
        className={atPageBottom ? "pointer-events-none" : "pointer-events-auto"}
      >
        <nav
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-0 ${
            isScrolled
              ? "backdrop-blur-lg bg-black/30 border-b border-white/10"
              : "bg-transparent"
          }`}
        >
          <div className="container mx-auto p-4 flex items-center justify-between">
            <Link href="/">
              <Image
                src="/helAssets/HelMarketLogo.png"
                alt="globe"
                width={200}
                height={100}
              />
            </Link>

            <ul className="hidden md:flex gap-10 items-center text-white">
              {menuItems.map((item) => (
                <motion.li
                  key={item.href}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href={item.href}
                    className="hover:text-red-500 flex items-center gap-1 transition-colors"
                  >
                    {item.icon && <item.icon />}
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              {user ? (
                <>
                  <Button className="flex gap-2 rounded-md text-sm items-center bg-white text-black px-2 cursor-pointer p-1">
                    <Link href="/write">Create Blog</Link>
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={clearAuth}
                    className="flex gap-2 rounded-md text-sm items-center bg-red-700 text-black px-2 cursor-pointer p-1"
                  >
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Button className="flex gap-2 rounded-md text-sm items-center bg-white text-black px-2 cursor-pointer p-1">
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button className="flex gap-2 rounded-md text-sm items-center bg-white text-black px-2 cursor-pointer p-1">
                    <Link href="/register">Register</Link>
                  </Button>
                </>
              )}

              <Button
                onClick={() => alert("THERE IS NO LIGHTMODE IN HELL")}
                className="flex gap-2 rounded-md text-sm items-center bg-white text-black px-2 cursor-pointer p-1"
              >
                <SunIcon className="h-3 w-3" />
                LightMode
              </Button>
            </ul>
          </div>
        </nav>
      </motion.div>

      {/* MOBILE BUTTON */}
      <motion.button
        className="md:hidden fixed top-4 right-4 z-[999] rounded-lg p-2 bg-white/20 backdrop-blur-md text-white"
        onClick={toggleMobileMenu}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
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
            className="md:hidden fixed z-30 top-19 left-0 w-full bg-black"
          >
            <div className="space-y-4 py-4 px-6 text-white">
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
    </>
  );
};

export default Navbar;
