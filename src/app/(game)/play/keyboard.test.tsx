import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Keyboard from "./keyboard";

describe("Keyboard", () => {
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

  it("calls onUserGuess when a letter key is pressed", async () => {
    const user = userEvent.setup();
    const mockOnUserGuess = vi.fn();

    render(<Keyboard guessedLetters={[]} onUserGuess={mockOnUserGuess} />);

    await user.keyboard("h");

    expect(mockOnUserGuess).toHaveBeenCalledTimes(1);
    expect(mockOnUserGuess).toHaveBeenCalledWith(
      expect.any(KeyboardEvent),
      "H",
    );
  });

  it("calls onUserGuess when uppercase letter key is pressed", async () => {
    const user = userEvent.setup();
    const mockOnUserGuess = vi.fn();

    render(<Keyboard guessedLetters={[]} onUserGuess={mockOnUserGuess} />);

    await user.keyboard("H");

    expect(mockOnUserGuess).toHaveBeenCalledTimes(1);
    expect(mockOnUserGuess).toHaveBeenCalledWith(
      expect.any(KeyboardEvent),
      "H",
    );
  });

  it("does not call onUserGuess for already guessed letters via keyboard", async () => {
    const user = userEvent.setup();
    const mockOnUserGuess = vi.fn();

    render(<Keyboard guessedLetters={["H"]} onUserGuess={mockOnUserGuess} />);

    await user.keyboard("h");

    expect(mockOnUserGuess).not.toHaveBeenCalled();
  });

  it("does not call onUserGuess for non-letter keys", async () => {
    const mockOnUserGuess = vi.fn();

    render(<Keyboard guessedLetters={[]} onUserGuess={mockOnUserGuess} />);

    fireEvent.keyDown(window, { key: "1" });
    fireEvent.keyDown(window, { key: " " });
    fireEvent.keyDown(window, { key: "Enter" });
    fireEvent.keyDown(window, { key: "!" });
    fireEvent.keyDown(window, { key: "0" });
    fireEvent.keyDown(window, { key: "Tab" });

    expect(mockOnUserGuess).not.toHaveBeenCalled();
  });

  it("handles multiple different letter key presses", async () => {
    const user = userEvent.setup();
    const mockOnUserGuess = vi.fn();

    render(<Keyboard guessedLetters={[]} onUserGuess={mockOnUserGuess} />);

    await user.keyboard("a");
    await user.keyboard("B");
    await user.keyboard("z");

    expect(mockOnUserGuess).toHaveBeenCalledTimes(3);
    expect(mockOnUserGuess).toHaveBeenNthCalledWith(
      1,
      expect.any(KeyboardEvent),
      "A",
    );
    expect(mockOnUserGuess).toHaveBeenNthCalledWith(
      2,
      expect.any(KeyboardEvent),
      "B",
    );
    expect(mockOnUserGuess).toHaveBeenNthCalledWith(
      3,
      expect.any(KeyboardEvent),
      "Z",
    );
  });

  it("removes event listener on unmount", () => {
    const mockOnUserGuess = vi.fn();
    const addEventListenerSpy = vi.spyOn(window, "addEventListener");
    const removeEventListenerSpy = vi.spyOn(window, "removeEventListener");

    const { unmount } = render(
      <Keyboard guessedLetters={[]} onUserGuess={mockOnUserGuess} />,
    );

    expect(addEventListenerSpy).toHaveBeenCalledWith(
      "keydown",
      expect.any(Function),
    );

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "keydown",
      expect.any(Function),
    );

    addEventListenerSpy.mockRestore();
    removeEventListenerSpy.mockRestore();
  });
});
