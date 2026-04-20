import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Releases from "@/components/Releases";
import { Bebas_Neue, Inter } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body id="top" className={`${inter.className} bg-black text-white`}>
        <Navbar />
        <main>{children}</main>
        <Releases />
        <Footer />
      </body>
    </html>
  );
}