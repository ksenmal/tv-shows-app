import { shallowMount } from "@vue/test-utils";
import GenreList from "../GenreList.vue";
import { describe, expect, test } from "vitest";

describe("GenreList suite", () => {
  test("Snapshot", () => {
    const wrapper = shallowMount(GenreList);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
