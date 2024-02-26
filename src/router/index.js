import { createRouter, createWebHistory } from "vue-router";
import MainComponentVue from "../component/MainComponent.vue";
import SecondComponentVue from "../component/SecondComponent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // Router pour la vue HomeView
      path: "/",
      name: "service",
      component: MainComponentVue,
    },
    {
      // Router pour la vue ListView
      path: "/cuisine",
      name: "cuisine",
      component: SecondComponentVue,
    },
  ],
});

export default router;
