<template>
  <div>
    <h1>Detail Book: {{ quote.volumeInfo.title }}</h1>
    <div class="card border-success justify-content-center" style="width: 100%">
      <div class="row">
        <div class="col-md-3">
          <img
            :src="quote.volumeInfo.imageLinks.thumbnail"
            class="img-fluid rounded-start"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Title: {{ quote.volumeInfo.title }}</h5>
            <p class="card-text">Subtitle: {{ quote.volumeInfo.subtitle }}</p>
            <p class="card-text">Authors: {{ quote.volumeInfo.authors }}</p>
            <p class="card-text">Language: {{ quote.volumeInfo.language }}</p>
            <p class="card-text">
              Published At: {{ quote.volumeInfo.publishedDate }}
            </p>
            <p class="card-text">
              Categories: {{ quote.volumeInfo.categories }}
            </p>
            <p class="card-text">Rate: {{ quote.volumeInfo.averageRating }}</p>
            <p class="card-text">
              <small class="text-muted"
                >{{ quote.volumeInfo.pageCount }} pages</small
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="card text-bg-light mt-3" style="width: 100%">
      <div class="card-body">
        <h5 class="card-title">Synopsis</h5>
        <p class="card-text">
          {{ quote.volumeInfo.description }}
        </p>
      </div>
    </div>
    <div>
      <h2 class="mt-4 mb-3 text-center">Book Reviews</h2>
      <div class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping" style="width: 10%"
          >Name</span
        >
        <input
          type="text"
          class="form-control"
          placeholder="Name"
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
      </div>
      <div class="input-group mb-3">
        <span
          class="input-group-text"
          id="inputGroup-sizing-default"
          style="width: 10%"
          >Comment</span
        >
        <input
          type="text"
          class="form-control"
          placeholder="Comment"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>
      <input class="btn btn-primary text-end" type="button" value="Send" />
    </div>
    <div>
      <h5 class="card-title mt-2">Name: Raihan</h5>
      <p class="card-text">Comment: This book is insanely mindblowing.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookItem",
  props: {
    quote: Object,
  },
};
</script>

<style scoped>
.img-fluid {
  width: 100%;
}
</style>
