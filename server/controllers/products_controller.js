module.exports = {

    read: (req, res, next) => {
        const db = req.app.get("db");
        db.query('SELECT * FROM products;').then(products => {
            res.status(200).send(products)
        }).catch((err) => console.log(err))
    },

    readDisplays: (req, res, next) => {
        const db = req.app.get("db");
        db.query("SELECT * FROM products where type = 'Displays';").then(displays => {
            res.status(200).send(displays)
        }).catch((err) => console.log(err))
    },

    readParts: (req, res, next) => {
        const db = req.app.get("db");
        db.query("SELECT * FROM products where type = 'Parts';").then(parts => {
            res.status(200).send(parts)
        }).catch((err) => console.log(err))
    },

    readAudio: (req, res, next) => {
        const db = req.app.get("db");
        db.query("SELECT * FROM products where type = 'Audio';").then(audio => {
            res.status(200).send(audio)
        })
    },

    readPeripherals: (req, res, next) => {
        const db = req.app.get("db");
        db.query("SELECT * FROM products where type = 'Peripherals';").then(peripherals => {
            res.status(200).send(peripherals)
        })
    }

}