import clsx from "clsx";
import Image from "next/image";

interface HeaderProps {
  category: string;
  wrongGuesses: number;
  onMenuClick: () => void;
}

const Header = ({ category, wrongGuesses, onMenuClick }: HeaderProps) => {
  const MAX_ALLOWED_GUESSES = 8;
  const remainingLives = Math.max(0, MAX_ALLOWED_GUESSES - wrongGuesses);
  const healthPercentage = (remainingLives / MAX_ALLOWED_GUESSES) * 100;

  const healthBarBackground = clsx(
    healthPercentage > 60
      ? "bg-dark-navy"
      : healthPercentage > 30
        ? "bg-yellow-500"
        : healthPercentage > 0
          ? "bg-red-500"
          : "bg-gray-300",
  );

  return (
    <header className="mt-[46px] flex items-center justify-between px-6">
      <div className="flex items-center gap-4 md:gap-6 lg:gap-[57px]">
        <button
          onClick={onMenuClick}
          className="button-icon-sm aspect-square w-10 rounded-full p-0 md:w-16 lg:w-24"
          aria-label="Open menu"
        >
          <Image
            src="/icon-menu.svg"
            alt=""
            width={17.5}
            height={16}
            className="h-auto max-w-full md:h-[26px] md:w-[28px] lg:h-[38px] lg:w-[41px]"
            priority
          />
        </button>
        <h1 className="heading-l">{category}</h1>
      </div>

      <div className="flex items-center gap-4 md:gap-10">
        {/* Health Bar */}
        <div className="w-14 rounded-full bg-white p-1 md:w-40 md:px-[11px] md:py-[9px]">
          <div
            id="health-bar"
            className={clsx(
              "h-2 rounded-full md:h-[13px]",
              healthBarBackground,
            )}
            style={{
              width: `${healthPercentage}%`,
              minWidth: healthPercentage > 0 ? "8px" : "0px",
            }}
          />
        </div>
        <Image
          src="/icon-heart.svg"
          alt=""
          width={26}
          height={24}
          className="h-auto max-w-full md:h-[48px] md:w-[53px]"
          priority
        />
      </div>
    </header>
  );
};

export default Header;
