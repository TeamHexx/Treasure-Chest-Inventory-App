//Require Modules
const express = require('express');
const morgan = require('morgan');
const port = 3000;

//Set up express app
const app = express();

//Connect to DB

//configure the app with app.set()
app.set('View engine', 'ejs');

//Mount middleware with app.use()
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

//Mount routes with app.use()

//Tell app to listen
app.listen(port, function(){
    console.log(`Express is listening on port:${port}`)
});