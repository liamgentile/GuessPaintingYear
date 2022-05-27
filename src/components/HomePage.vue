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
    <img :src="imagePath" :alt="altText" v-if="imageShown" />
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
      @click="validate(), validInputResponse()"
      v-if="imageShown"
    >
      Guess
    </button>

    <p class="exception-message">{{ exception }}</p>

    <p class="guess-response">{{ guessResponse }}</p>

    <button @click="refreshPage" v-if="imageShown" class="refresh-button">
      Play Again
    </button>
    <footer>Powered by the Art Institute of Chicago API</footer>
  </div>
</template>

<script>
import { idMixin } from "@/mixins/ids";
import { validationsMixin } from "@/mixins/validations";

export default {
  name: "HomePage",
  data() {
    return {
      exception: "",
      paintingDate: 0,
      artistName: "",
      paintingName: "",
      paintingDateGuess: null,
      imagePath: "",
      altText: "",
      guessResponse: "",
    };
  },
  mixins: [idMixin, validationsMixin],
  computed: {
    imageShown() {
      return this.imagePath !== "";
    },
    randomId() {
      return this.getRandomId(this.idArray);
    },
  },
  methods: {
    refreshPage() {
      window.location.reload();
    },
    async submit() {
      if (this.exception === "") {
        fetch(
          `https://api.artic.edu/api/v1/artworks/${this.randomId}?fields=title,artist_title,date_end,alt_text,image_id`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((response) => {
            // parsing the necessary data from the api response and assigning to component data elements
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
  border-bottom: solid 2px #ffff;
  padding-bottom: 2rem;
  width: 20rem;
  color: #332d2d !important;
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

.refresh-button {
  margin: auto;
  width: 6rem;
  height: 2rem;
  font-size: 1rem;
  padding: auto;
  margin-bottom: 1rem;
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
  margin: auto;
  border-top: 2px solid #ffff;
  padding-top: 1rem;
  width: 30rem;
  height: 2rem;
  font-weight: 500;
}
</style>
