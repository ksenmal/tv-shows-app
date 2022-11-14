import { createRouter, createWebHistory } from "vue-router";
import ListView from "../views/ListView.vue";
import ShowView from "../views/ShowView.vue";
import SearchView from "../views/SearchView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import { genreList } from "../utils/constants";

const validGenreRoutes = new Set(genreList.map((g) => g.route));

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homeList",
      component: ListView,
    },
    {
      path: "/:genre",
      name: "genreList",
      component: ListView,
      beforeEnter: (to) => {
        if (!validGenreRoutes.has(to.params.genre)) {
          return { path: `/notfound/${to.params.genre}` };
        }
      },
    },
    {
      path: "/show/:id",
      name: "showDetail",
      component: ShowView,
    },
    {
      path: "/search",
      name: "search",
      component: SearchView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFoundView,
    },
  ],
});

export default router;
