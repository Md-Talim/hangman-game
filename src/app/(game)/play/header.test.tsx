import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import Header from "./header";

describe("Header Component", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders category name", () => {
    const category = "Animals";
    render(
      <Header category={category} wrongGuesses={0} onMenuClick={() => {}} />,
    );
    expect(screen.getByRole("heading", { name: category })).toBeInTheDocument();
  });

  it("renders the menu button", () => {
    render(
      <Header category="Animals" wrongGuesses={0} onMenuClick={() => {}} />,
    );
    expect(
      screen.getByRole("button", { name: /open menu/i }),
    ).toBeInTheDocument();
  });

  it("renders correct health bar width and color", () => {
    const { container } = render(
      <Header category="Animals" wrongGuesses={4} onMenuClick={() => {}} />,
    );
    const healthBar = container.querySelector("#health-bar");

    expect(healthBar).toHaveStyle("width: 50%");
    expect(healthBar).toHaveClass("bg-yellow-500");
  });

  it("renders red health bar when low on lives", () => {
    const { container } = render(
      <Header category="Animal" wrongGuesses={7} onMenuClick={() => {}} />,
    );
    const healthBar = container.querySelector("#health-bar");
    expect(healthBar).toHaveClass("bg-red-500");
  });

  it("renders gray health bar when out of lives", () => {
    const { container } = render(
      <Header category="Animal" wrongGuesses={8} onMenuClick={() => {}} />,
    );
    const healthBar = container.querySelector("#health-bar");
    expect(healthBar).toHaveClass("bg-gray-300");
    expect(healthBar).toHaveStyle("width: 0%");
  });

  it("calls onMenuClick when menu button is clicked", async () => {
    const onMenuClick = vi.fn();
    const user = userEvent.setup();

    render(
      <Header category="Animals" wrongGuesses={0} onMenuClick={onMenuClick} />,
    );
    const menuButton = screen.getByRole("button", { name: /open menu/i });
    await user.click(menuButton);

    expect(onMenuClick).toHaveBeenCalledTimes(1);
  });
});
