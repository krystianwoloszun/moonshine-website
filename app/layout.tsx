import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Releases from "@/components/Releases";
import Videos from "@/components/Videos";
import { Inter } from "next/font/google";

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
        <Videos />
        <Releases />
        <Footer />
      </body>
    </html>
  );
}
