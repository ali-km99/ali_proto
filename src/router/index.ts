import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/views/Home.vue";
import NotFound from "../components/views/NotFound.vue";
import About from "../components/views/about.vue";

// صفحات
// import Home from '@/views/Home.vue'
// import About from '@/views/About.vue'
// import Contact from '@/views/Contact.vue'
// import NotFound from '@/views/NotFound.vue'

const routes = [
  { path: "/", name: "home", component: Home },
  // {
  //   path: "/contactus",
  //   name: "contactus",
  //   component: () => import("../pages/contactUs.vue"),
  // },
  // {
  //   path: "/ourservices",
  //   name: "ourservices",
  //   component: () => import("../pages/ourservices.vue"),
  // },
  {
    path: "/about",
    name: "about",
    component: About,
  },

  // صفحة 404
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
