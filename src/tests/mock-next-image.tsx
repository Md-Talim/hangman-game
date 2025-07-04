import React from "react";
import { vi } from "vitest";

vi.mock("next/image", () => ({
  default: (props: React.ComponentProps<"img">) => (
    <img {...props} alt={props.alt || ""} />
  ),
}));
