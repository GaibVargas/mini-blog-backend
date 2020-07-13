const express = require('express');
const routes = require('./routes');

require('./database/models');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('Server running on port http://localhost:3333');
});