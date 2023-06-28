import { createRouter, createWebHistory } from "vue-router";
import CoachesList from "./pages/coaches/CoachesList.vue";
import RequestsList from "./pages/requests/RequestsList.vue";
import ContactCoach from "./pages/requests/ContactCoach.vue";
import CoachRegisteration from "./pages/coaches/CoachRegistration.vue";
import CoachDetails from "./pages/coaches/CoachDetails.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: CoachesList },
    {
      path: "/coaches/:id",
      props: true,
      component: CoachDetails,
      children: [{ path: "contact", component: ContactCoach }],
    },
    { path: "/register", component: CoachRegisteration },
    { path: "/requests", component: RequestsList },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
