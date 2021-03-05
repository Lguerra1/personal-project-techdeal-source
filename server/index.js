require(`dotenv`).config({ path: '../.env' });
const express = require('express'),
    massive = require('massive'),
    axios = require('axios'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    cors = require(`cors`);

const products_controller = require('./controllers/products_controller');
const cart_controller = require('./controllers/cart_controller');
const stripe_controller = require('./controllers/stripe_controller');


const app = express();
app.use(express.static(`${__dirname}/../build`));
app.use(bodyParser.json());
app.use(cors());

const {
    SESSION_SECRET, CONNECTION_STRING
} = process.env;

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
}).catch(error => {
    console.log(error)
});

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

//-------------- Auth0 -----------------//

app.post('/login', async (req, res) => {
    let { email, givenName } = req.body.userObj;


    try {
        const db = req.app.get('db');
        let foundUser = await db.query(`SELECT * FROM users WHERE username = '${givenName}'`);
        if (foundUser[0]) {
            console.log('user exists')
            req.session.user = foundUser[0];
            res.status(200).send({ user: foundUser[0] })

        } else {
            await db.query(`INSERT INTO users (username, email) VALUES ('${givenName}', '${email}')`);
        }
    }
    catch (error) {
        console.log(error)
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
    res.redirect(process.env.REDIRECTURL);
})


//--- stripe endpoint ---//
app.post(`/api/payment`, stripe_controller.handlePayment)


//-- products endpoints --//
app.get('/api/get_all_products', products_controller.read);
app.get(`/api/get_all_displays`, products_controller.readDisplays);
app.get(`/api/get_all_parts`, products_controller.readParts);
app.get(`/api/get_all_audio`, products_controller.readAudio);
app.get(`/api/get_all_peripherals`, products_controller.readPeripherals);

//--cart endpoints --//
app.post(`/api/add_to_cart/:productId/:user_id`, cart_controller.addToCart);
app.delete(`/api/remove_from_cart/:cartId/:user_id`, cart_controller.removeFromCart);
app.put(`/api/increase_quantity/:cartId/:quantity/:user_id`, cart_controller.increaseQuantity);
app.delete(`/api/decrease_quantity/:cartId/:quantity/:user_id`, cart_controller.decreaseQuantity);
app.get(`/api/get_total/:user_id`, cart_controller.getTotal);
app.get(`/api/get_cart/:user_id`, cart_controller.getCart);
app.delete(`/api/empty_cart/:user_id`, cart_controller.emptyCart);

// --- build ----//





const PORT = process.env.SERVER_PORT
app.listen(PORT, () => { console.log(`Listening on Port ${PORT}`) });