import { createRouter, createWebHashHistory } from "vue-router";
import SettingsView from "@/views/SettingsView.vue";
import ListView from "@/views/ListView.vue";
const routes: Array<any> = [
  {
    path: "/",
    name: "ListView",
    component: ListView,
  },
  {
    path: "/settings/:id",
    name: "SettingsView",
    component: SettingsView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
