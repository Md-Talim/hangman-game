import { Card, CardContent, CardTitle } from "@/components/card";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="center min-h-screen">
      <main>
        <Card className="gap-[57px] md:gap-[57px]">
          <CardTitle>
            <Image
              src="/logo.svg"
              alt="Hangman game logo"
              width={263}
              height={130}
              className="h-auto md:w-[374px]"
              priority
            />
          </CardTitle>
          <CardContent className="gap-[57px]">
            <Link
              href="/game"
              className="button-secondary h-40 w-40 p-0"
              aria-label="Play game"
            >
              <Image
                src="/icon-play.svg"
                alt="Play icon"
                width={53}
                height={50}
                className="h-auto max-w-full"
                priority
              />
            </Link>
            <Link href="/how-to-play" className="button-primary">
              How to play
            </Link>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default HomePage;
