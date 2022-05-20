<template>
  <div class="item" style="width: 70%">
    <div class="card text-bg-warning" style="width: 100%">
      <div class="card-body">
        <h5 class="card-title mt-3">{{ quote.quoute }}</h5>
        <p class="card-text">{{ quote.author }}</p>
        <p class="card-text"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuotesItem",
  props: {
    quote: Object,
  },
};
</script>

<style scoped></style>
