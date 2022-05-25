<template>
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

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

html {
  background: url("/src/assets/blush-bg.png") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

/* global styling for headers and paragraph  */
@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300&family=Roboto:wght@700&display=swap');

h1, h3, h3, h4, h5, h6 {
  font-family: 'Roboto', sans-serif;
}

p, footer {
  font-family: 'Libre Franklin', sans-serif;
}


</style>
