describe('Recipe book API', () => {
  describe('When a POST request is made to the /recipes endpoint', () => {
    it('should add a recipe', async () => {
      cy.request('POST', 'http://localhost:3080/recipes', {
        "cooking_time_minutes": "10",
        "name": "Apple Crumble",
        "cooking_steps": [{ "description": "Step One" }],
        "ingredients": [{
          "name": "Apples",
          "measurement": "500g"
        }]
      });
      const response = await cy.request('http://localhost:3080/recipes');
      expect(response.status).to.eql(200);
    });
  });
});

describe('When a GET request is made to the /recipes endpoint', () => {
  it('should return a list of recipes', async () => {
    const response = await cy.request('http://localhost:3080/recipes');
    expect(response.status).to.eql(200);
  })
})