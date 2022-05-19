import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const persistedDataState = createPersistedState({
  state: ["lists", "error", "totalResults"],
});

export default new Vuex.Store({
  plugins: [persistedDataState],
  state: {
    lists: [],
    error: "",
    totalResults: 0,
  },
  mutations: {
    setNews(state, param) {
      state.lists = param.items;
      state.totalItems = param.totalItems;
    },
    setError(state, param) {
      state.error = param;
    },
  },
  actions: {
    fetchNews(store) {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=subject:habit&key=AIzaSyCds0T-edFJyP9-0XpXbT-xfcEQXZWhGOM"
        )
        .then((response) => {
          store.commit("setNews", response.data);
          console.log("fetchNews set global state");
        })
        .catch((error) => {
          console.log("fetchListNews set global state error", error.message);
          console.log("error status: ", error.response.status);
          store.commit("setError", error.msg);
        });
    },
  },
  modules: {},
});
