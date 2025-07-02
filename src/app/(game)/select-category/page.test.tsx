import words from "@/words.json";
import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import SelectCategoryPage from "./page";

describe("Select Category Page", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders the page header", () => {
    render(<SelectCategoryPage />);
    expect(
      screen.getByRole("heading", { name: /pick a category/i }),
    ).toBeInTheDocument();
  });

  it("renders a link for each category", () => {
    render(<SelectCategoryPage />);
    Object.keys(words.categories).forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });

  it("links to the correct category page", () => {
    render(<SelectCategoryPage />);
    Object.keys(words.categories).forEach((category) => {
      const encoded = encodeURIComponent(category);
      expect(screen.getByRole("link", { name: category })).toHaveAttribute(
        "href",
        `/play?category=${encoded}`,
      );
    });
  });
});
