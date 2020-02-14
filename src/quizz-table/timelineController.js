Timeline = require('./timelineModel');
var ObjectId = require('mongodb').ObjectId;
var socket;

exports.setIO = function(io) {
	socket = io;
}


exports.all = function(io, res){
	Timeline.get(function(err, timeline){
		if(err)
			return res.status(500).send(err);
		console.log("hello table veut timeline");
		io.emit("PLAY", timeline[0]);
	});
}


exports.addTimeline = function(req, res){
	var timeline = [
		{
			type: "timeline",
			steps:
			[
				{
					name:"9h",
					image:'https://image.flaticon.com/icons/svg/2257/2257213.svg',
					text:'Café'
				},
				{
					name:"10h",
					image:'https://image.flaticon.com/icons/svg/1870/1870196.svg',
					text:'Lecture du journal'
				},
				{
					name:"10h30",
					image:'https://image.flaticon.com/icons/svg/992/992567.svg',
					text:'Activités'
				},
				{
					name:"11h30",
					image:'https://image.flaticon.com/icons/svg/1046/1046798.svg',
					text:'Menu'
				},
				{
					name:"12h",
					image:'https://image.flaticon.com/icons/svg/325/325562.svg',
					text:'Repas'
				},
				{
					name:"13h15",
					image:'https://image.flaticon.com/icons/svg/550/550486.svg',
					text:'Télévision'
				},
				{
					name:"14h30",
					image:'https://image.flaticon.com/icons/svg/992/992567.svg',
					text:'Activités'
				},
				{
					name:"15h30",
					image:'https://image.flaticon.com/icons/svg/2405/2405504.svg',
					text:'Gouter'
				},
				{
					name:"16h30",
					image:'https://image.flaticon.com/icons/svg/619/619155.svg',
					text:'Maison'
				}
			],
		},	
	];        

	Timeline.collection.insertMany(timeline, function(err, timeline) {
		if(err)
			res.status(500).send(err);
		res.status(200).send({msg: "Timeline added", data: timeline});
	});
}