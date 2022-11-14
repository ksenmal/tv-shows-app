<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="page-not-found">
    <p>Page not found.</p>
    <p>Go to <RouterLink to="/">Main page</RouterLink></p>
  </div>
</template>

<style scoped>
.page-not-found {
  margin-top: 2rem;
  text-align: center;
  font-size: 1.5rem;
}
</style>
