const express = require("express");
const morgan = require("morgan");
const methodOverride = require('method-override');
const port = 3000;
require("./config/database");

const indexRouter = require('./routes/index');
const valuablesRouter = require('./routes/valuables');
const detailsRouter = require('./routes/details');

const app = express();



app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({
    extended: false
}));
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/valuables', valuablesRouter);
app.use('/', detailsRouter);

app.listen(port, function () {
    console.log(`Express is listening on port:${port}`);
});