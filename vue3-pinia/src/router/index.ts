import { createRouter, createWebHistory } from "vue-router";
import CarListView from "../views/CarList/CarList.view.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: CarListView,
    },
    {
      path: "/cars/:id",
      name: "CarDetails",
      component: import("@/views/CarDetails/CarDetails.view.vue"),
      props: true,
    },
  ],
});

export default router;
