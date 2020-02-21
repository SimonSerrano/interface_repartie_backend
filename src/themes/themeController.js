Theme = require('./themeModel');


exports.all = function(req, res) {
    Theme.get(function(err, themes) {
        if(err) {
            return res.status(500).send(err);
        }
        return res.status(200).send(themes);
    });
};


exports.add = function(req, res) {
    const theme = req.body;
    Theme.collection.insertOne(theme, (err, theme) => {
        if(err) {
            console.log(err);
            res.status(500).send(err);
        }
        res.status(200).send(theme);
    });
}