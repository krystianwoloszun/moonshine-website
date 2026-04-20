"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 50) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 
      ${show ? "translate-y-0" : "-translate-y-full"}
      bg-black/30`}
    >
      <div className={`mx-auto flex justify-between items-center p-4 ${bebas.className}`}>

        <div className="flex items-center gap-4">

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }
            aria-label="Przewiń do góry"
            className="flex items-center"
          >
            <img
              src="/bialy.png"
              alt="Logo"
              className="h-20 w-auto object-contain opacity-70 hover:opacity-100 transition"
            />
          </button>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://www.facebook.com/moonshinebandoff"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img
                src="icons/Facebook_white.png"
                className="ml-10 h-10 opacity-70 hover:opacity-100 transition"
              />
            </a>

            <a
              href="https://www.instagram.com/moonshineband.official"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img
                src="icons/Instagram_white.png"
                className="h-10 opacity-70 hover:opacity-100 transition"
              />
            </a>

            <a
              href="https://open.spotify.com/artist/6RtrOH9czw4PIu2dN1citD?si=CHHHkMCRSLG9uAFcGwz7Ig"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Spotify"
            >
              <img
                src="icons/Spotify_white.png"
                className="h-10 opacity-70 hover:opacity-100 transition"
              />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <img
                src="icons/Youtube_white.png"
                className="h-10 opacity-70 hover:opacity-100 transition"
              />
            </a>
          </div>
        </div>

        <nav className="text-xl hidden md:flex gap-6 text-sm uppercase tracking-wider text-gray-300">
          <a href="#releases" className="hover:text-white">Wydania</a>
          <a href="#videos" className="hover:text-white">Teledyski</a>
          <a href="#instagram" className="hover:text-white">Instagram</a>
          <a href="#band" className="hover:text-white">Skład</a>
          <a href="#epk" className="hover:text-white">EPK</a>
          <a href="#contact" className="hover:text-white">Kontakt</a>
        </nav>

        <button className="md:hidden text-xl">☰</button>
      </div>
    </header>
  );
}