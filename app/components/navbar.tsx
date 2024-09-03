"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="p-3 flex bg-white items-center fixed top-0 left-0 right-0 z-20 shadow-md">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold font-display">Lego</span>
        </div>

        {/* Navigation Menu */}
        <div className="flex flex-1 justify-center">
          <div id="nav-menu" className="hidden md:flex gap-9 items-center">
            <Link
              href="/convert"
              className="font-semibold hover:text-primary hover:text-blue-700"
            >
              Convert Code
            </Link>

            <Link
              href="#features"
              className="font-semibold hover:text-primary hover:text-blue-700"
            >
              Features
            </Link>

            <Link
              href="#overview"
              className="font-semibold hover:text-primary hover:text-blue-700"
            >
              Overview
            </Link>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl p-2 bg-blue-500 text-white rounded"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
      </nav>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={closeMenu}
      ></div>
      <div
        className={`fixed inset-y-0 left-0 bg-white w-64 p-5 z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out bg-pink-to-r bg-gradient-to-r from-pink-50 to-blue-50`}
      >
        <button onClick={closeMenu} className="text-2xl p-2 mb-5">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <ul className="flex flex-col gap-4 text-lg font-semibold">
          <li>
            <Link href="/convert">
              <p className="hover:text-blue-500" onClick={closeMenu}>
                Convert the code
              </p>
            </Link>
          </li>
          <li>
            <Link href="#overview">
              <p className="hover:text-blue-500" onClick={closeMenu}>
                Overview
              </p>
            </Link>
          </li>
          <li>
            <Link href="#features">
              <p className="hover:text-blue-500" onClick={closeMenu}>
                Features
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
