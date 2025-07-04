import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "node:test";

import "@/tests/mock-next-image";
import "@/tests/mock-next-link";

afterEach(() => {
  cleanup();
});
