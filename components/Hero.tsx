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
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <div
          aria-label="Moonshine"
          role="img"
          className="
            h-[min(86vw,760px)] w-[min(86vw,760px)]
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
