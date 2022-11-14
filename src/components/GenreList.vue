<script setup>
import { RouterLink } from "vue-router";
import { genreList } from "../utils/constants";
</script>

<template>
  <nav>
    <RouterLink
      v-for="genre in genreList"
      :to="`/${genre.route}`"
      :key="genre.name"
      >{{ genre.name }}</RouterLink
    >
  </nav>
</template>

<style>
nav {
  width: 100%;
  font-size: 1rem;
  text-align: center;
  margin-bottom: 1rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  background-color: var(--color-background-grey);
  border-radius: 5px;
  margin: 2px;
}

@media (min-width: 1024px) {
  nav {
    font-size: 1rem;
    padding: 1rem 0;
  }
}
</style>
