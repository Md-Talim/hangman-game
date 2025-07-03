"use client";

import { WordCategory } from "@/index";
import { useState } from "react";
import GuessedWord from "./guessed-word";
import Header from "./header";
import Keyboard from "./keyboard";

interface GamePlayClientProps {
  category: WordCategory;
  targetWord: string;
}

const GamePlayClient = ({ category, targetWord }: GamePlayClientProps) => {
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongGuesses, setWrongGuesses] = useState<number>(0);

  const handleUserGuess = (
    e: React.MouseEvent<HTMLButtonElement>,
    letter: string,
  ) => {
    e.preventDefault();

    if (guessedLetters.includes(letter)) {
      return;
    }
    if (!targetWord.includes(letter)) {
      setWrongGuesses((prev) => prev + 1);
    }
    setGuessedLetters((prev) => [...prev, letter]);
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-[1216px] flex-col">
      <Header category={category} wrongGuesses={wrongGuesses} />
      <main className="flex flex-1 flex-col">
        <div className="mt-[78px] md:mt-[111px] lg:mt-[88px]">
          <GuessedWord
            targetWord={targetWord}
            guessedLetters={guessedLetters}
          />
        </div>

        <div className="mt-auto pb-28">
          <Keyboard
            guessedLetters={guessedLetters}
            onUserGuess={handleUserGuess}
          />
        </div>
      </main>
    </div>
  );
};

export default GamePlayClient;
