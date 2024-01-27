import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MealsByLetter from '../views/MealsByLetter.vue'
import MealDetails from '../views/MealDetails.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/", 
      name: "home",
      component: Home,
    },

    {
      path: '/letter/:letter',
      name: 'byLetter',
      component: MealsByLetter
    },

    {
      path: '/meal/:id?',
      name: 'mealDetails',
      component: MealDetails
    },
  ],
});

export default router;
