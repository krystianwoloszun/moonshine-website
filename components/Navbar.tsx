"use client";

import { useState, useEffect } from "react";
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

          <Link href="/" className="flex items-center">
            <img
              src="/bialy.png"
              alt="Logo"
              className="h-20 w-auto object-contain"
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
