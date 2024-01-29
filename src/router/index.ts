import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "../components/pages/HomePage.vue";
import BlogPage from "../components/pages/BlogPage.vue";
import ContactUsPage from "../components/pages/ContactUsPage.vue";
import ShopPage from "../components/pages/ShopPage.vue";
import CurrentBlogPage from "../components/pages/CurrentBlogPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/BlogPage",
    component: BlogPage,
  },
  {
    path: "/ContactUsPage",
    component: ContactUsPage,
  },
  {
    path: "/ShopPage",
    component: ShopPage,
  },
  {
    path: "/CurrentBlogPage",
    component: CurrentBlogPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
