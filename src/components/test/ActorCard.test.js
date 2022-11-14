import { shallowMount } from "@vue/test-utils";
import ActorCard from "../ActorCard.vue";
import { describe, expect, test } from "vitest";

describe("ActorCard suite", () => {
  test("Snapshot", () => {
    const wrapper = shallowMount(ActorCard, {
      props: {
        actor: {
          character: {
            image: {
              medium: "https://example.com/img.jpg",
            },
            name: "Jon Snow",
          },
          person: {
            image: {
              medium: "https://example.com/img.jpg",
            },
            name: "Kit Harington",
          },
        },
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
