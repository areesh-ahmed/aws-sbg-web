"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import PixelGraphic from "@/components/PixelGraphic";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Team", path: "/team" },
  { name: "Services", path: "/services" },
  { name: "Events", path: "/events" },
  { name: "Blogs", path: "/blogs" },
  { name: "Resources", path: "/resources" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-canvas/80 backdrop-blur-md border-b border-subtle py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-[1200px] mx-auto px-[24px] lg:px-[80px] flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-3 z-50 group">
          <div className="w-8 h-8 relative flex items-center justify-center">
            <PixelGraphic color="purple" className="w-full h-full" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-sm font-bold tracking-tight text-primary leading-tight group-hover:text-purple transition-colors">
              AWS Student Builder Group
            </span>
            <span className="font-mono text-[11px] text-secondary leading-tight">
              MIT ADT University
            </span>
          </div>
        </Link>

        {/* Center: Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className="relative px-4 py-2 font-mono text-[13px] uppercase tracking-wider"
              >
                <span
                  className={clsx(
                    "relative z-10 transition-colors duration-200",
                    isActive ? "text-primary font-bold" : "text-secondary hover:text-primary"
                  )}
                >
                  {link.name}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-purple"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-secondary hover:text-primary transition-colors p-2" aria-label="Search">
            <Search size={18} />
          </button>
          <Link
            href="#"
            className="flex items-center gap-1 bg-purple text-squid-ink px-5 py-2.5 font-mono text-[13px] font-bold tracking-wide uppercase hover:bg-purple/90 transition-all hover:-translate-y-0.5"
          >
            Join Community
            <ArrowUpRight size={16} className="ml-1" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 text-primary p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-canvas/95 backdrop-blur-xl z-40 flex flex-col pt-24 px-6 pb-8"
          >
            <nav className="flex flex-col gap-6 flex-grow">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group"
                  >
                    <span
                      className={clsx(
                        "text-3xl font-mono uppercase tracking-tight block",
                        isActive ? "text-purple" : "text-primary group-hover:text-purple"
                      )}
                    >
                      {link.name}
                    </span>
                  </Link>
                );
              })}
            </nav>
            <div className="mt-auto border-t border-subtle pt-6 flex flex-col gap-4">
              <Link
                href="#"
                className="flex items-center justify-center w-full gap-2 bg-purple text-squid-ink px-6 py-4 font-mono text-[16px] font-bold tracking-wide uppercase"
              >
                Join Community
                <ArrowUpRight size={20} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
