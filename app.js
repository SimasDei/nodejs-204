const express = require('express');

const app = express();

/**
 * @routes
 */
app.get('/', (req, res) => {
  res.send('Ahoy Sailor o/');
})

 /**
  * @server
  */
 app.listen(5000);