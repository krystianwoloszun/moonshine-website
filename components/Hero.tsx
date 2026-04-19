import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center">

      <div className="absolute inset-0 -z-10">
        <img
          src="/banner_wall.JPG"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black/20 -z-10" />

      {/* BLOK PO LEWEJ */}
      <div
        className={`relative z-10 text-white ${bebas.className} ml-12 md:ml-20 lg:ml-32 w-full max-w-3xl`}
      >

        <div className="flex flex-col items-start text-left">

          <img
  src="/moonshine_logo_long.jpg"
  alt="Moonshine"
  className="w-full max-w-3xl md:max-w-4xl h-auto object-contain -translate-x-10 md:-translate-x-16 lg:-translate-x-50"
/>

<p className="w-full text-center text-base md:text-lg lg:text-2xl tracking-wide text-gray-200 -translate-x-10 md:-translate-x-16 lg:-translate-x-50">
  70% rock 40% unexpected twists
</p>

        </div>

      </div>

    </section>
  );
}