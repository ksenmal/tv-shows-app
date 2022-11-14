import { mount } from "@vue/test-utils";
import ErrorMsg from "../ErrorMsg.vue";
import { describe, expect, test } from "vitest";

describe("ErrorMsg suite", () => {
  test("Snapshot", () => {
    const wrapper = mount(ErrorMsg);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
