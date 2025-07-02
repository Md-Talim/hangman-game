import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import HowToPlayPage from "./page";

describe("How to Play Page", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders the page header", () => {
    render(<HowToPlayPage />);
    expect(
      screen.getByRole("heading", { name: /how to play/i }),
    ).toBeInTheDocument();
  });

  it("renders all step cards", () => {
    render(<HowToPlayPage />);
    expect(screen.getAllByRole("article")).toHaveLength(3);
  });
});
