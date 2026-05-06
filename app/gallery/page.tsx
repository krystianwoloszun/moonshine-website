import { Bebas_Neue } from "next/font/google";
import GalleryMasonry from "@/components/GalleryMasonry";
import { galleryImages } from "@/components/galleryData";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function GalleryPage() {
  return (
    <section className="bg-black px-4 pb-20 pt-36 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className={`text-6xl uppercase tracking-wider md:text-8xl ${bebas.className}`}>
          Galeria
        </h1>

        <GalleryMasonry images={galleryImages} />
      </div>
    </section>
  );
}
