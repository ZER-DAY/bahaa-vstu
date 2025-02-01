"use client";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import ArrowRight from "@/assets/arrow-right.svg";
import logoAlasel from "@/assets/Logoasel.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import { useState } from "react"; // Import useState
import { FaWhatsapp } from "react-icons/fa";

export const Header = () => {
  const arrowControls = useAnimation();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu open/close

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu state on icon click
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close menu on link click
  };

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      {/* Top part of the header */}
      <div className="flex justify-center items-center py-2 bg-[#1A1A1A] text-white text-sm gap-2">
        <p className="text-white/80 hidden md:block">
          Embark on a bright future with Al-Aseel Agency, where we build
          together your first steps towards success and development.
        </p>
        <Link href="join-our-agency">
          <motion.div
            className="inline-flex gap-1 items-center cursor-pointer"
            onHoverStart={() => arrowControls.start({ x: 5 })}
            onHoverEnd={() => arrowControls.start({ x: 0 })}
          >
            <p>Start Now</p>
            <motion.div animate={arrowControls} transition={{ duration: 0.2 }}>
              <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
            </motion.div>
          </motion.div>
        </Link>
      </div>

      {/* Main part of the header */}
      <div className="py-5 bg-[#1A1A1A]">
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="inline-flex relative before:absolute before:blur-md">
              <Image
                src={logoAlasel}
                alt="Footer Logo"
                height={70}
                className="relative"
              />
            </div>

            {/* Menu icon (for mobile devices) */}
            <MenuIcon
              className="h-5 w-5 md:hidden text-white cursor-pointer"
              onClick={toggleMenu} // Toggle menu state on icon click
            />

            {/* Navigation menu (for larger devices) */}
            <nav className="hidden md:flex gap-6 text-white/60 items-center">
              <Link href="/">Home</Link>
              <Link href="/posts">posts</Link>
              <Link href="/aboutus">About Us</Link>
              <Link href="/contact">Contact Us</Link>
              <div className="mt-3 flex justify-center items-center space-x-4 space-x-reverse">
                {/* WhatsApp button */}
                <a
                  href="https://wa.me/+96879445665"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition"
                >
                  <FaWhatsapp className="w-6 h-6 mr-2" />
                  Contact Us
                </a>
              </div>
            </nav>

            {/* Navigation menu (for mobile devices) */}
            {isMenuOpen && (
              <nav className="md:hidden absolute top-24 right-0 bg-[#1A1A1A] w-full text-white/60 p-4">
                <Link href="/" className="block py-2" onClick={closeMenu}>
                  Home
                </Link>
                <Link href="/posts" className="block py-2" onClick={closeMenu}>
                  posts
                </Link>
                <Link
                  href="/aboutus"
                  className="block py-2"
                  onClick={closeMenu}
                >
                  About Us
                </Link>

                <Link
                  href="/contact"
                  className="block py-2"
                  onClick={closeMenu}
                >
                  Contact Us
                </Link>
                <button className="bg-white text-black px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight mt-2">
                  Start With Us
                </button>
              </nav>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
