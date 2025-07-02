import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen, within } from "@testing-library/react";
import { describe } from "node:test";
import { afterEach, expect, it, vi } from "vitest";
import HomePage from "./page";

vi.mock("next/image", () => ({
  default: (props: any) => <img {...props} />,
}));

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe("Home Page", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders without crashing", () => {
    render(<HomePage />);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it("renders the logo image", () => {
    render(<HomePage />);
    const logo = screen.getByAltText(/hangman game logo/i);
    expect(logo).toBeInTheDocument();
  });

  it("renders the play button with correct link and icon", () => {
    render(<HomePage />);
    const playLink = screen.getByRole("link", { name: /play game/i });
    expect(playLink).toHaveAttribute("href", "/select-category");

    const playIcon = within(playLink).getByAltText("Play icon");
    expect(playIcon).toHaveAttribute("src", "/icon-play.svg");
  });

  it("renders the 'How to play' button with correct link", () => {
    render(<HomePage />);
    const howToPlayLink = screen.getByRole("link", { name: /how to play/i });
    expect(howToPlayLink).toHaveAttribute("href", "/how-to-play");
  });
});
