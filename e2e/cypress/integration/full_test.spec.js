describe('Saving recipes', () => {
  describe('When I save a recipe', () => {
    it('should show me the saved recipe on the home page', () => {
      cy.visit('http://localhost:3000')
      cy.get('.button--line').click();
      cy.get(':nth-child(3) > .input > input').clear();
      cy.get(':nth-child(3) > .input > input').type('Apple Crumble');
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
      cy.get(':nth-child(1) > .recipe-content > h1').contains('Apple Crumble')
    });
  });
});

describe('Viewing saved recipes', () => {
  describe('When I view a saved recipe', () => {
    it('should show me the ingredients and cooking methods for the given recipe', function () {
      cy.visit('http://localhost:3000');
      cy.get(':nth-child(1) > .recipe-content > .recipe-button_container > .button--fill').click();
      cy.get('.recipe-content > h1').contains('Apple Crumble');
      cy.get('.recipe-ingredients > :nth-child(2)').contains('Apples (100g)')
      cy.get('.recipe-ingredients > :nth-child(3)').contains('Sugar (500g)')
      cy.get('.recipe-content > :nth-child(5)').contains('Add apples to tin');
      cy.get('.recipe-content > :nth-child(6)').contains('Add Sugar');
      cy.get('.recipe-content > :nth-child(7)').contains('Enjoy');
    });
  });
});

describe('Searching saved recipes', () => {
  describe('When I search for a recipe by name', () => {
    it('should return me the recipe for my given search query', function () {
      cy.visit('http://localhost:3000');
      cy.get('input').clear();
      cy.get('input').type('Crumble');
      cy.get(':nth-child(1) > .recipe-content > h1').contains('Apple Crumble')
    });
  });

  describe('When I search for a recipe by ingredient', () => {
    it('should return me the recipe for my given search query', function () {
      cy.visit('http://localhost:3000');
      cy.get('input').clear();
      cy.get('input').type('Sugar');
      cy.get(':nth-child(1) > .recipe-content > h1').contains('Apple Crumble')
    });
  });

  describe('When I search for a recipe that does not exist', () => {
    it('should show me the no recipes found message', function () {
      cy.visit('http://localhost:3000');
      cy.get('input').clear();
      cy.get('input').type('This does not exist');
      cy.get('.home-inner-container > div > h2').contains("It looks like you don't have any recipes");
    });
  });
});