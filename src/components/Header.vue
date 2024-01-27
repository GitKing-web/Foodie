<script setup>
import { computed, onMounted, ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

import store from '../store'
const keyword = ref('');

const meals = computed(() => store.state.searchedMeals)

const emit = defineEmits(['search-meals']);


const searchMeals = async () => {
    store.dispatch('searchMeals', keyword.value)

    emit('search-meals', meals.value);
}


</script>

<template>
    <header>
        <div class="left">
            <div class="logo"><h3>Foo<span>Die</span></h3></div>
        </div>

        <div class="center">
            <div class="navs">
                <RouterLink to="/">

                    <h4>Home</h4>
                </RouterLink>
                <h4>About</h4>

                <RouterLink to="/letter/:letter" key="letter">

                    <h4>Meals by letter</h4>
                </RouterLink>

                <h4>Contact</h4>
            </div>
        </div>

        <div class="right">
            <div class="searchContainer">
                <button class="search">
                    <i class="fas fa-search"></i>
                </button>
                <input 
                v-model="keyword"
                @change="searchMeals"
                type="text" placeholder="search meals by name">
            </div>
        </div>

    </header>

</template>

<style scoped>

header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
}
.left{
    flex: 1
}
.logo h3{
    font-size: 50px;
    margin-left: 10px;
    cursor: pointer;
}

.logo span{
    color: green;
}
.center{
    flex: 1;
}
.navs{
    display: flex;
    justify-content: space-between;
}
a{
    text-decoration: none;
    color: #000
}
.navs h4{
    font-size: 20px;
    cursor: pointer;
}
.right{
    flex: 1;
}
.searchContainer{
    display: flex;
    float: right;
    align-items: center;
    margin-right: 10px;
    padding: 3px;
    justify-content: flex-end;
    border: 1px solid lightgray;
    width: 50%;
}
input{
    border: none;
    outline: none;
    flex: 4;
}
button{
    background-color: transparent;
    border: none;
    padding: 4px;
    flex: 1;

}
i{
    color: lightgray;
    font-size: 18px;
}

</style>