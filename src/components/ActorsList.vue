<script setup>
import ActorCard from "./ActorCard.vue";

defineProps({
  list: Array,
});
</script>

<template>
  <ul>
    <li v-for="(actor, index) in list" :key="index">
      <ActorCard :actor="actor" />
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
ul li {
  width: 300px;
  display: flex;
  margin-bottom: 2rem;
}
</style>
