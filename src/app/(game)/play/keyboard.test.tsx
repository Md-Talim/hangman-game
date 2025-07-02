import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import Keyboard from "./keyboard";

describe("Keyboard", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders all 26 letters alphabet buttons", () => {
    render(<Keyboard guessedLetters={[]} setGuessedLetters={() => {}} />);

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(26);
    expect(screen.getByRole("button", { name: "A" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Z" })).toBeInTheDocument();
  });

  it("disables guessed letter buttons", () => {
    render(
      <Keyboard
        guessedLetters={["A", "C", "E"]}
        setGuessedLetters={() => {}}
      />,
    );

    expect(screen.getByRole("button", { name: "A" })).toBeDisabled();
  });

  it("calls setGuessedLetters when a letter is clicked", async () => {
    const user = userEvent.setup();
    const setGuessedLetters = vi.fn();

    render(
      <Keyboard guessedLetters={[]} setGuessedLetters={setGuessedLetters} />,
    );
    const button = screen.getByRole("button", { name: "H" });

    await user.click(button);

    expect(setGuessedLetters).toHaveBeenCalledTimes(1);
    expect(setGuessedLetters).toHaveBeenCalledWith(expect.any(Function));
  });

  it("does not call setGuessedLetters for already guessed letters", async () => {
    const user = userEvent.setup();
    const setGuessedLetters = vi.fn();

    render(
      <Keyboard guessedLetters={["H"]} setGuessedLetters={setGuessedLetters} />,
    );
    const button = screen.getByRole("button", { name: "H" });

    await user.click(button);

    expect(setGuessedLetters).not.toHaveBeenCalled();
  });
});
