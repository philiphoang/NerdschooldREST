const express = require('express');
const app = express();


// Simple GET-service that response with Hello World
app.get('/', (request, response) => response.send('Hello World'))


/* This is a function instead of a lambda/arrow (same as above)
app.get('/', function (request, response) {
  response.send('Hello World');
});
*/

// Define a port for localhost
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
