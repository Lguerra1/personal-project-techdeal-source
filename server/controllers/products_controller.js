module.exports = {

    read: (req, res, next) => {
        const db = req.app.get("db");
        db.get_all_products().then(products => {
            res.status(200).send(products)
        })
    },

    readDisplays: (req, res, next) => {
        const db = req.app.get("db");
        db.get_all_displays().then(displays => {
            res.status(200).send(displays)
        })
    },

    readParts: (req, res, next) => {
        const db = req.app.get("db");
        db.get_all_parts().then(parts => {
            res.status(200).send(parts)
        })
    },

    readAudio: (req, res, next) => {
        const db = req.app.get("db");
        db.get_all_audio().then(audio => {
            res.status(200).send(audio)
        })
    },

    readPeripherals: (req, res, next) => {
        const db = req.app.get("db");
        db.get_all_peripherals().then(peripherals => {
            res.status(200).send(peripherals)
        })
    }

}