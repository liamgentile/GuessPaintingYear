<template>
  <div class="home" aria-hidden="true">
    <h1>Guess the Painting Year!</h1>
    <h3>Test your intuition for painting dating</h3>
    <label for="#random-painting-button" class="button-label">Fetch a Random Painting</label>
    <button type="button" class="get-painting-button" id="random-painting-button">Get</button>
    <footer>A simple web app powered by the Art Institute of Chicago API</footer>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      paintingDate: null,
      painterName: "",
      paintingName: "",
      randomId: null
    }
  }
};

</script>

<style scoped>

.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h3 {
  margin-bottom: 1.5rem;
}
.button-label {
  margin-bottom: 1rem;
}
.get-painting-button {
  width: 5rem;
  margin: auto
  
}
footer {
  position:absolute;
  bottom:0;
  width:100%;
  height: 3rem;
}
</style>
