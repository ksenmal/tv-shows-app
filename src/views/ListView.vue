<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { store } from "../utils/store.js";
import fn from "../utils/functions.js";
import ShowsList from "../components/ShowsList.vue";
import GenreList from "../components/GenreList.vue";

const filteredList = ref([]);
const genre = ref("");
const route = useRoute();

function getFilteredShows(genreName) {
  const arr = store.list.filter((item) => {
    if (item.genres && item.genres.length) {
      return item.genres.indexOf(genreName) === -1 ? false : true;
    } else {
      return false;
    }
  });
  return arr;
}

function getPopularShows() {
  return store.list.slice(0, 20);
}

function populateList(genreName) {
  if (genreName) {
    genre.value = fn.getCapitalizedString(genreName);
    filteredList.value = getFilteredShows(genre.value);
  } else {
    genre.value = "";
    filteredList.value = getPopularShows();
  }
}

watch(
  () => route.params.genre,
  (newGenre) => {
    populateList(newGenre);
  }
);

onMounted(() => {
  populateList(route.params.genre);
});
</script>

<template>
  <GenreList />
  <main>
    <h2 v-if="genre">{{ genre }} shows</h2>
    <h2 v-else>Popular shows of all times</h2>
    <ShowsList :list="filteredList" />
  </main>
</template>

<style scoped>
main {
  padding-top: 20px;
}
h2 {
  text-align: center;
  margin-bottom: 1rem;
}
</style>
