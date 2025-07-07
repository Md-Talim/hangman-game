import words from "@/words.json";

type Category = keyof typeof words.categories;

export function pickRandomWordFromCategory(category: Category) {
  const categoryWords = words.categories[category];
  if (!categoryWords || categoryWords.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * categoryWords.length);
  return categoryWords[randomIndex].toUpperCase();
}
