module.exports = {

    getCartItems: (req, res, next) => {
        const db = req.app.get("db");
        db.get_user_cart().then(cartItems => {
            res.status(200).send(cartItems)

        })
    },

    addToCart: (req, res, next) => {
        const db = req.app.get('db');
        db.add_to_cart().then(products => {
            res.status(200).send(products)
        })
    },

    deleteItem: (req, res, next) => {
        const db = req.app.get('db');
        db.delete_item().then(deletedProduct => {
            res.status(200).send(deletedProduct)
        })
    }
}