module.exports = {

    getCartItems: (req, res, next) => {
        const db = req.app.get("db");
        db.get_user_cart().then(cartItems => {
            res.status(200).send(cartItems)

        })
    }
}