<script setup>
import { computed, onMounted } from 'vue';
import store from '../store';

const meal = computed(() => store.state.mealForTheDay);

onMounted(() => {
  if (!meal.value || Object.keys(meal.value).length === 0) {
    store.dispatch('forTheDay');
  }
});
</script>

<template>
  <section class="meal-section">
    <h2 class="heading"><span>Meal</span> of the Moment</h2>
    <div class="meal-card">
      <div class="meal-info">
        <h3 class="meal-title">{{ meal.strMeal }}</h3>

        <div class="meal-detail">
          <h4><i>Instructions</i></h4>
          <p class="meal-text">{{ meal.strInstructions }}</p>
        </div>

        <div class="meal-detail">
          <h4><i>Category</i></h4>
          <p>{{ meal.strCategory }}</p>
        </div>
      </div>

      <div class="meal-image">
        <img :src="meal.strMealThumb" :alt="meal.strMeal" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.meal-section {
  padding: 4rem 2rem;
  background-color: #f9f9f9;
}

.heading {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
}

.heading span {
  color: #27ae60;
}

.meal-card {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  background: white;
  min-height: 500px;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.meal-info {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.meal-title {
  font-size: 1.75rem;
  font-weight: bold;
  color: #2c3e50;
}

.meal-detail h4 {
  display: inline-block;
  background: #27ae60;
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.meal-text {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.meal-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.meal-image img {
  width: 240px;
  height: 240px;
  object-fit: cover;
  border-radius: 50%;
  border: 6px solid #27ae60;
  transition: transform 0.3s ease;
}

.meal-image img:hover {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .meal-card {
    flex-direction: column;
    align-items: center;
  }

  .meal-info {
    text-align: center;
  }
}
</style>
