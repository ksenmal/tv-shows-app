import { shallowMount } from "@vue/test-utils";
import ShowCard from "../ShowCard.vue";
import { describe, expect, test } from "vitest";

describe("ShowCard suite", () => {
  test("Snapshot", () => {
    const wrapper = shallowMount(ShowCard, {
      props: {
        item: {
          id: 1234567,
          rating: {
            average: 5,
          },
          image: {
            medium: "https://example.com/img.jpg",
          },
        },
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
