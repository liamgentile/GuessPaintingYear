describe(`guess painting year tests`, () => {
  it(`verify page load`, () => {
    cy.visit("https://guess-painting-year-lg.netlify.app/");
  });

  it("verify initial page elements are present", () => {
    cy.get("h1").should("be.visible");
    cy.get("h3").should("be.visible");
    cy.get(".button-label").should("be.visible");
    cy.get(".get-painting-button").should("be.visible");
    cy.get("footer").should("be.visible");
  });

  it("test the generate button works as expected and we see the elements we expect", () => {
    cy.get(".get-painting-button").click();
    // sometimes takes a second to fetch the image
    cy.wait(1000);
    cy.get("img").should("be.visible");
    cy.get(".input-label").should("be.visible");
    cy.get("input").should("be.visible");
    cy.get(".guess-button").should("be.visible");
    cy.get(".need-a-hint-button").should("be.visible");
    cy.get(".refresh-button").should("be.visible");

    // we should not see the hint, the validation messages, or the guess response
    cy.get("#hint").should("not.be.visible");
    cy.get(".exception-message").should("not.be.visible");
    cy.get(".guess-response").should("not.be.visible");
  });

  it("verify image includes alt_text and the alt_text is not empty", () => {
    cy.get("img")
      .should("have.attr", "alt")
      .then((altText) => {
        expect(altText.length).greaterThan(0);
      });
  });

  it("test invalid inputs and response", () => {
    // empty guess validation
    cy.get(".date-input").focus().blur();
    cy.get(".guess-button").click();
    cy.get(".incomplete").should("be.visible");
    cy.get(".exception-message").should("be.visible");

    // invalid datatype (not int)
    cy.get(".date-input").focus().type("hello");
    cy.get(".guess-button").click();
    cy.get(".invalid-input").should("be.visible");
    cy.get(".exception-message").should("be.visible");
  });

  it("test hint button", () => {
    cy.get(".need-a-hint-button").click();
    cy.get("#hint").should("be.visible");
  });

  it("test valid guess", () => {
    cy.get(".date-input").click().clear().type("1999").blur();
    cy.get(".guess-button").click();

    // validation classes should not exist
    cy.get(".incomplete").should("not.exist");
    cy.get(".invalid-input").should("not.exist");

    cy.get(".guess-response").should("be.visible");
  });

  it("test play again button and verify reload", () => {
    cy.get(".refresh-button").should("be.visible").click();

    cy.get("h1").should("be.visible");
    cy.get("h3").should("be.visible");
    cy.get(".button-label").should("be.visible");
    cy.get(".get-painting-button").should("be.visible");
    cy.get("footer").should("be.visible");

    cy.get("img").should("not.exist");
    cy.get(".input-label").should("not.exist");
    cy.get("input").should("not.exist");
    cy.get(".guess-button").should("not.exist");
    cy.get(".need-a-hint-button").should("not.exist");
    cy.get(".refresh-button").should("not.exist");
  });
});
