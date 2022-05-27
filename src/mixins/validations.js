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
  },
};
