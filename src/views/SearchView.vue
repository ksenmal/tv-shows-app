<script setup>
import api from "../utils/api.js";
import { onMounted, ref, watch } from "vue";
import { useRoute, onBeforeRouteLeave } from "vue-router";
import { store } from "../utils/store.js";
import LoaderSpinner from "../components/LoaderSpinner.vue";
import ShowsList from "../components/ShowsList.vue";

const searchResults = ref([]);
const isLoading = ref(false);
const route = useRoute();

function populateList(searchQuery) {
  isLoading.value = true;
  api
    .searchShowsByName(searchQuery)
    .then((resp) => {
      searchResults.value = resp.map((item) => item.show);
      isLoading.value = false;
    })
    .catch((err) => {
      console.error("searchList error:", err);
      isLoading.value = false;
    });
}

watch(
  () => route.query.query,
  (newQuery) => {
    if (newQuery) {
      populateList(newQuery);
      if (store.searchValue !== newQuery) {
        store.setSearchValue(newQuery);
      }
    }
  }
);

onMounted(() => {
  if (route.query.query) {
    populateList(route.query.query);
    store.setSearchValue(route.query.query);
  }
});

onBeforeRouteLeave(() => {
  store.setSearchValue("");
});
</script>

<template>
  <main>
    <h2>Search results for "{{ route.query.query }}":</h2>
    <LoaderSpinner v-if="isLoading" />
    <Transition>
      <ShowsList v-if="!isLoading" :list="searchResults" />
    </Transition>
  </main>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

main {
  padding-top: 20px;
}
main h2 {
  text-align: center;
}
</style>
