"use client";

import { WordCategory } from "@/index";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import GuessedWord from "./guessed-word";
import Header from "./header";
import Keyboard from "./keyboard";
import { Menu } from "./menu";

interface GamePlayClientProps {
  category: WordCategory;
  targetWord: string;
}

type GameState = "playing" | "won" | "lost" | "paused";

const GamePlayClient = ({ category, targetWord }: GamePlayClientProps) => {
  const router = useRouter();
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongGuesses, setWrongGuesses] = useState<number>(0);
  const [gameState, setGameState] = useState<GameState>("playing");

  const MAX_WRONG_GUESSES = 8;

  const isWordGuessed = () => {
    return targetWord
      .split("")
      .filter((char) => char !== " ")
      .every((letter) => guessedLetters.includes(letter.toUpperCase()));
  };

  const isGameLost = wrongGuesses >= MAX_WRONG_GUESSES;
  const isMenuOpen = gameState !== "playing";

  useEffect(() => {
    if (gameState === "playing") {
      if (isWordGuessed()) {
        setGameState("won");
      } else if (isGameLost) {
        setGameState("lost");
      }
    }
  }, [guessedLetters, wrongGuesses, gameState]);

  useEffect(() => {
    const handleEnterKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" && isMenuOpen) {
        e.preventDefault();
        getMenuAction()();
      }
    };

    window.addEventListener("keydown", handleEnterKey);
  }, [isMenuOpen, gameState]);

  const handleUserGuess = (
    e: React.MouseEvent<HTMLButtonElement> | KeyboardEvent,
    letter: string,
  ) => {
    e.preventDefault();

    if (gameState !== "playing") {
      return;
    }
    if (guessedLetters.includes(letter)) {
      return;
    }
    if (!targetWord.includes(letter)) {
      setWrongGuesses((prev) => prev + 1);
    }
    setGuessedLetters((prev) => [...prev, letter]);
  };

  const handleMenuToggle = () => {
    if (gameState === "playing") {
      setGameState("paused");
    } else if (gameState === "paused") {
      setGameState("playing");
    }
  };

  const handlePlayAgain = () => {
    setGuessedLetters([]);
    setWrongGuesses(0);
    setGameState("playing");
    router.push(`/play?category=${category}`);
  };

  const getMenuType = (): "pause" | "win" | "lose" => {
    switch (gameState) {
      case "won":
        return "win";
      case "lost":
        return "lose";
      case "paused":
        return "pause";
      default:
        return "pause";
    }
  };

  const getMenuAction = () => {
    switch (gameState) {
      case "won":
      case "lost":
        return handlePlayAgain;
      case "paused":
        return handleMenuToggle;
      default:
        return handleMenuToggle;
    }
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-[1216px] flex-col">
      <Header
        category={category}
        wrongGuesses={wrongGuesses}
        onMenuClick={handleMenuToggle}
      />
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

      {isMenuOpen && (
        <div className="center fixed inset-0 z-50">
          <Menu type={getMenuType()} onPrimaryAction={getMenuAction()} />
        </div>
      )}
    </div>
  );
};

export default GamePlayClient;
