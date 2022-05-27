<template>
  <div class="home">
    <h1>Guess the Painting Year!</h1>
    <h3>Test your intuition for painting dating</h3>
    <label for="#random-painting-button" class="button-label" v-if="!imageShown"
      >Click generate to fetch a random painting</label
    >
    <button
      type="button"
      class="get-painting-button"
      id="random-painting-button"
      @click="submit"
      v-if="!imageShown"
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
      @click="validate(), validInputResponse()"
      v-if="imageShown"
    >
      Guess
    </button>
    <button
      class="need-a-hint-button"
      id="need-a-hint"
      v-if="imageShown"
      @click="showHint"
    >
      Need a hint?
    </button>

    <p aria-live="polite" style="display: none" id="hint">
      the name of this painting is {{ paintingName }}
    </p>

    <p aria-live="polite" style="display: none" class="guess-response" id="guess-response">{{ guessResponse }}</p>

    <p role="alert" style="display: none" class="exception-message" id="exception-message">{{ exception }}</p>

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
          `https://api.artic.edu/api/v1/artworks/${this.randomId}?fields=thumbnail,title,date_end,image_id`,
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

            this.altText = response.data.thumbnail.alt_text;
            console.log(this.altText);
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
  margin-bottom: 4rem;
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

.need-a-hint-button {
  margin: auto;
  width: 8rem;
  height: 3rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
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
  padding-bottom: 1rem;
}

.guess-response {
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
  padding-bottom: 1rem;
  max-width: 10rem;
}

.incomplete,
.invalid-input {
  border: 3px solid rgb(226, 98, 98);
}

.correct {
  border: 3px solid rgb(64, 132, 47);
}

.close {
  border: 3px solid rgb(170, 202, 63);
}

.sort-of-close,
.quite-far {
  border: 3px solid rgb(241, 156, 65);
}

footer {
  margin: auto;
  padding: auto;
  border-top: 2px solid #ffff;
  padding-top: 1rem;
  width: 90%;
  height: 2rem;
  font-weight: 500;
}
</style>
