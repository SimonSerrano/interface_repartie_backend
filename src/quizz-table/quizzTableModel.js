var mongoose = require('mongoose');

var quizzTableSchema = mongoose.Schema({
	quizzTableID:{
		type:String
	},
});


var QuizzTable = module.exports = mongoose.model('quizztable', quizzTableSchema);

module.exports.get = function(callback, limit){
	QuizzTable.find(callback).limit(limit);
}


