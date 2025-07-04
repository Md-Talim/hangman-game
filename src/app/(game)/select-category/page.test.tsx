import words from "@/words.json";
import { render, screen } from "@testing-library/react";
import SelectCategoryPage from "./page";

describe("Select Category Page", () => {
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
