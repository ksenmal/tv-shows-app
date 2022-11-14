<script setup>
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import { store } from "./utils/store.js";
import LoaderSpinner from "./components/LoaderSpinner.vue";
import HeaderTop from "./components/HeaderTop.vue";
import ErrorMsg from "./components/ErrorMsg.vue";

onMounted(() => {
  store.getList();
});
</script>

<template>
  <HeaderTop />

  <LoaderSpinner v-if="store.isLoading" />
  <ErrorMsg v-else-if="store.error" />
  <RouterView v-else />
</template>
