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
        document.getElementById('exception-message').style.display = "block";
      }
      if (!this.paintingDateGuess) {
        this.exception = "Woops, you forgot to fill out the date form.";
        document.getElementById("date-input").classList.add("incomplete");
        document.getElementById('exception-message').style.display = "block";
      }
    },
    resetValidations() {
      this.exception = "";
      document
        .getElementById("date-input")
        .classList.remove("invalid-input", "incomplete");
    },
    // responses for valid date guesses, return only if exception data element is empty string 
    validInputResponse() {
      if (this.exception === "") {
        // once they submit a valid response there's no point in showing the hint button
        document.getElementById('need-a-hint').style.display = "none";
        document.getElementById('guess-response').style.display = "block";
        if (this.paintingDateGuess == this.paintingDate) {
          this.guessResponse = "Wow, that's exactly right!";
          document.getElementById("date-input").classList.add("correct");
        } else if (Math.abs(this.paintingDateGuess - this.paintingDate) <= 10) {
          this.guessResponse = `You were very close, good try. The real date is ${this.paintingDate}.`;
          document.getElementById("date-input").classList.add("close");
        } else if (Math.abs(this.paintingDateGuess - this.paintingDate) <= 25) {
          this.guessResponse = `You were fairly close, good try. The real date is ${this.paintingDate}.`;
          document.getElementById("date-input").classList.add("close");
        } else if (Math.abs(this.paintingDateGuess - this.paintingDate) <= 50) {
          this.guessResponse = `You were a ways off. The real date is ${this.paintingDate}.`;
          document.getElementById("date-input").classList.add("sort-of-close");
        } else {
          this.guessResponse = `Not your best guess. The real date is ${this.paintingDate}.`;
          document.getElementById("date-input").classList.add("quite-far");
        }
      }
    },
    showHint() {
      document.getElementById('hint').style.display = "block";
      document.getElementById('need-a-hint').style.display = "none";

    }
  },
};
