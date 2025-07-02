import { WordCategory } from "@/index";
import { pickRandomWordFromCategory } from "@/utils";
import { redirect } from "next/navigation";
import GamePlayClient from "./game-play-client";

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

  return (
    <GamePlayClient category={selectedWordCategory} targetWord={targetWord} />
  );
};

export default GamePlayPage;
