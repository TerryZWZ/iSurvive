const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(3000, 'localhost', () => {
  console.log("Server is listening on http://localhost:3000");
});