const express = require('express');

const app = express();

/**
 * @middlewares
 */

/**
 * @routes
 */
app.get('/', (req, res) => {
  res.send('Ahoy Sailor o/');
})
app.get('/posts', (req, res) => {
  res.send('Posts Route !');
})

 /**
  * @server
  */
 app.listen(5000);