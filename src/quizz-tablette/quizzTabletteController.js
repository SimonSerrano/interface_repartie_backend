QuizzTablette = require('./quizzTabletteModel');
var ObjectId = require('mongodb').ObjectId;


exports.all = function(req, res){
	QuizzTablette.get(function(err, quizz){
		if(err)
			return res.status(500).send(err);

		return res.status(200).send(quizz);
	});
}

exports.add = function(req, res){
	var quizzTablette = new QuizzTablette();

	quizzTablette.save(function(err, post){
		if(err)
			return res.status(500).send(err);


		return res.status(200).send("Quizz tablette added");
	});
}


exports.addQuizz = function(req, res){
	var quizz = [
		{
			quizz:[
			{
				id:1,
				question:'Où se trouve la brosse à dent', 
				answers:
				[
				{title:'Dans la cuisine', value:false}, 
				{title:'Dans la salle de bain', value:true},
				{title:'Dans la chambre', value:false}
				],
			},
			{
				id:2,
				question:'Comment on se brosse les cheveux ?', 
				answers:
				[
				{title:'Avec une fourchette', value:false}, 
				{title:'Avec une brosse à dent', value:false},
				{title:'Avec un peigne', value:true}
				],
			},

			] 
		}
	];        

	QuizzTablette.collection.insertMany(quizz, function(err, quizz) {
		if(err)
			res.status(500).send(err);
		res.status(200).send({msg: "Quizz added", data: quizz});
	});

}

exports.addQuizzTest = async function (req, res) {
	console.log(req);
	QuizzTablette.collection.insertOne();
}