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

      <div className="w-full px-6 md:px-20 lg:w-1/5 text-left text-white z-10">

        <h1 className="text-6xl font-bold tracking-widest">
          MOONSHINE
        </h1>

        <p className="mt-4 text-sm">
          70% rock 40% unexpected twists
        </p>

      </div>

    </section>
  );
}