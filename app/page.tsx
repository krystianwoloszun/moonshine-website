import ContactForm from "@/components/ContactForm";
import GalleryCarousel from "@/components/GalleryCarousel";
import Hero from "@/components/Hero";
import Releases from "@/components/Releases";
import Videos from "@/components/Videos";

export default function Home() {
  return (
    <>
      <Hero />
      <Videos />
      <GalleryCarousel />
      <Releases />
      <ContactForm />
    </>
  );
}
