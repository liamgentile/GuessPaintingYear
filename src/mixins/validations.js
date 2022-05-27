export const validationsMixin = {
  methods: {
    validate() {
      // current date guess validations
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
    guessResponse() {
        if (this.paintingDateGuess === this.paintingDate) {
            this.guessResponse = "Wow, that's exactly right!"
        }
        if (Math.abs(this.paintingDateGuess, this.paintingDate) <= 10) {
            this.guessResponse = `You were very close, good try. The real date is ${this.paintingDate}.`
        }
        if (Math.abs(this.paintingDateGuess, this.paintingDate) <= 25) {
            this.guessResponse = `You were fairly close, good try. The real date is ${this.paintingDate}.`
        }
        if (Math.abs(this.paintingDateGuess, this.paintingDate) <= 50) {
            this.guessResponse = `You were a ways off. The real date is ${this.paintingDate}.`
        }

        if (Math.abs(this.paintingDateGuess, this.paintingDate) > 50) {
            this.guessResponse = `Not your best guess. The real date is ${this.paintingDate}.`
        }
    }
  },
};
