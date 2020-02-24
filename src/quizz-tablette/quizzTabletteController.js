QuizzTablette = require('./quizzTabletteModel');
Theme = require('../themes/themeModel');
var ObjectId = require('mongodb').ObjectId;


const getThemes = (quizz) => {
	return new Promise((resolve, reject) => {
		const result = [];
		quizz.forEach((q) => {
			Theme.getById(q.theme, function(err, theme) {
				if(err) {
					reject(err);
				}
				const themedQuizz = {
					questions : q.questions,
					_id: q._id,
					title: q.title,
					theme: theme.name,
					type: q.type,
					description: q.description,
					users: q.users
				}
				q.theme = theme.name;
				console.log(q)
			});
		});
		resolve(quizz);
	})
}

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
				{title:'Avec un peigne', value:true},
				{title:'Avec une pelle', value:false}
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
	const quizz = req.body;
	QuizzTablette.collection.insertOne(quizz, function(err, quizz) {
		if(err) {
			console.log(err);
			res.status(500).send(err);
		}
		res.status(200).send({msg: "Quizz added", data: quizz});
	});
}