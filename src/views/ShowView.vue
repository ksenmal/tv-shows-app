<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import ActorsList from "../components/ActorsList.vue";
import LoaderSpinner from "../components/LoaderSpinner.vue";
import api from "../utils/api";
import fn from "../utils/functions.js";

const show = ref(null);
const isLoading = ref(false);
const route = useRoute();

onMounted(() => {
  isLoading.value = true;
  api
    .getShow(route.params.id)
    .then((res) => {
      isLoading.value = false;
      show.value = res;
    })
    .catch((error) => {
      isLoading.value = false;
      console.error("getShow error: ", error);
    });
});
</script>

<template>
  <LoaderSpinner v-if="isLoading" />
  <p v-else-if="!show" class="no-show-msg">Show cannot be found</p>
  <main v-else>
    <div class="stats clearfix">
      <img
        v-if="show.image && show.image.medium"
        :src="show.image.medium"
        alt=""
      />
      <h2>
        {{ show.name }}
        <span v-if="show.rating" class="rating">{{ show.rating.average }}</span
        ><span class="star">★</span>
      </h2>
      <p class="years">
        ( {{ fn.getYear(show.premiered) }} - {{ fn.getYear(show.ended) }} )
      </p>
      <div class="genres">
        <span v-for="genre in show.genres" :key="genre">{{ genre }}</span>
      </div>
      <p v-if="show.network && show.network.country">
        Country: {{ show.network.country.name }}
      </p>
      <p v-if="show.network">
        Platform:
        <a
          :href="show.network.officialSite"
          target="_blank"
          rel="noopener"
          class="external-link"
          >{{ show.network.name }}</a
        >
      </p>
      <p v-if="show.officialSite">
        Show's official site:
        <a
          :href="show.officialSite"
          target="_blank"
          rel="noopener"
          class="external-link"
          >{{ show.officialSite }}</a
        >
      </p>
    </div>
    <p class="summary">{{ fn.clearHTMLtags(show.summary) }}</p>

    <div
      v-if="show._embedded && show._embedded.cast && show._embedded.cast.length"
      class="cast"
    >
      <h3>Starring:</h3>
      <ActorsList :list="show._embedded.cast" />
    </div>
  </main>
</template>

<style scoped>
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
.external-link::after {
  content: "🡭";
}
main {
  margin: 1rem;
}
h2 {
  font-size: 2rem;
}
.years {
  font-size: 1.5rem;
}
.stats {
  text-align: center;
}
.rating {
  color: var(--color-link);
  padding-left: 1.5rem;
}
.star {
  color: var(--color-yellow);
}
.genres {
  margin: 2rem 0;
}
.genres span {
  margin-right: 5px;
  background-color: var(--color-background-grey);
  padding: 5px 10px;
  border-radius: 5px;
}
.summary {
  margin-top: 2rem;
}
.no-show-msg {
  text-align: center;
  margin-top: 2rem;
  font-size: 1.5rem;
}
.cast {
  margin-top: 2rem;
}
.cast h3 {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

@media (min-width: 1024px) {
  main {
    margin: 2rem 4rem;
  }
  .stats {
    text-align: left;
  }
  .stats img {
    float: left;
    margin-right: 2rem;
  }
}
</style>
