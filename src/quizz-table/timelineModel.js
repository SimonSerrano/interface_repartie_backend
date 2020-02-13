var mongoose = require('mongoose');

var timelineSchema = mongoose.Schema({
	timelineID:{
		type:String
	},
});


var Timeline = module.exports = mongoose.model('timeline', timelineSchema);

module.exports.get = function(callback, limit){
	Timeline.find(callback).limit(limit);
}


