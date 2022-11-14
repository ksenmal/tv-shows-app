import { describe, expect, test, vi } from "vitest";
import { store } from "../store.js";

const mockMovieList = [
  {
    id: 1,
    weight: 1,
  },
  {
    id: 2,
    weight: 5,
  },
  {
    id: 3,
    weight: 1,
  },
];

vi.mock("../api.js", () => {
  return {
    default: {
      getAllShows: () => Promise.resolve(mockMovieList),
    },
  };
});

describe("Store suite", () => {
  test("getList calls getAllShows and sets isLoading to true", () => {
    store.getList();
    expect(store.isLoading).toBe(true);
  });

  test("getList calls getAllShows and sorts by weight", async () => {
    await store.getList();
    expect(store.list).toEqual(mockMovieList);
    expect(store.error).toEqual(null);
    expect(store.isLoading).toEqual(false);
  });

  test("setSearchValue sets search value", () => {
    store.setSearchValue("foo");
    expect(store.searchValue).toEqual("foo");
  });
});
