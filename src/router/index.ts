import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import RickNMorty from "../views/RickNMorty.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: RickNMorty
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
