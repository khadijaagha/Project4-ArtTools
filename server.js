const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
// Always require and configure near the top 
require('dotenv').config();
require('./config/database');

const app = express();

//log every request that hits our server
app.use(logger('dev'));
app.use(express.json());

//to use the faviconicons? i guess 
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
//our static files 
app.use(express.static(path.join(__dirname, 'build')));

//!middleware to check and verify a jwt and assign the user object from the jwt to req.user
app.use(require('./config/check-token'));



const port = process.env.PORT || 3001;

//put API routes before the catch all route:
app.use('/api/users', require('./routes/api/users'));

//?! wtf this do ?
app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});


app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });