import { shallowMount } from "@vue/test-utils";
import HeaderTop from "../HeaderTop.vue";
import { afterAll, beforeEach, describe, expect, test, vi } from "vitest";
import { store } from "../../utils/store.js";

vi.mock("vue-router", () => {
  const mockPush = vi.fn();
  return {
    RouterLink: vi.fn(),
    useRouter: vi.fn().mockImplementation(() => {
      return {
        push: mockPush,
      };
    }),
  };
});

vi.mock("../../utils/store.js", () => {
  return {
    store: {
      setSearchValue: vi.fn(),
      searchValue: "test",
    },
  };
});

describe("HeaderTop component test suite", async () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(HeaderTop);
  });

  test("Snapshot match", async () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("Triggering input sets search value", async () => {
    const testInput = "test Input";
    const input = wrapper.find("input");
    await input.setValue(testInput);
    await input.trigger("input");

    expect(store.setSearchValue).toHaveBeenCalledWith(testInput);
  });

  test("Trigger search input redirects to search page", async () => {
    const { useRouter } = await import("vue-router");
    const router = useRouter();
    const searchButton = wrapper.find("button");
    const input = wrapper.find("input");

    await input.setValue("test");
    await searchButton.trigger("click");

    expect(router.push).toHaveBeenCalled();
  });

  afterAll(() => {
    vi.clearAllMocks();
  });
});
