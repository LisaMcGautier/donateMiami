const db = require("../models");

module.exports = {
    findAll: function(req, res){
        db.NonProfits
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findOne: function(req, res){
        db.NonProfits
        .findOne({id: req.params.id})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    save: function(req, res) {
        db.NonProfits
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err = res.status(422).json(err));
    },
    remove: function (req, res) {
        db.NonProfits
        .findById({id: req.params.id})
        .then(dbModel => dbModel.remove())
        .then(dbModel = res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};