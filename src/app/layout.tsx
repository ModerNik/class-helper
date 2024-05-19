import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import "./globals.css";
import Provider from "@/store/provider";
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

const font = Rubik({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Class Helper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${font.className} min-h-screen w-full`}>
        <Provider>
          <main className="w-full h-full flex flex-col items-center">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
