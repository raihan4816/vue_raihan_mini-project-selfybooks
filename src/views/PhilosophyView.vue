<template>
  <div class="home">
    <div class="philosophy">
      <div>
        <h1>Philosophy Books</h1>
      </div>
      <div>
        <p class="text-lowercase fs-6">joyful comes with philosophy</p>
      </div>
    </div>
    <PhilosophyItem
      v-for="(data, index) in PhilosophyView"
      :key="index"
      :quote="data"
      class="d-md-inline-flex justify-content-center m-5"
    />
  </div>
</template>

<script>
import PhilosophyItem from "@/components/PhilosophyItem.vue";

export default {
  name: "PhilosophyView",
  components: {
    PhilosophyItem,
  },
  computed: {
    PhilosophyView() {
      return this.$store.state.lists;
    },
  },
  methods: {
    getData() {
      this.$store.dispatch("fetchPhilosophy");
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
