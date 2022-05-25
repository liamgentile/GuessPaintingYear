<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HomePage/>
</template>

<script>
import HomePage from './components/HomePage.vue'

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@200&family=Roboto:wght@700&display=swap');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

/* global styling for headers and paragraph  */
h1, h3, h3, h4, h5, h6 {
  font-family: 'Roboto', sans-serif;
}

p {
  font-family: 'Libre Franklin', sans-serif;
}


</style>
