"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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

  const iconBase =
    "h-10 w-10 bg-gray-300 transition hover:scale-110";

  const maskStyle = (url) => ({
    WebkitMaskImage: `url(${url})`,
    WebkitMaskRepeat: "no-repeat",
    WebkitMaskSize: "contain",
    WebkitMaskPosition: "center",
    maskImage: `url(${url})`,
    maskRepeat: "no-repeat",
    maskSize: "contain",
    maskPosition: "center",
  });

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 
      ${show ? "translate-y-0" : "-translate-y-full"}
      bg-black/30 `}
    >
      <div className="mx-auto flex justify-between items-center p-4">

        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center">
            <img
              src="/bialy.png"
              alt="Logo"
              className="h-20 w-auto object-contain transition hover:opacity-80 hover:brightness-75"
            />
          </Link>

          <div className="hidden md:flex items-center gap-3">

            <a href="https://www.facebook.com/moonshinebandoff" target="_blank">
              <div
                className={`${iconBase} ml-10 hover:bg-[#1877F2]`}
                style={maskStyle("/icons/Facebook_white.png")}
              />
            </a>

            <a href="https://www.instagram.com/moonshineband.official/" target="_blank">
              <div
                className={`${iconBase} hover:bg-[#E1306C]`}
                style={maskStyle("/icons/Instagram_white.png")}
              />
            </a>

            <a href="https://open.spotify.com/artist/6RtrOH9czw4PIu2dN1citD?si=3LEXmOfsRyKvPBXID1cKiA" target="_blank">
              <div
                className={`${iconBase} hover:bg-[#1DB954]`}
                style={maskStyle("/icons/Spotify_white.png")}
              />
            </a>

            <a href="#" target="_blank">
              <div
                className={`${iconBase} hover:bg-[#FF0000]`}
                style={maskStyle("/icons/Youtube_white.png")}
              />
            </a>

          </div>
        </div>

        <nav className="hidden md:flex gap-6 text-sm uppercase tracking-wider text-gray-300">
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