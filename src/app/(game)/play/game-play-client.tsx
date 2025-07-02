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

  return (
    <div className="mx-auto flex min-h-screen max-w-[1216px] flex-col">
      <Header category={category} />
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
            setGuessedLetters={setGuessedLetters}
          />
        </div>
      </main>
    </div>
  );
};

export default GamePlayClient;
