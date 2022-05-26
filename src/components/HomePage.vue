<template>
  <div class="home">
    <h1>Guess the Painting Year!</h1>
    <h3>Test your intuition for painting dating</h3>
    <label for="#random-painting-button" class="button-label"
      >Click generate to fetch a Random Painting</label
    >
    <button
      type="button"
      class="get-painting-button"
      id="random-painting-button"
    >
      Generate
    </button>
    <img src="" alt="">
    <label class="input-label" for="#date-input">Input your guess for what year this painting was made below.</label>
    <input id="date-input" class="date-input" type="text">
    <footer>
      Powered by the Art Institute of Chicago API
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      exceptions: [],
      paintingDate: 0,
      painterName: "",
      paintingName: "",
      randomId: 0,
    };
  },
  methods: {
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
  margin: auto;
}

.input-label {
  margin-top: 3rem;
}
.date-input {
  margin: auto;
  margin-top: 1rem;
  width: 10rem;
}
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 3rem;
}
</style>
