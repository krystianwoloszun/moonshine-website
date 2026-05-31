export default function Hero() {
  return (
    <section className="relative isolate h-screen w-full overflow-hidden">

      {/* BACKGROUND WRAPPER */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          aria-hidden="true"
          autoPlay
          loop
          muted
          playsInline
          poster="/banner_wall.JPG"
          preload="metadata"
          className="h-full w-full object-cover"
        >
          <source
            src="/video/moonshine%20-%20wersja%20beta%20NIE%20UDOSTEPNIAC.mp4"
            type="video/mp4"
          />
        </video>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="grain" />
      </div>

      {/* LOGO BLOCK */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div
          aria-label="Moonshine"
          role="img"
          className="
            h-[min(94.6vw,calc(100svh-14rem),836px)] w-[min(94.6vw,calc(100svh-14rem),836px)]
            md:h-[min(94.6vw,calc(100svh-16rem),836px)] md:w-[min(94.6vw,calc(100svh-16rem),836px)]
            bg-white/1
            backdrop-invert
            [mask-image:url('/vektor.svg')]
            [mask-position:center]
            [mask-repeat:no-repeat]
            [mask-size:contain]
            [-webkit-backdrop-filter:invert(1)]
            [-webkit-mask-image:url('/vektor.svg')]
            [-webkit-mask-position:center]
            [-webkit-mask-repeat:no-repeat]
            [-webkit-mask-size:contain]
          "
        />
      </div>
    </section>
  );
}
