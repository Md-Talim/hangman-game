import type { Metadata } from "next";
import { Mouse_Memoirs } from "next/font/google";
import "./globals.css";

const mouseMemoirs = Mouse_Memoirs({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hangman Game",
  description: "Play the classic hangman word game.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${mouseMemoirs.className} antialiased`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
