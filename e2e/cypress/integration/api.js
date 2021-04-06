describe('Recipe book API', () => {
  afterEach(() => {
    cy.task('cleanUp');
  });

  describe('When a POST request is made to the /recipes endpoint', () => {
    it('should add a recipe', async () => {
      const response = await cy.request('POST', 'http://localhost:3080/recipes', {
        "cooking_time_minutes": "10",
        "name": "Test Recipe",
        "cooking_steps": [{ "description": "Step One" }],
        "ingredients": [{
          "name": "Apples",
          "measurement": "500g"
        }]
      });
      expect(response.status).to.eql(200);
    });
  });

  describe('When a GET request is made to the /recipes endpoint', () => {
    it('should return a list of recipes', async () => {
      const response = await cy.request('http://localhost:3080/recipes');
      expect(response.status).to.eql(200);
    });
  });
});