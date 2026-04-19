import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10">

      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-6">

        <div className={bebas.className}>
          <h3 className="text-white text-2xl uppercase">
            Moonshine
          </h3>
          <p className="text-sm mt-2">
            Oficjalna strona zespołu
          </p>
        </div>

        <div className={bebas.className}>
          <p className="text-white mb-2 uppercase tracking-wide">Kontakt</p>
          <p>moonshineband.kontakt@gmail.com</p>
        </div>

        <div className={bebas.className}>
          <p className="text-white mb-2 uppercase tracking-wide">Social</p>
          <a className="hover:text-white transition" href="#">Instagram</a><br />
          <a className="hover:text-white transition" href="#">Spotify</a><br />
          <a className="hover:text-white transition" href="#">YouTube</a>
        </div>

      </div>

      <div className="text-center text-xs mt-10 text-gray-600">
        © {new Date().getFullYear()} Moonshine
      </div>

    </footer>
  );
}