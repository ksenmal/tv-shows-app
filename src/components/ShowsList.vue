<script setup>
import ShowCard from "./ShowCard.vue";
defineProps({
  list: Array,
});
</script>

<template>
  <p v-if="!list || !list.length" class="empty-list-msg">No TV shows found</p>
  <ul v-else class="show-list">
    <li v-for="item in list" :key="item.id" class="list-item">
      <ShowCard :item="item" />
    </li>
  </ul>
</template>

<style scoped>
.show-list {
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  justify-content: center;
}
.list-item {
  list-style: none;
  width: 250px;
  min-height: 320px;
  padding: 20px;
  margin-bottom: 10px;
  animation: fadein 0.5s linear;
  border: 2px solid var(--color-hover);
  border-radius: 4px;
}
@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.list-item img {
  display: inline-block;
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}

.empty-list-msg {
  margin-top: 2rem;
  text-align: center;
}
</style>
