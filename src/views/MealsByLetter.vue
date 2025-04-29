<script setup>
import { computed, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store';
import Header from '../components/Header.vue';

const route = useRoute();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const meals = computed(() => store.state.mealsByLetter);

// Watch the route param and fetch meals only when a letter is present
watch(
  () => route.params.letter,
  (newLetter) => {
    if (newLetter) {
      store.dispatch('mealByLetter', newLetter);
    } else {
      store.commit('setMealsByLetter', []); // Clear meals when there's no letter
    }
  },
  { immediate: true }
);
</script>


<template>
  <Header />

  <div class="letter-nav">
    <RouterLink
      v-for="letter in letters"
      :key="letter"
      :to="{ name: 'byLetter', params: { letter } }"
      class="letter-link"
    >
      {{ letter }}
    </RouterLink>
  </div>

  <div v-if="meals && meals.length" class="meal-grid">
    <div
      v-for="meal in meals"
      :key="meal.idMeal"
      class="meal-card shadow"
    >
      <RouterLink
        :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
        class="image-link"
      >
        <img :src="meal.strMealThumb" :alt="meal.strMeal" />
      </RouterLink>

      <div class="meal-info">
        <h3>{{ meal.strMeal }}</h3>
      </div>
    </div>
  </div>

  <div v-else class="empty-state">
    <p>Select a letter to see meals.</p>
  </div>
</template>

<style scoped>
.letter-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
  gap: 0.8rem;
}
.letter-link {
  color: green;
  font-weight: bold;
  font-size: 18px;
  text-decoration: none;
  border: 2px solid green;
  padding: 6px 12px;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}
.letter-link:hover {
  background-color: green;
  color: white;
}

.meal-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}

.meal-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.meal-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 128, 0, 0.2);
}

.image-link img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 4px solid green;
}

.meal-info {
  padding: 1rem;
}

.meal-info h3 {
  font-size: 20px;
  color: #333;
}

.empty-state {
  text-align: center;
  padding: 2rem;
  font-size: 18px;
  color: gray;
}
</style>
