const express = require('express');

const handlebars = require('express-handlebars');
const path = require('path');
const route = require('./routes')
const app = express();
// const morgan = require('morgan');
// app.use(morgan('combined'));
app.engine('hbs', handlebars({
    extname: '.hbs',
    helpers:{
        sum: (a, b)=> a+b,
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));
app.use(express.static(path.join(__dirname, 'public')));
// middleware
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
// db connect
const mongoose = require('mongoose');
const db = require('./app/config/db');
db.connect();

const port = 3000;

// Route init
route(app);


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})