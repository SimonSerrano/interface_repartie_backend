const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const themeSchema = Schema({
    _id: Schema.Types.ObjectId,
    name: String
});

const Theme = module.exports = mongoose.model('Theme', themeSchema);

module.exports.get = function(callback, limit) {
    Theme.find(callback).limit(limit);
}

module.exports.getById = function(id, callback) {
    Theme.findById(id, '-_id').exec(callback);
}