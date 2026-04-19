import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <Link href="/" className="flex items-center">
          <img
            src="/bialy.png"
            alt="Logo"
            className="h-20 w-auto object-contain"
          />
        </Link>

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