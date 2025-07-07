import clsx from "clsx";
import type { Metadata } from "next";
import { Mouse_Memoirs } from "next/font/google";
import "./globals.css";

const mouseMemoirs = Mouse_Memoirs({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WordHunt Game",
  description: "Can you guess the word before it's too late?",
  openGraph: {
    title: "WordHunt Game",
    description:
      "Can you guess the word before your health runs out? Choose from 6 categories in this blazing-fast game!",
    url: "https://play-wordhunt.vercel.app",
    siteName: "WordHunt Game",
    images: [
      {
        url: "https://play-wordhunt.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "WordHunt Game Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WordHunt Game",
    description: "Try to guess the hidden word before you lose.",
    images: ["https://play-wordhunt.vercel.app/og-image.png"],
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={clsx("antialiased", mouseMemoirs.className)}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
