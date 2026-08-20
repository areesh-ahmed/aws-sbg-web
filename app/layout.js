import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IntroLoader from "@/components/IntroLoader";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AWS Student Builder Group — MIT ADT",
  description: "A student-led AWS community at MIT ADT University where students explore cloud technologies, build real-world projects, and grow together.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-grid-pattern text-primary bg-canvas">
        <IntroLoader />
        <Navbar />
        <main className="flex-grow flex flex-col pt-[80px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
