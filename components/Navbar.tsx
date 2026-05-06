"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/moonshinebandoff",
    icon: "/icons/Facebook_white.png",
    hoverClass: "hover:bg-[#1877F2]",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/moonshineband.official",
    icon: "/icons/Instagram_white.png",
    hoverClass: "hover:bg-[#E4405F]",
  },
  {
    name: "Spotify",
    href: "https://open.spotify.com/artist/6RtrOH9czw4PIu2dN1citD?si=CHHHkMCRSLG9uAFcGwz7Ig",
    icon: "/icons/Spotify_white.png",
    hoverClass: "hover:bg-[#1DB954]",
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: "/icons/Youtube_white.png",
    hoverClass: "hover:bg-[#FF0000]",
  },
];

const navLinks = [
  { href: "/#videos", label: "Teledyski" },
  { href: "/#galeria", label: "Galeria" },
  { href: "/#releases", label: "Wydania" },
  { href: "/#instagram", label: "Instagram" },
  { href: "/#band", label: "Skład" },
  { href: "/#epk", label: "EPK" },
  { href: "/#contact", label: "Kontakt" },
];

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 50) {
        setShow(false);
        setMenuOpen(false);
      } else {
        setShow(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 
      ${show ? "translate-y-0" : "-translate-y-full"}
      bg-black/30`}
    >
      <div className={`mx-auto flex justify-between items-center p-4 ${bebas.className}`}>

        <div className="flex items-center gap-4">

          <Link
            href="/"
            aria-label="Przejdź na stronę główną"
            className="flex items-center"
          >
            <img
              src="/bialy.png"
              alt="Logo"
              className="h-20 w-auto object-contain opacity-70 hover:opacity-100 transition"
            />
          </Link>

          <div className="hidden md:flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className={`flex h-10 w-10 items-center justify-center rounded-full opacity-70 transition hover:opacity-100 ${social.hoverClass} ${index === 0 ? "ml-10" : ""}`}
              >
                <img src={social.icon} alt="" className="h-10 w-10 object-contain" />
              </a>
            ))}
          </div>
        </div>

        <nav className="hidden gap-6 text-3xl uppercase tracking-wider text-gray-300 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center text-3xl text-white/80 transition hover:text-white md:hidden"
          aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`border-t border-white/10 bg-black/90 px-6 pb-6 pt-2 uppercase tracking-wider text-gray-200 transition md:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border-b border-white/10 py-4 text-sm transition hover:text-white"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className={`flex h-10 w-10 items-center justify-center rounded-full opacity-80 transition hover:opacity-100 ${social.hoverClass}`}
              onClick={closeMenu}
            >
              <img src={social.icon} alt="" className="h-10 w-10 object-contain" />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
