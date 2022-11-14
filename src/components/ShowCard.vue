<script setup>
import { RouterLink } from "vue-router";
import fn from "../utils/functions.js";

defineProps({
  item: Object,
});
</script>

<template>
  <RouterLink :to="`/show/${item.id}`">
    <div>
      <p>{{ item.name }}</p>
      <p v-if="item.rating" class="rating">
        {{ item.rating.average }}<span class="star">★</span>
      </p>
    </div>
    <img v-if="item.image" :src="item.image.medium" :alt="item.name" />
    <p class="years">( {{ fn.getYear(item.premiered) }} )</p>
  </RouterLink>
</template>

<style scoped>
div {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}
.star {
  color: var(--color-yellow);
}
.years {
  text-align: center;
}
</style>
