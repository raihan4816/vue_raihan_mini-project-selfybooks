<template>
  <div class="home">
    <div class="motivation">
      <div>
        <h1>Motivation Books</h1>
      </div>
      <div>
        <p class="text-lowercase fs-6">chase your dreams with motivation</p>
      </div>
    </div>
    <MotivationItem
      v-for="(data, index) in MotivationView"
      :key="index"
      :quote="data"
      class="d-md-inline-flex justify-content-center m-5"
    />
  </div>
</template>

<script>
import MotivationItem from "@/components/MotivationItem.vue";

export default {
  name: "MotivationView",
  components: {
    MotivationItem,
  },
  computed: {
    MotivationView() {
      return this.$store.state.lists;
    },
  },
  methods: {
    getData() {
      this.$store.dispatch("fetchMotivation");
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
