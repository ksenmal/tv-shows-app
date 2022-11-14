import NotFoundView from "../NotFoundView.vue";
import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

describe("NotFoundView suite", () => {
  test("NotFoundView snapshot", () => {
    const wrapper = shallowMount(NotFoundView);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
