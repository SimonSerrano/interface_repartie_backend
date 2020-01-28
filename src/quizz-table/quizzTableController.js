QuizzTable = require('./quizzTableModel');
var ObjectId = require('mongodb').ObjectId;



exports.all = function(io, res){
	QuizzTable.get(function(err, quizz){
		if(err)
			return res.status(500).send(err);
		console.log("hello table veut quizz");
		io.emit("QUIZZ", quizz);
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


exports.addQuizz = function(req, res){
	var quizz = [
		{
			rooms:
			[
				{
					name:"Cuisine",
					objects:
					[
						{
							image:'https://image.darty.com/accessoires/gros_electromenager/casserolerie/tefal_talent_pro_po_24_s1604284214099A_184418399.jpg', title:"Poele"
						},
						{
							image:'https://www.distri-clean.com/999-large_default/fourchette-de-table-inox.jpg', title:"Fourchette"
						},
					]
				},
				{
					name:"Salle de bain",
					objects:
					[
						{
							image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIcpyZ7e1lMwu80EW9avvCDOY5mvDdNOjONZQ76JzG-wkBKXya&s', title:"Brosse à dent"
						},
						{
							image:'https://www.cdiscount.com/pdt2/2/0/3/1/700x700/dop3600550769203/rw/shampoing-amande-douce-400-ml-dop.jpg', title:"Shampoing"
						},
					]
				}
			],
		},	
	];        

	QuizzTable.collection.insertMany(quizz, function(err, quizz) {
		if(err)
			res.status(500).send(err);
		res.status(200).send({msg: "Quizz added", data: quizz});
	});
}