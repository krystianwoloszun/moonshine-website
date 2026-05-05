import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const videos: {
  title: string;
  videoId: string;
}[] = [
  {
    title: "Moonshine",
    videoId: "dQw4w9WgXcQ",
  },
    {
    title: "Moonshine2",
    videoId: "l3IThX9SFnw",
  },
];

export default function Videos() {
  const visibleVideos = videos.filter((video) => video.videoId);

  return (
    <section id="videos" className="bg-black py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4">
        <h2
          className={`mb-10 text-4xl uppercase tracking-wider md:text-6xl ${bebas.className}`}
        >
          Teledyski
        </h2>

        {visibleVideos.length > 0 ? (
          <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
            {visibleVideos.map((video) => (
              <article key={video.videoId} className="group">
                <div className="aspect-video overflow-hidden bg-black">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>

                <h3
                  className={`mt-3 text-xl uppercase tracking-wide text-gray-300 transition group-hover:text-white ${bebas.className}`}
                >
                  {video.title}
                </h3>
              </article>
            ))}
          </div>
        ) : (
          <p className={`text-2xl uppercase tracking-wide text-gray-400 ${bebas.className}`}>
            Filmy wkrótce
          </p>
        )}
      </div>
    </section>
  );
}
