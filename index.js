const express = require('express');
// lets server understand the data you POST to it.
const bodyParser = require('body-parser');
const apiRoute = require('./routes/api')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true 
}))

app.use('/api', apiRoute);

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

// const PORT = process.env.PORT || 8000;
const PORT = 8000;
app.listen(PORT);