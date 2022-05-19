import Vue from "vue";
import VueRouter from "vue-router";
import HomeLayout from "../layout/HomeLayout.vue";
import BookLayout from "../layout/BookLayout.vue";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import FAQView from "../views/FAQView.vue";
import MotivationView from "../views/MotivationView.vue";
import PhilosophyView from "../views/PhilosophyView.vue";
import QuotesView from "../views/QuotesView.vue";
import BookView from "../views/BookView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: HomeLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: HomeView,
      },
    ],
  },
  {
    path: "/about",
    component: HomeLayout,
    children: [
      {
        path: "",
        name: "About",
        component: AboutView,
      },
    ],
  },
  {
    path: "/faq",
    component: HomeLayout,
    children: [
      {
        path: "",
        name: "FAQ",
        component: FAQView,
      },
    ],
  },
  {
    path: "/motivation",
    component: HomeLayout,
    children: [
      {
        path: "",
        name: "Motivation",
        component: MotivationView,
      },
    ],
  },
  {
    path: "/philosophy",
    component: HomeLayout,
    children: [
      {
        path: "",
        name: "Philosophy",
        component: PhilosophyView,
      },
    ],
  },
  {
    path: "/quotes",
    component: HomeLayout,
    children: [
      {
        path: "",
        name: "Quotes",
        component: QuotesView,
      },
    ],
  },
  {
    path: "/",
    component: BookLayout,
    children: [
      {
        path: ":title",
        name: "BookView",
        component: BookView,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
