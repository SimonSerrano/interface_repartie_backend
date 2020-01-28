var mongoose = require('mongoose');

var quizzTabletteSchema = mongoose.Schema({
	quizzTabletteID:{
		type:String
	},
	quizz:{
		type:Array
	}
});


var QuizzTablette = module.exports = mongoose.model('quizztablette', quizzTabletteSchema);

module.exports.get = function(callback, limit){
	QuizzTablette.find(callback).limit(limit);
}


