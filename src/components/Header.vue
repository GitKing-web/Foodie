<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import store from '../store'

const keyword = ref('')
const meals = computed(() => store.state.searchedMeals)
const emit = defineEmits(['search-meals'])

const searchMeals = async () => {
  store.dispatch('searchMeals', keyword.value)
  emit('search-meals', meals.value)
}

const showMobileMenu = ref(false)
</script>

<template>
  <header>
    <div class="left">
      <div class="logo">
        <h3>Foo<span>Die</span></h3>
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
          type="text"
          placeholder="Search meals by name"
        />
      </div>

      <button class="hamburger" @click="showMobileMenu = !showMobileMenu">
        <i class="fas fa-bars"></i>
      </button>
    </div>

    <div class="center navs" v-show="!showMobileMenu">
      <RouterLink to="/"><h4>Home</h4></RouterLink>
      <h4>About</h4>
      <RouterLink to="/letter/:letter" key="letter"><h4>Meals by letter</h4></RouterLink>
      <h4>Contact</h4>
    </div>

    <div class="mobile-menu" v-if="showMobileMenu">
      <RouterLink to="/letter/:letter" key="letter"><h4>Meals by letter</h4></RouterLink>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  background-color: #ffffff;
  border-bottom: 1px solid #eee;
  flex-wrap: wrap;
  position: relative;
  z-index: 10;
}

/* Logo */
.left .logo h3 {
  font-size: 28px;
  margin: 0;
  font-weight: bold;
  color: #222;
}
.logo span {
  color: #28a745;
}

/* Navigation Links */
.center {
  flex: 2;
  display: flex;
  justify-content: center;
}
.navs {
  display: flex;
  gap: 24px;
  align-items: center;
}
.navs h4 {
  font-size: 16px;
  cursor: pointer;
  color: #333;
  transition: color 0.2s ease;
}
.navs h4:hover {
  color: #28a745;
}
a {
  text-decoration: none;
}

/* Search and Hamburger */
.right {
  flex: 2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
}
.searchContainer {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 4px 8px;
  width: 60%;
  background-color: #fafafa;
}
.searchContainer input {
  border: none;
  outline: none;
  flex: 1;
  padding: 6px;
  background: transparent;
  font-size: 14px;
  color: #333;
}
button.search {
  background-color: transparent;
  border: none;
  padding: 4px;
  cursor: pointer;
}
button.search i {
  font-size: 16px;
  color: #999;
  transition: color 0.2s ease;
}
button.search:hover i {
  color: #28a745;
}

/* Hamburger Menu */
.hamburger {
  background: transparent;
  border: none;
  font-size: 20px;
  color: #333;
  display: none;
  cursor: pointer;
}

/* Mobile Menu */
.mobile-menu {
  width: 100%;
  margin-top: 12px;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  overflow: hidden;
}
.mobile-menu h4 {
  padding: 12px 16px;
  border-bottom: 1px solid #eee;
  font-size: 16px;
  color: #333;
}
.mobile-menu h4:hover {
  background-color: #f8f9fa;
  color: #28a745;
}

/* Responsiveness */
@media (max-width: 768px) {
  .navs {
    display: none !important;
  }
  .hamburger {
    display: block;
  }
  .searchContainer {
    width: 70%;
  }
}
</style>

