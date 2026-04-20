import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* BACKGROUND WRAPPER */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="/banner_wall.JPG"
          alt="Hero background"
          className="w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="grain" />
      </div>

      {/* LOGO BLOCK */}
      <div
        className={`
          absolute ${bebas.className}
          left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          text-center
          [@media(min-width:1200px)]:left-[5%]
          [@media(min-width:1200px)]:top-[45%]
          [@media(min-width:1200px)]:-translate-x-0
          [@media(min-width:1200px)]:-translate-y-1/2
          [@media(min-width:1200px)]:text-left
        `}
      >
        <img
          src="/PoziomeLogo.svg"
          alt="Moonshine"
          className="
            w-[240px] md:w-[310px] lg:w-[380px]
            h-auto object-contain
            invert brightness-0
            mx-auto
            [@media(min-width:1200px)]:mx-0
          "
        />
      </div>
    </section>
  );
}