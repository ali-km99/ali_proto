import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../components/layout/MainLayout.vue";
import Home from "../components/views/Home.vue";
import NotFound from "../components/views/NotFound.vue";

// صفحات
// import Home from '@/views/Home.vue'
// import About from '@/views/About.vue'
// import Contact from '@/views/Contact.vue'
// import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      //   {
      //     path: 'about',
      //     name: 'About',
      //     component: About,
      //   },
      //   {
      //     path: 'contact',
      //     name: 'Contact',
      //     component: Contact,
      //   },
    ],
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
