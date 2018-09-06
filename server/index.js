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

const {
    REACT_APP_CLIENT_ID, REACT_APP_DOMAIN, CLIENT_SECRET, SESSION_SECRET
} = process.env

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
})

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

//-------------- Auth0 -----------------//

app.get('/auth/callback', async (req, res) => {
    const payload = {
        client_id: REACT_APP_CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: `http://${req.headers.host}/auth/callback`
    }

    //trading code for token
    let resWithToken = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload);
    // use token to get user data
    let resWithUserData = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${resWithToken.data.access_token}`);

    let {
        email,
        name,
        picture,
        sub
    } = resWithUserData.data;

    let db = req.app.get('db')
    let foundUser = await db.find_user([name, email, picture, sub])
    if (foundUser[0]) {
        req.session.user = foundUser[0];
        //----- read through this!!
        db.find_user_cart(req.session.user.user_id).then(userCart => {
            if( !userCart[0] ){ 
                db.create_cart(req.session.user.user_id).then(createdCart => {
                    req.session.user.cart_id = createdCart[0].cart_id
                })
            } else {
                req.session.user.cart_id = userCart[0].cart_id
            }
            //------------------------
        })
        res.redirect(`/#/`)
    } else {
        let createdUser = await db.create_user([name, email, picture, sub])
        req.session.user = createdUser[0];
        res.redirect('/#/');
    }
})

app.get(`/api/user_data`, (req, res) => {
    if (req.session.user) {
        res.status(200).send(req.session.user);
    } else {
        res.status(401).send('Nope nope nope')
    }
})

app.get(`/auth/logout`, (req, res) => {
    req.session.destroy();
    res.redirect(`http://localhost:3000`)
})


//--- users endpoints --//



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





const PORT = process.env.SERVER_PORT || 3010
app.listen(PORT, () => { console.log(`Listening on Port ${PORT}`) });



