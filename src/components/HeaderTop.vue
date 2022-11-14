<script setup>
import { RouterLink, useRouter } from "vue-router";
import { store } from "../utils/store.js";

const router = useRouter();

function handleSearch() {
  router.push({
    path: "/search",
    query: {
      query: store.searchValue,
    },
  });
}
</script>

<template>
  <header>
    <div class="wrapper">
      <RouterLink to="/"><h1 class="green">TV Shows</h1></RouterLink>
      <div class="search">
        <input
          :value="store.searchValue"
          @input="(event) => store.setSearchValue(event.currentTarget.value)"
          @keyup.enter="handleSearch"
          placeholder="Search"
        />
        <button @click="handleSearch" :disabled="!store.searchValue">Go</button>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
}
.wrapper {
  width: 100%;
  text-align: center;
}
.wrapper .search {
  margin: 1rem 0;
}
.wrapper input {
  padding: 5px 5px 5px 25px;
  border-radius: 5px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='%23999' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' /%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 3px 4px;
  background-size: 1rem;
}
.wrapper button {
  padding: 4px;
  cursor: pointer;
  margin-left: 5px;
  border-radius: 4px;
}
.wrapper button:disabled {
  background-color: #b1b1b1;
  cursor: auto;
}
@media (min-width: 576px) {
  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    text-align: center;
  }
}
</style>
