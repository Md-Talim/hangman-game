import { render, screen } from "@testing-library/react";
import GuessedWord from "./guessed-word";

describe("Guessed Word", () => {
  it("renders the correct number of letter boxes", () => {
    const targetWord = "hello world".toUpperCase();
    render(<GuessedWord guessedLetters={[]} targetWord={targetWord} />);

    const letterSpans = screen.getAllByText(
      (_, node) => node?.tagName === "SPAN",
    );
    expect(letterSpans).toHaveLength(targetWord.length);
  });

  it("displays guessed letters", () => {
    const targetWord = "hello world".toUpperCase();
    const guessedLetters = ["H", "L", "O"];
    render(
      <GuessedWord guessedLetters={guessedLetters} targetWord={targetWord} />,
    );

    expect(screen.getByText("H")).toBeInTheDocument();
    const lLetters = screen.getAllByText("L");
    expect(lLetters).toHaveLength(3);
    expect(screen.getAllByText("O")).toHaveLength(2);
  });
});
