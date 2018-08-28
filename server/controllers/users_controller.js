module.exports = {

    read: (req, res, next) => {
        const db = req.app.get("db");
        db.get_all_users().then(allUsers => 
            res.status(200).send(allUsers)
        )
    }


}