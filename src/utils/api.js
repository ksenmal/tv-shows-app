const BASE_URL = "https://api.tvmaze.com";
const API_PAGES_NUMBER = 5;

const api = {
  getAllShows: async () => {
    let page = 0;
    let list = [];

    while (page < API_PAGES_NUMBER) {
      const resp = await fetch(`${BASE_URL}/shows?page=${page}`);
      if (!resp.ok) {
        throw new Error("getAllShows server error");
      }
      const result = await resp.json();
      list = [].concat(list, result);
      page++;
    }

    return list;
  },
  searchShowsByName: async (query) => {
    const resp = await fetch(`${BASE_URL}/search/shows?q=${query}`);
    if (!resp.ok) {
      throw new Error("searchShowsByName server error");
    }
    const result = await resp.json();
    return result;
  },
  getShow: async (id) => {
    const resp = await fetch(`${BASE_URL}/shows/${id}?embed[]=cast`);
    if (!resp.ok) {
      throw new Error("getShow server error");
    }
    const result = await resp.json();
    return result;
  },
};

export default api;
