module.exports = {

    addToCart: async (req, res, next) => {
        const db = req.app.get('db');
        const { productId, user_id } = req.params
        try {
            await db.query(`INSERT INTO carts (product_id, user_id, quantity) VALUES ('${productId}', '${user_id}', 1) returning *`);
            let cart = await db.query(` select * from carts join products on products.product_id = carts.product_id where user_id = ${user_id};`);
            return res.status(200).send(cart)
        } catch (err) {
            return res.status(400).send(err)
        }
    },

    removeFromCart: async (req, res, next) => {
        const db = req.app.get('db');
        const { cartId, user_id } = req.params;

        try {
            console.log('in the try block')
            await db.query(`DELETE FROM carts WHERE user_id = ${user_id} AND cart_id = ${cartId}`);
            let cart = await db.query(` select * from carts join products on products.product_id = carts.product_id where user_id = ${user_id};`);
            res.status(200).send(cart);
        } catch (err) {
            res.status(400).send(err);
        }

    },

    increaseQuantity: async (req, res, next) => {
        const db = req.app.get('db');

        let { cartId, quantity, user_id } = req.params;

        try {
            await db.query(`UPDATE carts SET quantity = ${quantity} + 1 WHERE cart_id = ${cartId} and user_id = ${user_id}`);
            let cart = await db.query(` select * from carts join products on products.product_id = carts.product_id where user_id = ${user_id};`);
            res.status(200).send(cart);
        } catch (err) {
            res.status(400).send(err)
        }

    },

    decreaseQuantity: async (req, res, next) => {
        const db = req.app.get('db')

        let { cartId, quantity, user_id } = req.params;

        try {
            await db.query(`UPDATE carts SET quantity = ${quantity} - 1 WHERE cart_id = ${cartId} and user_id = ${user_id}`);
            let cart = await db.query(` select * from carts join products on products.product_id = carts.product_id where user_id = ${user_id};`);
            res.status(200).send(cart);
        } catch (err) {
            res.status(400).send(err)
        }
    },

    getTotal: async (req, res, next) => {
        const db = req.app.get('db')
        const { user_id } = req.params;

        try {
            let totalPrice = await db.query(`SELECT sum(p.price * c.quantity) FROM carts c JOIN products p on p.product_id = c.product_id where user_id = ${user_id}`)
            res.status(200).send(totalPrice);

        } catch (err) {
            res.status(400).send(err);
        }

    },

    getCart: async (req, res, next) => {
        const db = req.app.get('db');
        const { user_id } = req.params;

        try {
            let cart = await db.query(` select * from carts join products on products.product_id = carts.product_id where user_id = ${user_id};`);
            res.status(200).send(cart)
        } catch (err) {
            res.status(400).send(err)
        }
    },

    emptyCart: async (req, res, next) => {
        const db = req.app.get('db');
        const { user_id } = req.params;


        try {
            await db.query(`DELETE FROM carts WHERE user_id = ${user_id}`);
            let cart = await db.query(`select * from carts join products on products.product_id = carts.product_id where user_id = ${user_id};`);
            res.status(200).send(cart);
        } catch (err) {
            res.status(400).send(err);
        }
    }

}