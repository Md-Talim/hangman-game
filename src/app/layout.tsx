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
