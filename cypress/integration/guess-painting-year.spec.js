describe(`guess painting year tests`, () => {

  it(`verify page load`, () => {
    cy.visit("https://guess-painting-year-lg.netlify.app/");
  });
  
  it ('verify initial page elements are present', () => {
    cy.get('h1').should('be.visible');
    cy.get('h3').should('be.visible');
    cy.get('.button-label').should('be.visible');
    cy.get('.get-painting-button').should('be.visible');
    cy.get('footer').should('be.visible');
  });

  it ('test the generate button works as expected and we see the elements we expect', () => {
    cy.get('.get-painting-button').click();
    // sometimes takes a second to fetch the image
    cy.wait(1000);
    cy.get('img').should('be.visible');
    cy.get('.input-label').should('be.visible');
    cy.get('input').should('be.visible');
    cy.get('.guess-button').should('be.visible');
    cy.get('.need-a-hint-button').should('be.visible');
    cy.get('.refresh-button').should('be.visible');

    // we should not see the hint, the validation messages, or the guess response
    cy.get('#hint').should('not.be.visible');
    cy.get('.exception-message').should('not.be.visible');
    cy.get('.guess-response').should('not.be.visible');

  });
  
  // verify image includes alt_text

  // test validations

  // test hint

  // test valid guess
});
