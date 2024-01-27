<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Axios from '../Axios';

const meal = ref({});
const route = useRoute();

onMounted(async () => {
    const mealId = route.params.id;
    const res = await Axios.get(`/lookup.php?i=${parseInt(mealId)}`)
    // debugger;
    meal.value = res.data.meals ? res.data.meals[0] : {}
})
</script> 

<template>
        <RouterLink :to="{name: 'home'}">
            <button>Back to Home</button>
        </RouterLink>
    <div class="meal">
        <h1>{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal">

        <div class="mt-5">
            <p>{{ meal.strInstructions }}</p>
        </div>

        <div class="info">
            <div>
                <b>Category</b>: {{ meal.strCategory }}
            </div>
            
            <div>
                <b>Area</b>: {{ meal.strArea }}
            </div>

        </div>

        <div class="info1">
            <div class="instruction">
                <h3>Ingredients</h3>
                <ul>
                    <div v-for="(e, i) in new Array(20)">
                        <li v-if="meal[`strIngredient${i + 1}`]">{{ meal[`strIngredient${i + 1}`] }}</li>
                    </div>
                </ul>  
            </div>

            <div class="measures">
                <h3>Measures</h3>
                <ul>
                    <div v-for="(e, i) in new Array(20)">
                        <li v-if="meal[`strMeasure${i + 1}`]">{{ meal[`strMeasure${i + 1}`] }}</li>
                    </div>
                </ul>  
            </div>
            </div>

            <div class="view p-3 mt-5">
                <div class="btn btn-danger w-25 ">
                    <a :href="meal.strYoutube">Youtube</a>
                </div>  
                
                <div class="btn btn-primary w-25 ">
                <a :href="meal.strSource">View Original Source</a>
            </div>
            </div>

        </div>
    <!-- </div> -->
<!-- <pre>{{ meal }}</pre> -->

</template>

<style scoped>
.meal{
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 2em;
}
img{
    width: 100%;
    height: 60vh;
    object-fit: cover;
}
.info{
    display: flex;
    padding: 1em;
    justify-content: space-between;
}
.info1{
    display: flex;
    padding: 2em;
    justify-content: center;
}
.instruction{
    flex: 1;
}
.measures{
    flex: 1;
    float: right;
}
a{
    text-decoration: none;
    color: #fff;
}

.view{
    display: flex;
    justify-content: space-between;
}
</style>