require('dotenv').config();
const express = require('express');
const massive = require('massive');
const axios = require('axios');
const bodyParser = require('body-parser');
const session = require('express-session');
const users_controller = require('./controllers/users_controller');
const products_controller = require('./controllers/products_controller');
const cart_controller = require('./controllers/cart_controller');

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
app.get(`/api/get_all_displays`, products_controller.readDisplays)
app.get(`/api/get_all_parts`, products_controller.readParts)
app.get(`/api/get_all_audio`, products_controller.readAudio)
app.get(`/api/get_all_peripherals`, products_controller.readPeripherals)

//--cart endpoints --//
app.get(`/api/get_cart/`, cart_controller.getCartItems)
app.post(`/api/add_to_cart`, cart_controller.addToCart)
app.delete(`/api/delete_item`, cart_controller.deleteItem)




massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
})

const PORT = process.env.SERVER_PORT || 3010
app.listen(PORT, () => { console.log(`Listening on Port ${PORT}`) });



