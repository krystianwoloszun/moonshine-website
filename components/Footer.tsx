export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-6">
        
        <div>
          <h3 className="text-white font-bold">Moonshine</h3>
          <p className="text-sm mt-2">
            Oficjalna strona zespołu
          </p>
        </div>

        <div className="text-sm">
          <p className="text-white mb-2">Kontakt</p>
          <p>moonshineband.kontakt@gmail.com</p>
        </div>

        <div className="text-sm">
          <p className="text-white mb-2">Social</p>
          <a href="#">Instagram</a><br />
          <a href="#">Spotify</a><br />
          <a href="#">YouTube</a>
        </div>
      </div>

      <div className="text-center text-xs mt-10 text-gray-600">
        © {new Date().getFullYear()} Moonshine
      </div>
    </footer>
  );
}