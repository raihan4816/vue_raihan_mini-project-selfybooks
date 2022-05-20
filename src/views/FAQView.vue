<template>
  <div class="faq m-5">
    <FAQComp />
    <WebReviewView />
  </div>
</template>

<script>
import FAQComp from "@/components/FAQComp.vue";
import WebReviewView from "@/views/WebReviewView.vue";

export default {
  name: "FAQView",
  components: {
    FAQComp,
    WebReviewView,
  },
};
</script>

<style scoped></style>
