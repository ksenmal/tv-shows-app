import { afterEach, describe, expect, test, vi } from "vitest";
import api from "../api.js";

const testShowData = {
  title: "Game of thrones",
};
describe("api test suite", async () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  test("getAllShows calls shows api 5 times", async () => {
    global.fetch = vi.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(["movie"]),
      });
    });

    const shows = await api.getAllShows();
    expect(shows).toEqual(["movie", "movie", "movie", "movie", "movie"]);
    expect(global.fetch).toHaveBeenCalledTimes(5);
  });

  test("getAllShows throws error if response is not ok", async () => {
    global.fetch = vi.fn().mockImplementationOnce(() => {
      return Promise.resolve({
        ok: false,
      });
    });
    await expect(api.getAllShows()).rejects.toThrow("getAllShows server error");
  });

  test("searchShowsByName returns result if resp is ok", async () => {
    global.fetch = vi.fn().mockImplementationOnce(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(testShowData),
      });
    });
    const returnedShow = await api.searchShowsByName("Game");
    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.tvmaze.com/search/shows?q=Game"
    );
    expect(returnedShow).toEqual(testShowData);
  });

  test("searchShowsByName throws if resp is not ok", async () => {
    global.fetch = vi.fn().mockImplementationOnce(() => {
      return Promise.resolve({
        ok: false,
      });
    });
    await expect(api.searchShowsByName("Game")).rejects.toThrow(
      "searchShowsByName server error"
    );
  });

  test("getShow calls api with provided ID", async () => {
    global.fetch = vi.fn().mockImplementationOnce(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(testShowData),
      });
    });

    const returnedShow = await api.getShow(1);
    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.tvmaze.com/shows/1?embed[]=cast"
    );
    expect(returnedShow).toEqual(testShowData);
  });

  test("getShow throws if resp is not ok", async () => {
    global.fetch = vi.fn().mockImplementationOnce(() => {
      return Promise.resolve({
        ok: false,
      });
    });
    await expect(api.getShow(1)).rejects.toThrow("getShow server error");
  });
});
