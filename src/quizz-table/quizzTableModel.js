var mongoose = require('mongoose');

var quizzTableSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	title: mongoose.Schema.Types.String,
	type: mongoose.Schema.Types.String,
	rooms: mongoose.Schema.Types.Mixed,
	theme: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Theme'
	}
});


var QuizzTable = module.exports = mongoose.model('quizztable', quizzTableSchema);

module.exports.get = function(callback, limit){
	QuizzTable.find(callback).populate('theme', 'name -_id').limit(limit);
}


