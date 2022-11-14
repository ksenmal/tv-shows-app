import { describe, expect, test } from "vitest";
import fn from "../functions.js";

describe("Util functions suite", () => {
  test("getCapitalizedString", () => {
    expect(fn.getCapitalizedString("noncapital")).toBe("Noncapital");
    expect(fn.getCapitalizedString("Capital")).toBe("Capital");
  });

  test("getYear", () => {
    expect(fn.getYear("2019-02-02")).toBe("2019");
    expect(fn.getYear(null)).toBe("...");
  });

  test("clearHTMLtags", () => {
    expect(fn.clearHTMLtags("<p>Text</p>")).toBe("Text");
  });
});
