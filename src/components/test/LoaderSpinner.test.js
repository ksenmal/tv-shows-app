import { mount } from "@vue/test-utils";
import LoaderSpinner from "../LoaderSpinner.vue";
import { describe, expect, test } from "vitest";

describe("LoaderSpinner suite", () => {
  test("Snapshot", () => {
    const wrapper = mount(LoaderSpinner);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
