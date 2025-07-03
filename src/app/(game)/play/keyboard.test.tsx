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
    const mockOnUserGuess = vi.fn();
    render(<Keyboard guessedLetters={[]} onUserGuess={mockOnUserGuess} />);

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(26);
    expect(screen.getByRole("button", { name: "A" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Z" })).toBeInTheDocument();
  });

  it("disables guessed letter buttons", () => {
    const mockOnUserGuess = vi.fn();
    render(
      <Keyboard
        guessedLetters={["A", "C", "E"]}
        onUserGuess={mockOnUserGuess}
      />,
    );

    expect(screen.getByRole("button", { name: "A" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "C" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "E" })).toBeDisabled();
  });

  it("calls onUseGuess when a letter is clicked", async () => {
    const user = userEvent.setup();
    const mockOnUserGuess = vi.fn();

    render(<Keyboard guessedLetters={[]} onUserGuess={mockOnUserGuess} />);
    const button = screen.getByRole("button", { name: "H" });

    await user.click(button);

    expect(mockOnUserGuess).toHaveBeenCalledTimes(1);
    expect(mockOnUserGuess).toHaveBeenCalledWith(expect.any(Object), "H");
  });

  it("does not call setGuessedLetters for already guessed letters", async () => {
    const user = userEvent.setup();
    const mockOnUserGuess = vi.fn();

    render(<Keyboard guessedLetters={["H"]} onUserGuess={mockOnUserGuess} />);
    const button = screen.getByRole("button", { name: "H" });

    await user.click(button);

    expect(mockOnUserGuess).not.toHaveBeenCalled();
  });
});
