<template>
  <div class="home">
    <h1>Guess the Painting Year!</h1>
    <h3>Test your intuition for painting dating</h3>
    <label for="#random-painting-button" class="button-label"
      >Click generate to fetch a random painting</label
    >
    <button
      type="button"
      class="get-painting-button"
      id="random-painting-button"
    >
      Generate
    </button>
    <img :src="imagePath" :alt="altText" />
    <label class="input-label" for="#date-input"
      >Input your guess below for what year the above painting was made.</label
    >
    <form action="" v-on:submit.prevent="submit">
      <input id="date-input" class="date-input" type="text" v-model="paintingDateGuess" placeholder="2000" @click="resetValidations" />
      <button type="button" class="guess-button" id="guess-button" @click="validate">Guess</button>
    </form>
    
    <p class="exception-message"> {{ exception }} </p>
  
    <footer>Powered by the Art Institute of Chicago API</footer>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      exception: "",
      paintingDate: 0,
      artistName: "",
      paintingName: "",
      // setting a random id to fetch in a valid range 
      randomId: Math.floor(Math.random() * 90000) + 12000,
      paintingDateGuess: null,
      imagePath: "",
      altText: ""
    };
  },
  methods: {
    validate() {
      // validations 
      if (!Number.isInteger(+this.paintingDateGuess) && this.paintingDateGuess) {
        this.exception = 'Please input a valid date, for example, 1976.';
        document.getElementById("date-input").classList.add("invalid-input");
      }
      if (!this.paintingDateGuess) {
        this.exception = 'Woops, you forgot to fill out the date form.';
        document.getElementById("date-input").classList.add("incomplete");
      }
    },
    resetValidations() {
      this.exception = "";
      document.getElementById("date-input").classList.remove('invalid-input', "incomplete");
    },
    async submit() {
      if (this.exception === "") {
      fetch(`https://api.artic.edu/api/v1/artworks/${this.randomId}?fields=title,artist_title,date_end,alt_text,image_id`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((response) => {
          console.log(response);

          this.imagePath = response.config.iiif_url + '/' + response.data.image_id + '/full/843,/0/default.jpg';
          // this.responses.push({
          //   prompt: "Prompt: ".bold() + this.input_prompt,
          //   response: "Response: ".bold() + response.choices[0].text,
          //   time: new Date(),
          // });
        });
    }}
  },
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
  width: 6rem;
  margin: auto;
  padding: auto;
  height: 2rem;
  font-size: 1rem;
}

img {

}

.input-label {
  margin-top: 3rem;
}
.date-input {
  margin: auto;
  margin-top: 1rem;
  width: 10rem;
  border: none;
  height: 1.5rem;
  box-shadow: 2.5px 5px #888888;
}

.guess-button {
  margin: auto;
  margin-top: 1rem;
  width: 5rem;
  height: 2rem;
  font-size: 1rem;
  padding: auto;
}

.exception-message {
  font-weight: 700;
}
.incomplete {
   border: 3px solid rgb(226, 98, 98);
}

.invalid-input {
  border: 3px solid rgb(241, 156, 65);
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 3rem;
}
</style>
