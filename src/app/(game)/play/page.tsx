import { WordCategory } from "@/index";
import { pickRandomWordFromCategory } from "@/utils";
import clsx from "clsx";
import { redirect } from "next/navigation";
import Header from "./header";

interface PageProps {
  searchParams: Promise<{ category: WordCategory }>;
}

const GamePlayPage = async ({ searchParams }: PageProps) => {
  const selectedWordCategory: WordCategory = (await searchParams).category;
  if (!selectedWordCategory) {
    redirect("/select-category");
  }

  const targetWord = pickRandomWordFromCategory(selectedWordCategory);
  if (!targetWord) {
    redirect("/select-category");
  }

  const targetWordList = targetWord.split(" ");

  // Keyboard layout
  const keyboardRows = [
    ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
    ["J", "K", "L", "M", "N", "O", "P", "Q", "R"],
    ["S", "T", "U", "V", "W", "X", "Y", "Z"],
  ];

  return (
    <div className="mx-auto flex min-h-screen max-w-[1216px] flex-col">
      <Header category={selectedWordCategory} />
      <main className="flex flex-1 flex-col">
        <div className="center mt-[78px] flex-wrap gap-3 md:mt-[111px] md:gap-4 lg:mt-[88px]">
          {targetWordList.map((word, index) => (
            <div key={index} className="flex gap-x-2 md:gap-x-3">
              {word.split("").map((char, index) => (
                <span
                  key={index}
                  className={clsx(
                    "h-[66px] w-10 md:h-[112px] md:w-[88px] lg:h-[128px] lg:w-[112px]",
                    char !== " " &&
                      "bg-blue navy-blue-shadow center heading-l pointer-events-none rounded-xl md:rounded-4xl lg:rounded-[40px]",
                  )}
                >
                  {char}
                </span>
              ))}
              <span className="h-[66px] w-10" />
            </div>
          ))}
        </div>

        <div className="mt-auto pb-28">
          <div className="grid justify-items-center gap-6">
            {keyboardRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex flex-wrap justify-center gap-2 md:gap-4 lg:gap-6"
              >
                {row.map((letter) => (
                  <button
                    key={letter}
                    className={clsx(
                      "center text-dark-navy h-14 w-[28px] rounded-lg bg-white md:h-[84px] md:w-[64px] md:rounded-3xl lg:h-[84px] lg:w-[109px]",
                      "hover:bg-blue disbaled:text-dark-navy/25 hover:cursor-pointer hover:text-white disabled:bg-white/25",
                    )}
                  >
                    <span className="heading-m">{letter}</span>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default GamePlayPage;
