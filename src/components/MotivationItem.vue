<template>
  <div class="item">
    <div class="row" style="width: 250px">
      <router-link
        :to="{
          name: 'BookView',
          params: { title: quote.volumeInfo.title },
        }"
        class="component"
        style="text-decoration: none; color: inherit"
      >
        <div class="col">
          <div class="card bg-light">
            <img
              :src="quote.volumeInfo.imageLinks.thumbnail"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">{{ quote.volumeInfo.title }}</h5>
              <p class="card-text">{{ quote.volumeInfo.authors }}</p>
              <p class="card-text">
                <small class="text-muted"
                  >{{ quote.volumeInfo.pageCount }} pages</small
                >
              </p>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MotivationItem",
  props: {
    quote: Object,
  },
};
</script>

<style scoped></style>
