var mongoose = require('mongoose');

var quizzTabletteSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	title: mongoose.Schema.Types.String,
	type: mongoose.Schema.Types.String,
	questions: mongoose.Schema.Types.Array,
	description: mongoose.Schema.Types.String,
	theme: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Theme'
	}
});


var QuizzTablette = module.exports = mongoose.model('quizztablette', quizzTabletteSchema);

module.exports.get = function(callback, limit){
	QuizzTablette.find(callback).populate('theme', 'name -_id').limit(limit);
}


