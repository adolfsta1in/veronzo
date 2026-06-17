import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ScrollVideoBackground } from "@/components/scroll-video-background";

const display = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://veronzo.ru"),
  title: {
    default: "VERONZO | Премиальные строительные и отделочные решения",
    template: "%s | VERONZO",
  },
  description:
    "Камень, мрамор, плитка, изделия, окна, двери и комплексная отделка для интерьеров и фасадов высокого уровня.",
  keywords: [
    "VERONZO",
    "мрамор",
    "камень",
    "керамогранит",
    "двери",
    "лифты",
    "отделочные материалы",
  ],
  openGraph: {
    title: "VERONZO",
    description: "Премиальные строительные и отделочные решения.",
    type: "website",
    images: ["/images/marble/veronzo-marble-background.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">
        <ScrollVideoBackground />
        <div className="relative z-10">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
