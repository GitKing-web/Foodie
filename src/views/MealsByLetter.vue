<script setup>
import { computed, onMounted, ref,  watchEffect } from 'vue';
import Header from '../components/Header.vue';
import store from '../store'
import { useRoute } from 'vue-router';
const route = useRoute();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const meals = computed(() => store.state.mealsByLetter)

watchEffect(() => {
    store.dispatch('mealByLetter', route.params.letter)

})

onMounted(() => {
    store.dispatch('mealByLetter', route.params.letter)
    
})
</script>

<template>
    <Header />
    <div class="letter">
        <RouterLink v-for="letter in letters" :to="{ name: 'byLetter', params: { letter }}">
            {{ letter }}
        </RouterLink>
    </div>

    <div class="meals">
        <div v-for="meal in meals" :key="meal.idMeal" class="card shadow" >
            <RouterLink :to="{ name: 'mealDetails', params: { id: meal.idMeal }}" :key="meal.idMeal">
                <!-- <button>view</button> -->
                <img :src="meal.strMealThumb" :alt="meal.srtMeal">
            </RouterLink>

            <div class="info">
                <h3>{{ meal.strMeal }}</h3>
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Commodi, libero harum! Tem
                    temporibus ab modi perspiciatis minima quos sunt!</p>
            </div>
            <div class="btn btn-danger w-25 ">
                <a :href="meal.strYoutube">Youtube</a>
            </div>
        </div>
    </div>


</template>

<style scoped>
.letter{
    padding: 2rem;
    display: flex;
    justify-content: space-evenly;
}
a{
    text-decoration: none;
    color: green;
    font-weight: 700;
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