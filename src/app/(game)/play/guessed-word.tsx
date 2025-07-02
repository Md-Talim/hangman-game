import clsx from "clsx";

interface GuessedWordProps {
  guessedLetters: string[];
  targetWord: string;
}

const GuessedWord = ({ guessedLetters, targetWord }: GuessedWordProps) => {
  const targetWordList = targetWord.split(" ");
  const shouldShowSpaces = targetWordList.length > 1;

  return (
    <div className="center flex-wrap gap-3 md:gap-4">
      {targetWordList.map((word, index) => (
        <div key={index} className="flex gap-x-2 md:gap-x-3">
          {word.split("").map((letter, index) => (
            <Letter
              key={index}
              letter={letter.toUpperCase()}
              isGuessed={guessedLetters.includes(letter.toUpperCase())}
            />
          ))}

          {/* Space between words */}
          {shouldShowSpaces && index < targetWordList.length - 1 && (
            <span className="h-[66px] w-10 md:h-[112px] md:w-[88px] lg:h-[128px] lg:w-[112px]" />
          )}
        </div>
      ))}
    </div>
  );
};

interface Letter {
  letter: string;
  isGuessed?: boolean;
}

const Letter = ({ letter, isGuessed = false }: Letter) => {
  return (
    <span
      className={clsx(
        "h-[66px] w-10 md:h-[112px] md:w-[88px] lg:h-[128px] lg:w-[112px]",
        "bg-blue navy-blue-shadow center heading-l pointer-events-none rounded-xl md:rounded-4xl lg:rounded-[40px]",
        isGuessed ? "opacity-100" : "opacity-25",
      )}
    >
      {isGuessed && letter}
    </span>
  );
};

export default GuessedWord;
