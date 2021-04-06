const axios = require('axios');

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
    }
  });
};