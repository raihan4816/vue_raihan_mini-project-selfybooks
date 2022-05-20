<template>
  <div class="home">
    <div class="quotes">
      <div>
        <h1>Quotes</h1>
      </div>
      <div>
        <p class="text-lowercase fs-6">be meaningful with quotes</p>
      </div>
    </div>
    <QuotesItem
      v-for="(data, index) in QuotesView"
      :key="index"
      :quote="data"
      class="d-md-inline-flex justify-content-center m-2"
    />
  </div>
</template>

<script>
import QuotesItem from "@/components/QuotesItem.vue";

export default {
  name: "QuotesView",
  components: {
    QuotesItem,
  },
  computed: {
    QuotesView() {
      return this.$store.state.lists;
    },
  },
  methods: {
    getData() {
      this.$store.dispatch("fetchQuotes");
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
