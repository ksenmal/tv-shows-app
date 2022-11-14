import { shallowMount } from "@vue/test-utils";
import { describe, expect, test, vi } from "vitest";
import ListView from "../ListView.vue";

vi.mock("vue-router", () => {
  return {
    useRoute: () => {
      return {
        params: {
          genre: "drama",
        },
      };
    },
  };
});

vi.mock("../../utils/store.js", () => {
  return {
    store: {
      list: [
        { genres: ["drama", "comedy"] },
        { genres: ["comedy"] },
        { genres: [] },
      ],
    },
  };
});

describe("ListView suite", () => {
  test("ListView snapshot", () => {
    const wrapper = shallowMount(ListView);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
