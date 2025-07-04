import { Card, CardContent, CardTitle } from "@/components/card";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

type MenuType = "pause" | "win" | "lose";

interface MenuProps {
  type: MenuType;
  onPrimaryAction: () => void;
}

const menuConfig = {
  pause: {
    image: "/icon-paused.svg",
    imageAlt: "Paused",
    primaryButtonText: "Continue",
    imageStyles: clsx("mt-4 md:-mt-4 md:h-[161px] md:w-[256px]"),
  },
  win: {
    image: "/icon-win.svg",
    imageAlt: "You Win",
    primaryButtonText: "Play Again!",
    imageStyles: clsx("mt-4 md:-mt-4 md:h-[161px] md:w-[301px]"),
  },
  lose: {
    image: "/icon-lose.svg",
    imageAlt: "You Lose",
    primaryButtonText: "Play Again!",
    imageStyles: clsx("mt-4 md:-mt-4 md:h-[161px] md:w-[320px]"),
  },
};

export const Menu = ({ type, onPrimaryAction }: MenuProps) => {
  const config = menuConfig[type];

  return (
    <Card>
      <CardTitle>
        <Image
          src={config.image}
          alt={config.imageAlt}
          width={186}
          height={113}
          className={config.imageStyles}
          priority
        />
      </CardTitle>
      <CardContent>
        <button
          onClick={onPrimaryAction}
          className="button-primary hover:cursor-pointer"
        >
          {config.primaryButtonText}
        </button>
        <Link href="/select-category" className="button-primary">
          New Category
        </Link>
        <Link href="/" className="button-secondary">
          Quit Game
        </Link>
      </CardContent>
    </Card>
  );
};
