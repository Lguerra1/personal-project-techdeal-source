module.exports = {

    getCartItems: (req, res, next) => {
        const db = req.app.get("db");
        db.get_user_cart().then(cartItems => {
            res.status(200).send(cartItems)

        })
    },

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

    deleteItem: (req, res, next) => {
        const db = req.app.get('db');
        db.delete_item().then(deletedProduct => {
            res.status(200).send(deletedProduct)
        })
    }
}