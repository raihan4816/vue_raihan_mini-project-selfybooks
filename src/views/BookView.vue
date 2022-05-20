<template>
  <div class="news-wrapper">
    <BookItem class="m-5" :quote="detailBook" />
  </div>
</template>

<script>
import BookItem from "@/components/BookItem.vue";

export default {
  name: "BookView",
  components: {
    BookItem,
  },
  data() {
    return {
      data: {
        title: "test",
        value: "Kembali",
      },
    };
  },
  mounted() {},
  computed: {
    detailBook() {
      const detail = this.$store.state.lists.filter(
        (value) => value.volumeInfo.title === this.$route.params.title
      );
      console.log("detail: ", detail);
      return detail[0];
    },
  },
  methods: {},
};
</script>
