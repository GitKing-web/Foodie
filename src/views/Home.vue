<script setup>
import store from '../store';
import Header from '../components/Header.vue';
import FortheDay from '../components/FortheDay.vue';
import { ref, computed } from 'vue';
// import store from '../store';
const meals = computed(() => store.state.searchedMeals)


const handlesearch = (res) => {
    res.value = meals
}
</script>

<template>
    <Header :search-meals="handlesearch"/>
  
    <div v-if="meals && meals.length" class="meals">
      <div v-for="meal in meals" :key="meal.idMeal" class="card shadow">
        <RouterLink :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
          <img :src="meal.strMealThumb" :alt="meal.strMeal">
        </RouterLink>
  
        <div class="info">
          <h3>{{ meal.strMeal }}</h3>
          <p>Quick preview of this meal. Click to see details.</p>
        </div>
      </div>
    </div>
  
    <div v-else class="empty-home-state">
      <p>Search for a meal to see results.</p>
    </div>
  
    <FortheDay />
  </template>

<style scoped>

.empty-home-state {
  text-align: center;
  padding: 2rem;
  font-size: 16px;
  color: #888;
}

.meals{
/* display: flex;
flex-wrap: wrap; */
display: grid;
padding: 1em;
grid-template-columns: repeat(4, 1fr);
gap: 1rem;
}
.card h3{
    padding: .7em;
    margin-top: 3px;
    font-size: 25px;
    font-weight: 300;
}
.card p{
    padding: .7em;
    margin-top: 1px;
}

.btn{
    margin-bottom: 20px;
    margin-left: 20px;
    padding: 10px;
}
.card   :hover{
    opacity: .8;
}
.btn a{
    color: aliceblue;
}
img{
    width: 100%;
    border-radius: 10px ;
    cursor: pointer;
    object-fit: cover;
}

@media (max-width: 700px) {
    .meals{
        margin-top: 15px;
        display: inline-block;
        /* flex-direction: column; */
    }
}
</style>