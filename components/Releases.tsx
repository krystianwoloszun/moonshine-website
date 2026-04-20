import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Releases() {
  const albums = [
    {
      title: "Moonshine",
      cover: "ep.jpg",
      url: "https://open.spotify.com/album/45qIEjiJtHWKFGn3DDdjy2?si=1cHY9cxnSEmjgoQBRnUprQ",
    },
    {
      title: "Eye of the Master",
      cover: "Eye of the Master.png",
      url: "https://open.spotify.com/album/2afTyrQkaho2BiQaUXCir9?si=042vCxiQR3q1O9saTnm-KA&nd=1&dlsi=8607074e2cfe4c36",
    },
  ];

  return (
    <section id="releases" className="py-10 bg-black text-white">
      <div className="max-w-6xl flex flex-col items-center mx-auto px-4">

        <h2 className={`text-4xl md:text-6xl uppercase tracking-wider mb-10 ${bebas.className}`}>
          Wydania
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">

          {albums.map((album, index) => (
            <a
              key={index}
              href={album.url}
              target="_blank"
              className="group w-full max-w-md text-center"
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={album.cover}
                  alt={album.title}
                  className="w-full h-auto object-cover transition duration-300 group-hover:scale-105 group-hover:opacity-80"
                />
              </div>

              <h3 className={`mt-3 text-xl uppercase tracking-wide text-gray-300 group-hover:text-white transition ${bebas.className}`}>
                {album.title}
              </h3>
            </a>
          ))}

        </div>
      </div>
    </section>
  );
}