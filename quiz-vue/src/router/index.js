import { createRouter, createWebHistory } from "vue-router";
import Quizzer from "../views/Quizzer.vue";
import Quiz from "../views/Quiz.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "quizzer",
      component: Quizzer,
    },
    {
        path: "/quiz/:id",
        name: "quiz",
        component: Quiz,
    },
  ],
});

export default router;
