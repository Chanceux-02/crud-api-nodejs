const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const jwt = require('jsonwebtoken');


// require('dotenv').config();
// console.log('This is ', process.env.DB_HOST);


//middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//routes
const retrieveRoute = require('./src/routes/routes');
app.use('/api', retrieveRoute);

//server
const port = 5000;
app.listen(port, ()=>{
    console.log('This is running in port:', port);
});