<template>
  <div class="home">
    <div>
      <h1>Welcome To SelfyBooks</h1>
    </div>
    <div>
      <p class="text-lowercase fs-6">
        where all people can share thoughts on Self Improvement Books
      </p>
    </div>
    <HomeItem
      v-for="(data, index) in HomeView"
      :key="index"
      :quote="data"
      class="d-md-inline-flex justify-content-center m-5"
    />
  </div>
</template>

<script>
import HomeItem from "@/components/HomeItem.vue";

export default {
  name: "HomeView",
  components: {
    HomeItem,
  },
  computed: {
    HomeView() {
      return this.$store.state.lists;
    },
  },
  methods: {
    getData() {
      this.$store.dispatch("fetchNews");
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
.home {
  justify-content: center;
  text-align: center;
  margin-top: 16px;
  padding-top: 16px;
}
</style>
