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
    setBook(state, param) {
      state.lists = param.items;
      state.totalItems = param.totalItems;
    },
    setError(state, param) {
      state.error = param;
    },
    setPhilosophy(state, param) {
      state.lists = param.items;
      state.totalItems = param.totalItems;
    },
    setMotivation(state, param) {
      state.lists = param.items;
      state.totalItems = param.totalItems;
    },
    setQuotes(state, param) {
      state.lists = param.data.qoutes;
      state.totalItems = param.totalItems;
    },
  },
  actions: {
    fetchBook(store) {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=subject:habit&key=AIzaSyCds0T-edFJyP9-0XpXbT-xfcEQXZWhGOM"
        )
        .then((response) => {
          store.commit("setBook", response.data);
          console.log("fetchBook set global state");
        });
    },
    fetchPhilosophy(store) {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=subject:philosophy&key=AIzaSyCds0T-edFJyP9-0XpXbT-xfcEQXZWhGOM"
        )
        .then((response) => {
          store.commit("setPhilosophy", response.data);
          console.log("fetchPhilosophy set global state");
        });
    },
    fetchMotivation(store) {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=subject:motivation&key=AIzaSyCds0T-edFJyP9-0XpXbT-xfcEQXZWhGOM"
        )
        .then((response) => {
          store.commit("setMotivation", response.data);
          console.log("fetchMotivation set global state");
        });
    },
    fetchQuotes(store) {
      axios
        .get(
          "https://quotsy.p.rapidapi.com/quotes/index.json/?rapidapi-key=b584c8e23bmsh96f8bbc78a409a5p1fe908jsn6999ae9a30a9"
        )
        .then((response) => {
          store.commit("setQuotes", response.data);
          console.log("fetchQuotes set global state");
        });
    },
  },
  modules: {},
});
