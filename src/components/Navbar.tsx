"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@components/common/Button";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/all-researches", label: "All Research" },
  ];

  return (
    <div className="fixed top-0 right-0 left-0 z-50 bg-white">
      <div className="relative container mx-auto flex items-center justify-between px-4 py-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="cursor-pointer">
            <Image src="/images/logo.svg" alt="logo" width={141} height={31} />
          </Link>
        </div>

        {/* Desktop nav */}
        <ul className="hidden list-none items-center gap-4 sm:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`w-full text-left ${pathname === link.href ? "text-green-1 font-bold" : ""}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Button className="hidden text-xs font-bold sm:block">
          <Link href="https://chapa.co" target="_blank">
            Visit Chapa Website
          </Link>
        </Button>

        {/* Hamburger for mobile */}
        <button
          className="z-20 flex h-8 w-8 flex-col items-center justify-center sm:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            // X icon
            <span className="relative block h-6 w-6 transition-all duration-300 ease-in">
              <span
                className="bg-green-5 absolute top-1/2 left-0 h-0.5 w-6 rounded"
                style={{ transform: "translateY(-50%) rotate(45deg)" }}
              />
              <span
                className="bg-green-5 absolute top-1/2 left-0 h-0.5 w-6 rounded"
                style={{ transform: "translateY(-50%) rotate(-45deg)" }}
              />
            </span>
          ) : (
            // Hamburger icon
            <>
              <span className="bg-green-5 mb-1 block h-0.5 w-6 rounded transition-all duration-300 ease-in" />
              <span className="bg-green-5 mb-1 block h-0.5 w-6 rounded transition-all duration-300 ease-in" />
              <span className="bg-green-5 block h-0.5 w-6 rounded transition-all duration-300 ease-in" />
            </>
          )}
        </button>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="absolute top-full right-4 z-10 flex min-w-[180px] flex-col items-start gap-4 rounded-xl bg-white p-4 shadow-lg sm:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`w-full text-left ${pathname === link.href ? "text-green-1 font-bold" : ""}`}
              >
                {link.label}
              </Link>
            ))}
            <Button className="mt-2 w-full text-xs font-bold">
              <Link
                href="https://chapa.co"
                target="_blank"
                onClick={() => setMenuOpen(false)}
              >
                Visit Chapa Website
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
