const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const tvShowRouter = require('./tvShow/tvShowRouter');

const app = express();
const port = 3000; // Define a port for localhost

app.use(morgan('dev')); //Dev is a pre-set log config, gives short and concise log statements
app.use(bodyParser.json());
app.use('/tvshow', tvShowRouter);

// Simple GET-service that response with Hello World
app.get('/', (request, response) => response.send('Hello World'))

/* This is a function instead of a lambda/arrow (same as above)
app.get('/', function (request, response) {
  response.send('Hello World');
});
*/

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
