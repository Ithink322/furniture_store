import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import App from "../App.vue";
import LoginOrRegistrationPage from "../components/pages/LoginOrRegistrationPage.vue";
import HomePage from "../components/pages/HomePage.vue";
import BlogPage from "../components/pages/BlogPage.vue";
import ContactUsPage from "../components/pages/ContactUsPage.vue";
import ShopPage from "../components/pages/ShopPage.vue";
import CurrentBlogPage from "../components/pages/CurrentBlogPage.vue";
import CurrentProductPage from "../components/pages/CurrentProductPage.vue";
import CartPage from "../components/pages/CartPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/App",
    component: App,
    children: [
      {
        path: "/LoginOrRegistrationPage",
        component: LoginOrRegistrationPage,
        meta: { hideComponents: true },
      },
    ],
  },
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
  {
    path: "/CurrentProductPage",
    component: CurrentProductPage,
  },
  {
    path: "/CartPage",
    component: CartPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
