import ShowView from "../ShowView.vue";
import { mount } from "@vue/test-utils";
import { beforeAll, describe, expect, test, vi } from "vitest";

vi.mock("vue-router", () => {
  return {
    useRoute: () => {
      return {
        params: {
          id: 1,
        },
      };
    },
  };
});

vi.mock("../../utils/functions.js", () => {
  return {
    default: {
      clearHTMLtags: vi.fn(),
      getYear: vi.fn(),
    },
  };
});

describe("ShowView suite", () => {
  beforeAll(() => {
    global.fetch = vi.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            summary: "Very nice show",
            ended: "2019-02-02",
            image: {
              medium: "https://images.com/img.jpg",
            },
            network: {
              country: {
                name: "US",
              },
            },
            _embedded: {
              cast: [
                {
                  person: {
                    name: "Jon Snow",
                  },
                  character: {
                    image: {
                      medium: "https://images.com/img.jpg",
                    },
                  },
                },
              ],
            },
          }),
      });
    });
  });

  test("ShowView snapshot", () => {
    const wrapper = mount(ShowView);
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("ShowView strips HTML tags from summary and gets year from date", async () => {
    const fn = await import("../../utils/functions.js");

    mount(ShowView);
    expect(fn.default.clearHTMLtags).toHaveBeenCalledWith("Very nice show");
    expect(fn.default.getYear).toHaveBeenCalledWith("2019-02-02");
  });
});
