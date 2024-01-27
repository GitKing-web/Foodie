<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store';
import Axios from '../Axios';
const meal = computed(() => store.state.mealForTheDay)
// async function getMeal() {
//     const res = await Axios.get('random.php')
//     store.commit('setMealForTheDay', res.data.meals)
// }

onMounted(() => {
    // store.state.mealForTheDay === null ? getMeal() : {}
    store.dispatch('forTheDay', meal)
})
</script>

<template>
    <h3 class="text-center mt"><span>Meal</span> of The Moment</h3>
    <div class="cards">
        <div class="info">
            <div class="title">
                <h3><i>{{ meal.strMeal }}</i></h3>
            </div>
            <div class="ist mt-3 a">
                <b><i>Instructions:</i></b>
                <p class="mt-3">{{ meal.strInstructions }}</p>
            </div>
            <div class="cat a">
                <b><i>Category:</i></b> <p class="mt-3">{{ meal.strCategory }}</p>
            </div>
        </div>

        <div class="img">
            <img :src="meal.strMealThumb" :alt="meal.strMeal">
        </div>
    </div>
</template>

<style scoped>
.cards{
    display: flex;
    padding: 2rem;
    align-items: center;
}
.mt{
    margin-top: 4rem;
    font-size: 40px;
    font-weight: 700;
}
span{
    color: green;
}
b i{
    border: 3px solid green;
    padding: 5px;
    border-radius: 20px;
}
.info{
    flex: 2;
}
.img{
    flex: 1;

}
img{
    width: 100%;
    border: 8px solid green;
    border-radius: 50%;
    height: 20%;
    object-fit: cover;
}
.ist p{
    display: -webkit-box;
    -webkit-line-clamp: 4;
}
</style>