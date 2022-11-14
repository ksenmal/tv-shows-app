import { reactive } from "vue";
import api from "./api.js";

function compareByWeight(a, b) {
  return b.weight - a.weight;
}

export const store = reactive({
  list: [],
  isLoading: false,
  error: null,
  getList() {
    this.error = null;
    this.isLoading = true;
    return api
      .getAllShows()
      .then((resp) => {
        this.list = resp.sort(compareByWeight);
        this.error = null;
        this.isLoading = false;
      })
      .catch((error) => {
        this.error = error;
        this.isLoading = false;
        console.error(error);
      });
  },
  searchValue: "",
  setSearchValue(newValue) {
    this.searchValue = newValue;
  },
});
