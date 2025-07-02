"use client";
import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";

interface KeyboardProps {
  guessedLetters: string[];
  setGuessedLetters: Dispatch<SetStateAction<string[]>>;
}

const Keyboard = ({ guessedLetters, setGuessedLetters }: KeyboardProps) => {
  const keyboardRows = [
    ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
    ["J", "K", "L", "M", "N", "O", "P", "Q", "R"],
    ["S", "T", "U", "V", "W", "X", "Y", "Z"],
  ];

  const handleUserGuess = (
    e: React.MouseEvent<HTMLButtonElement>,
    letter: string,
  ) => {
    e.preventDefault();
    if (guessedLetters.includes(letter)) return;
    setGuessedLetters((prev) => [...prev, letter]);
  };

  return (
    <div className="grid justify-items-center gap-6">
      {keyboardRows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex flex-wrap justify-center gap-2 md:gap-4 lg:gap-6"
        >
          {row.map((letter) => (
            <button
              key={letter}
              type="button"
              disabled={guessedLetters.includes(letter)}
              className={clsx(
                "center text-dark-navy h-14 w-[28px] rounded-lg bg-white md:h-[84px] md:w-[64px] md:rounded-3xl lg:h-[84px] lg:w-[109px]",
                "hover:bg-blue disbaled:text-dark-navy/25 hover:cursor-pointer hover:text-white disabled:pointer-events-none disabled:bg-white/25",
              )}
              onClick={(e) => handleUserGuess(e, letter)}
            >
              <span className="heading-m">{letter}</span>
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
