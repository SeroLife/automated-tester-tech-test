Cypress.Commands.add('searchRecipe', (searchTerm, expect, customSelector) => {
  cy.visit('http://localhost:3000');
  cy.get('input').clear();
  cy.get('input').type(searchTerm);
  cy.get(customSelector ?? ':nth-child(1) > .recipe-content > h1').contains(expect);
})
