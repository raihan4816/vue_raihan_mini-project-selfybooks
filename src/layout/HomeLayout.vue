<template>
  <div class="home">
    <nav class="d-sm-flex navbar navbar-expand-lg bg-dark p-2">
      <div class="container-fluid">
        <a class="navbar-brand text-light" href="/"
          ><font-awesome-icon icon="fa-solid fa-book-copy" />SelfyBooks</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav justify-content-end">
            <li class="nav-item">
              <a class="nav-link active text-light" aria-current="page" href="/"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="philosophy">Philosophy</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="motivation">Motivation</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="quotes">Quotes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="faq">FAQ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="about">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
    <section class="background-color pb-5 mt-5 bg-dark">
      <div class="container text-light">
        <div class="row">
          <div class="col-md-6 ps-3 pe-3">
            <p class="fs-4 fw-bolder pt-5">SelfyBooks</p>
            <p class="pt-3">
              This is SelfyBooks where all people can share thoughts on Self
              Improvement Books.
            </p>
          </div>
          <div
            class="d-flex col-md-6 ps-3 pe-3 fs-6 pt-5 justify-content-center"
          >
            <div class="m-2">
              <div class="nav-item">
                <a
                  class="nav-link active text-light"
                  aria-current="page"
                  href="/"
                  >Home</a
                >
              </div>
              <div class="nav-item">
                <a class="nav-link text-light" href="philosophy">Philosophy</a>
              </div>
              <div class="nav-item">
                <a class="nav-link text-light" href="motivation">Motivation</a>
              </div>
              <div class="nav-item">
                <a class="nav-link text-light" href="quotes">Quotes</a>
              </div>
              <div class="nav-item">
                <a class="nav-link text-light" href="faq">FAQ</a>
              </div>
              <div class="nav-item">
                <a class="nav-link text-light" href="about">About</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomeLayout",
  components: {},
  computed: {},
  methods: {},
  mounted() {},
};
</script>

<style scoped></style>
