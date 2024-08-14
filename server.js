const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
require('dotenv').config()
require('./config/database')
// require comes from node_modules folder

const app = express();


//Middleware
app.use(logger('dev'));
app.use(express.json()); // allows us to acess the body that is brought in on the request. // acess from a body of data on an incomeing express
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico'))) // this directory / build / favicon.ico. this is our icon on the tab on the browser.
app.use(express.static(path.join(__dirname, 'build')))// this is for our build version. Inside the build folder look for static
app.use(require('./config/checkToken'))

// Routes
app.use('/api/users', require('./routes/api/users')) //this is the prefix we use for routes

// Catch all route
app.get('/*', function(req, rest) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
}) // this will take any endpoint, then hit this get request. // this will have react to show the proper endpoint. for people who access the site. 


const port = process.env.PORT || 3001; // when we deploy this we dont know the port number they use, that is why we use a PORT environment variable.

app.listen(port, function() { // this will make our app run
    console.log(`Express app is running on port ${port}`)
})