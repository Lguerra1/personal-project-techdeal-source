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
    REACT_APP_CLIENT_ID, REACT_APP_DOMAIN, CLIENT_SECRET, SESSION_SECRET, NODE_ENV, CONNECTION_STRING
} = process.env;

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
}).catch(error => {
    console.log(error)
});

app.use(session({
    secret: SESSION_SECRET || "gwrggowarignwrg",
    resave: false,
    saveUninitialized: true
}));

//-------------- Auth0 -----------------//

app.post('/login', async (req, res) => {
    console.log('test')
    

    // try {
      

    //     let db = req.app.get('db')
    //     // let foundUser = await db.query(`SELECT * FROM user where `)find_user([sub])
    //     if (foundUser[0]) {
    //         req.session.user = foundUser[0];

    //     } else {
    //         let createdUser = await db.create_user([name, email, picture, sub])
    //         req.session.user = createdUser[0];
    //     }
    //     await db.find_user_cart(req.session.user.user_id).then(user_cart => {
    //         if (!user_cart[0]) {
    //             db.new_order(req.session.user.user_id).then(new_order => {
    //                 req.session.user.order = new_order[0].id
    //                 res.redirect('/#/cart');

    //                 console.log(req.session.user)
    //             })

    //         } else {
    //             req.session.user.order = user_cart[0].id
    //             res.redirect('/#/cart');
    //             console.log(req.session.user)
    //         }
    //     })

    // }
    // catch (error) {
    //     console.log("error")
    // }

})

function envCheck(req, res, next) {
    // if (NODE_ENV === 'dev') {
    //     req.app.get('db').get_user_by_id([226]).then(userWithId => {
    //         req.session.user = userWithId[0]
    //         next();
    //     })

    // } else {
    //     next()
    // }
}

app.get(`/api/user_data`, envCheck, (req, res) => {
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
app.get(`/api/get_all_displays`, products_controller.readDisplays)
app.get(`/api/get_all_parts`, products_controller.readParts)
app.get(`/api/get_all_audio`, products_controller.readAudio)
app.get(`/api/get_all_peripherals`, products_controller.readPeripherals)

//--cart endpoints --//
app.post(`/api/add_to_cart/:productId`, cart_controller.addToCart)
app.delete(`/api/remove_from_cart/:cartId`, cart_controller.removeFromCart)
app.put(`/api/increase_quantity/:cartId/:quantity`, cart_controller.increaseQuantity)
app.delete(`/api/decrease_quantity/:cartId/:quantity`, cart_controller.decreaseQuantity)
app.get(`/api/get_total`, cart_controller.getTotal);
app.get(`/api/get_cart`, cart_controller.getCart);
app.delete(`/api/empty_cart`, cart_controller.emptyCart);

// --- build ----//





const PORT = process.env.SERVER_PORT
app.listen(PORT, () => { console.log(`Listening on Port ${PORT}`) });