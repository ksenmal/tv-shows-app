import { shallowMount } from "@vue/test-utils";
import ActorsList from "../ActorsList.vue";
import { describe, expect, test } from "vitest";

describe("ActorsList suite", () => {
  test("Snapshot when empty", () => {
    const wrapper = shallowMount(ActorsList, {
      props: {
        list: [],
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("Snapshot with data", () => {
    const wrapper = shallowMount(ActorsList, {
      props: {
        list: [{ id: 1 }, { id: 2 }],
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
