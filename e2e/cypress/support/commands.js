Cypress.Commands.add('searchRecipe', (searchTerm, expect, customSelector) => {
  cy.visit('http://localhost:3000');
  cy.get('input').clear();
  cy.get('input').type(searchTerm);
  cy.get(customSelector ?? ':nth-child(1) > .recipe-content > h1').contains(expect);
});

Cypress.Commands.add('createRecipe', () => {
  cy.visit('http://localhost:3000')
  cy.get('.button--line').click();
  cy.get(':nth-child(3) > .input > input').clear();
  cy.get(':nth-child(3) > .input > input').type('Test Recipe');
  cy.get(':nth-child(4) > .input > input').clear();
  cy.get(':nth-child(4) > .input > input').type('45');
  cy.get(':nth-child(7) > :nth-child(1) > .input > input').clear();
  cy.get(':nth-child(7) > :nth-child(1) > .input > input').type('Apples');
  cy.get(':nth-child(2) > .input > input').clear();
  cy.get(':nth-child(2) > .input > input').type('100g');
  cy.get(':nth-child(7) > .create-recipe_container__inner__button-container > .button--fill').click();
  cy.get(':nth-child(8) > :nth-child(1) > .input > input').clear();
  cy.get(':nth-child(8) > :nth-child(1) > .input > input').type('Sugar');
  cy.get(':nth-child(8) > :nth-child(2) > .input > input').clear();
  cy.get(':nth-child(8) > :nth-child(2) > .input > input').type('500g');
  cy.get(':nth-child(11) > .create-recipe_container__inner__input > .input > input').clear();
  cy.get(':nth-child(11) > .create-recipe_container__inner__input > .input > input').type('Add apples to tin');
  cy.get(':nth-child(11) > .create-recipe_container__inner__button-container > .button--fill').click();
  cy.get(':nth-child(12) > .create-recipe_container__inner__input > .input > input').clear();
  cy.get(':nth-child(12) > .create-recipe_container__inner__input > .input > input').type('Add Sugar');
  cy.get(':nth-child(12) > .create-recipe_container__inner__button-container > .button--fill').click();
  cy.get(':nth-child(13) > .create-recipe_container__inner__input > .input > input').clear();
  cy.get(':nth-child(13) > .create-recipe_container__inner__input > .input > input').type('Enjoy');
  cy.get(':nth-child(14) > .button--fill').click();
});

