describe('Recipe book API', () => {
  after(() => {
    cy.task('cleanUp');
  });

  describe('When a POST request is made to the /recipes endpoint', () => {
    it('should return a 200 response if successful', async () => {
      const response = await cy.request('POST', 'http://localhost:3080/recipes', {
        "cooking_time_minutes": "10",
        "name": "Test Recipe",
        "cooking_steps": [{ "description": "Step One" }],
        "ingredients": [{
          "name": "Test Apples",
          "measurement": "500g"
        }]
      });
      expect(response.status).to.eql(200);
    });
  });

  describe('When a GET request is made to the /recipes endpoint', () => {
    it('should return a list of recipes', async () => {
      const response = await cy.request('http://localhost:3080/recipes');
      expect(response.body.length).to.be.least(1);
      expect(response.status).to.eql(200);
    });
  });

  describe('When a GET request is made to the /recipes endpoint with a search query by recipe name', () => {
    it('should return a list of recipes', async () => {
      const response = await cy.request('http://localhost:3080/recipes?search=Test Recipe');
      expect(response.body.length).to.eql(1);
      expect(response.status).to.eql(200);
    });
  });

  describe('When a GET request is made to the /recipes endpoint with a search query by recipe ingredient', () => {
    it('should return a list of recipes', async () => {
      const response = await cy.request('http://localhost:3080/recipes?search=Test Apples');
      expect(response.body.length).to.eql(1);
      expect(response.status).to.eql(200);
    });
  });
});