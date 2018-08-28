require('dotenv').config();
const express = require('express');
const massive = require('massive');
const axios = require('axios');
const bodyParser = require('body-parser');
const session = require('express-session');
const users_controller = require('./controllers/users_controller');
const products_controller = require('./controllers/products_controller');

const app = express();
app.use(bodyParser.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

//--- users endpoints --//
app.get('/api/get_users', users_controller.read)


//-- products endpoints --//
app.get('/api/get_all_products', products_controller.read)



massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
})

const PORT = process.env.SERVER_PORT || 3010
app.listen(PORT, () => { console.log(`Listening on Port ${PORT}`) });



