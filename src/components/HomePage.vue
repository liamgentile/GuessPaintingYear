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
      @click="submit"
    >
      Generate
    </button>
    <img :src="imagePath" :alt="altText" v-if="imageShown"/>
    <label class="input-label" for="#date-input" v-if="imageShown"
      >Input your guess below for what year the above painting was made.</label
    >

    <input
      id="date-input"
      class="date-input"
      type="text"
      v-model="paintingDateGuess"
      placeholder="2000"
      @click="resetValidations"
      v-if="imageShown"
    />
    <button
      type="submit"
      class="guess-button"
      id="guess-button"
      @click="validate"
      v-if="imageShown"
    >
      Guess
    </button>

    <p class="exception-message">{{ exception }}</p>

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
      randomId: Math.floor(Math.random() * 90000) * 1000 + 12000,
      paintingDateGuess: null,
      imagePath: "",
      altText: "",
    };
  },
  computed: {
    imageShown() {
      return this.imagePath !== "";
    }
  },
  methods: {
    validate() {
      // validations
      if (
        !Number.isInteger(+this.paintingDateGuess) &&
        this.paintingDateGuess
      ) {
        this.exception = "Please input a valid date, for example, 1976.";
        document.getElementById("date-input").classList.add("invalid-input");
      }
      if (!this.paintingDateGuess) {
        this.exception = "Woops, you forgot to fill out the date form.";
        document.getElementById("date-input").classList.add("incomplete");
      }
    },
    resetValidations() {
      this.exception = "";
      document
        .getElementById("date-input")
        .classList.remove("invalid-input", "incomplete");
    },
    async submit() {
      if (this.exception === "") {
        fetch(
          "https://api.artic.edu/api/v1/artworks/12000?fields=title,artist_title,date_end,alt_text,image_id",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((response) => {
            // retrieving the necessary data from the api response
            this.imagePath =
              response.config.iiif_url +
              "/" +
              response.data.image_id +
              "/full/843,/0/default.jpg";

            this.artistName = response.data.artist_title;

            this.paintingName = response.data.title;

            this.paintingDate = response.data.date_end;

            this.altText = response.data.alt_text;
          });
      }
    },
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
  margin: auto;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: solid 2px;
  padding-bottom: 2rem;
  width: 20rem;
  color: #2e2e2e;
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
  margin: auto;
  margin-top: 2rem;
  height: 20rem;
  width: 20rem;
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
  padding-bottom: 2rem;
}
.incomplete {
  border: 3px solid rgb(226, 98, 98);
}

.invalid-input {
  border: 3px solid rgb(241, 156, 65);
}

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2rem;

}
</style>
