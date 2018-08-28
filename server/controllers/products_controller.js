module.exports = {

    read: (req, res, next) => {
        const db = req.app.get("db");
        console.log('here we are')
        db.get_all_products().then(products =>
            {console.log(products)
            res.status(200).send(products)}
        )
    }


}