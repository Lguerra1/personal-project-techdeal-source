module.exports = {

    addToCart: async (req, res, next) => {
        const db = req.app.get('db');
        const { productId, user_id } = req.params
        console.log(user_id, productId)
        try {
            await db.query(`INSERT INTO carts (product_id, user_id, quantity) VALUES ('${productId}', '${user_id}', 1) returning *`);
            let cart = await db.query(` select * from carts join products on products.product_id = carts.product_id where user_id = ${user_id};`)
            return res.status(200).send(cart)
        } catch (err) {
            return res.status(400).send(err)
        }
    },

    removeFromCart: (req, res, next) => {
        const db = req.app.get('db');
        const { cartId, user_id } = req.params

        db.remove_from_cart([user_id, cartId]).then(() => {
            db.get_user_cart([user_id]).then(cart => {
                res.status(200).send(cart)

            })
        })
            .catch(err => console.log(err))

    },

    increaseQuantity: (req, res, next) => {
        const db = req.app.get('db');

        let { cartId, quantity } = req.params
        const { user_id } = req.session.user


        db.increase_quantity([quantity, cartId, user_id]).then(() => {
            db.get_user_cart([user_id]).then(cart => {
                res.status(200).send(cart)
            })
        })
            .catch(err => console.log(err))

    },

    decreaseQuantity: (req, res, next) => {
        const db = req.app.get('db')

        let { cartId, quantity } = req.params
        const { user_id } = req.session.user
        db.decrease_quantity([quantity, cartId, user_id]).then(() => {
            db.get_user_cart([user_id]).then(cart => {
                res.status(200).send(cart)
            })
        })
            .catch(err => console.log(err))
    },

    getTotal: (req, res, next) => {
        const db = req.app.get('db')
        const { user_id } = req.session.user

        db.total_price([user_id]).then(totalPrice => {
            res.status(200).send(totalPrice)

        }
        )

    },

    getCart: (req, res, next) => {
        const db = req.app.get('db')
        const { user_id } = req.session.user
        db.get_user_cart([user_id]).then(cart => {
            res.status(200).send(cart)
        })

    },

    emptyCart: (req, res, next) => {
        const db = req.app.get('db')
        const { user_id } = req.session.user

        db.empty_cart([user_id]).then(cart => {
            res.status(200).send(cart)
        })
    }

}