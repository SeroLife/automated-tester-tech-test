const axios = require('axios');
const { readFileSync } = require('fs');
const { resolve } = require('path');

module.exports = (on) => {
  on('task', {
    cleanUp() {
      return axios.get('http://localhost:3080/recipes?search=Test Recipe').then(response => {
        const body = JSON.stringify(response.data);

        if (body.length === 0 || !response.data[0]?.id) {
          return null;
        }

        return axios.delete(`http://localhost:3080/recipes/${JSON.parse(body)[0].id}`).then(() => {
          return null;
        });
      });
    },
    seed() {
      const seedData = readFileSync(resolve('cypress', 'fixtures', 'recipe.json'), 'utf-8');

      return axios.post('http://localhost:3080/recipes', JSON.parse(seedData)).then(() => {
        return null;
      });
    }
  });
};