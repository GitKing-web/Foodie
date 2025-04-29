import { createStore } from 'vuex';
import Axios from '../Axios';

const store = createStore({
    state: {
        searchedMeals: [],
        mealsByLetter: [],
        mealForTheDay: []
    },
    actions: {
        searchMeals: ({commit}, payload) => {
            Axios.get(`/search.php?s=${payload}`)
            .then(({ data}) => {
                commit('setSearchedMeals', data.meals)
            })
        },

        mealByLetter: async({ commit }, payload) => {
            const res = await Axios.get(`/search.php?f=${payload}`)
            res.data ? commit('setMealsByLetter' ,res.data.meals) : {}
        },

        forTheDay: async() => {
            const res = await Axios.get('random.php')
            store.commit('setMealForTheDay', res.data.meals[0])
        }

    },
    mutations:{
        setSearchedMeals:(state, payload) => {
            state.searchedMeals = payload
        },

        setMealsByLetter:(state, payload) => {
            state.mealsByLetter = payload
        }, 

        setMealForTheDay: ( state, payload ) => {
            state.mealForTheDay = payload;
        }
    },
    // getters
}); 

export default store