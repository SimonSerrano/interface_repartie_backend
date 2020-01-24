QuizzTable = require('./quizzTableModel');
var ObjectId = require('mongodb').ObjectId;



exports.all = function(req, res){
	QuizzTable.get(function(err, quizz){
		if(err)
			return res.status(500).send(err);

		return res.status(200).send(quizz);

	});
}

exports.add = function(req, res){
	var quizzTable = new QuizzTable();

	quizzTable.save(function(err, post){
		if(err)
			return res.status(500).send(err);


		return res.status(200).send("Quizz table added");
	});
}