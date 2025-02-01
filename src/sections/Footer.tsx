"use client";
// src/components/Footer.tsx
import {
  FaTelegram,
  FaWhatsapp,
  FaLinkedinIn,
  FaSkype,
  FaVk,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="text-center md:text-left mb-3 md:mb-0">
            <p className="text-sm">
              © Copyright <strong>DigitalNews</strong>. All Rights Reserved
            </p>
            <p className="text-xs">
              Designed by{" "}
              <a href="#" className="text-blue-400 hover:underline">
                DStudio Technology
              </a>
            </p>
          </div>

          {/* Right Section (Social Media Icons) */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700"
              aria-label="Twitter"
            >
              <FaVk className="text-white text-xl" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700"
              aria-label="Facebook"
            >
              <FaTelegram className="text-white text-xl" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700"
              aria-label="Instagram"
            >
              <FaWhatsapp className="text-white text-xl" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700"
              aria-label="Skype"
            >
              <FaSkype className="text-white text-xl" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-white text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
