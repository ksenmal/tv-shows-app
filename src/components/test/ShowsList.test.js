import { shallowMount } from "@vue/test-utils";
import ShowsList from "../ShowsList.vue";
import { describe, expect, test } from "vitest";

describe("ShowList suite", () => {
  test("Snapshot when empty", () => {
    const wrapper = shallowMount(ShowsList, {
      props: {
        list: [],
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("Snapshot with data", () => {
    const wrapper = shallowMount(ShowsList, {
      props: {
        list: [{ id: 1 }, { id: 2 }],
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
