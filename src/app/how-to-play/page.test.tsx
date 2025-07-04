import { render, screen } from "@testing-library/react";
import HowToPlayPage from "./page";

describe("How to Play Page", () => {
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
