module.exports = {

    addToCart: (req, res, next) => {
        const db = req.app.get('db');
        const { productId } = req.params
        const { user_id } = req.session.user

        db.add_to_cart([productId, user_id, 1]).then(() => {
            db.get_user_cart([user_id]).then(cart => {
                res.status(200).send(cart)
            })
        })
    },

    removeFromCart: (req, res, next) => {
        const db = req.app.get('db');
        const { cartId } = req.params
        const { user_id } = req.session.user

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
        // let newQuantity = quantity++

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
        // const { user_id } = req.session.user        

        db.total_price().then(totalPrice => {
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

    }
}