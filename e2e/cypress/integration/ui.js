describe('Saving recipes', () => {
  beforeEach(() => {
    cy.intercept('POST', 'http://localhost:3080/recipes', (req) => {
      req.reply({});
    });
    cy.intercept('GET', 'http://localhost:3080/recipes', { fixture: 'recipes' }).as('recipes')
  });

  describe('When I save a recipe', () => {
    it('should show me the saved recipe on the home page', () => {
      cy.createRecipe();
      cy.get(':nth-child(1) > .recipe-content > h1').contains('Test Recipe');
      cy.wait('@recipes').its('response.body').should('have.length', 1);
    });
  });
});

describe('Viewing saved recipes', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3080/recipes/**', { fixture: 'recipe' }).as('recipe')
  });

  describe('When I view a saved recipe', () => {
    it('should show me the ingredients and cooking methods for the given recipe', function () {
      cy.visit('http://localhost:3000');
      cy.get(':nth-child(1) > .recipe-content > .recipe-button_container > .button--fill').click();
      cy.get('.recipe-content > h1').contains('Test Recipe');
      cy.get('.recipe-ingredients > :nth-child(2)').contains('Apples (100g)')
      cy.get('.recipe-ingredients > :nth-child(3)').contains('Sugar (500g)')
      cy.get('.recipe-content > :nth-child(5)').contains('Add apples to tin');
      cy.get('.recipe-content > :nth-child(6)').contains('Add Sugar');
      cy.get('.recipe-content > :nth-child(7)').contains('Enjoy');
      cy.wait('@recipe').its('response.body').should('have.property', 'name');
    });
  });
});

describe('Searching saved recipes', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3080/recipes', { fixture: 'recipes' }).as('recipes')
  });

  describe('When I search for a recipe by name', () => {
    it('should return me the recipe for my given search query', function () {
      cy.searchRecipe('Test', 'Test Recipe');
      cy.wait('@recipes').its('response.body').should('have.length', 1);
    });
  });

  describe('When I search for a recipe by ingredient', () => {
    it('should return me the recipe for my given search query', function () {
      cy.searchRecipe('Sugar', 'Test Recipe');
      cy.wait('@recipes').its('response.body').should('have.length', 1);
    });
  });

  describe('When I search for a recipe that does not exist', () => {
    it('should show me the no recipes found message', function () {
      cy.searchRecipe(
        'This does not exist',
        "It looks like you don't have any recipes",
        ".home-inner-container > div > h2"
      );
    });
  });
});