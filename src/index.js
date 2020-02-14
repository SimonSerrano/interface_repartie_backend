let QUIZZ = {
    quizz: [
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
    ]
}


let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let cors = require('cors');
const {PLAY_EVENT_TYPE} = require('./constants');


const app = express();
const http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(cors());

app.use(function(req,res,next){
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", "true")
  res.header("")
  next();
});

app.use(bodyParser.json());

let apiRoutes = require("./api-routes");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://dbUser:quizzdb@quizztable-tyrrm.gcp.mongodb.net/quizzdb?retryWrites=true&w=majority').then(()=> {
	console.log('Connected to BDD')
})
.catch(err => console.log(err));

var db = mongoose.connection;

app.get('/', (req, res) => res.send('Hello World!'));
app.use('/api', apiRoutes);

var quizzTableController = require('./quizz-table/quizzTableController');
var timelineController = require('./quizz-table/timelineController');
quizzTableController.setIO(io);

io.on('connection', (socket) => {
	console.log('user connected', socket.id);

	/*socket.on('REQUEST', (Answer) =>{
		quizzTableController.all(io);
	});*/

	socket.on('SAVE', (Answer) =>{
		console.log('SAVE : ' + JSON.stringify(Answer));
	});

	socket.on(PLAY_EVENT_TYPE, (quizz) => {
		console.log(`Starting quizz : ${quizz}`);
		socket.broadcast.emit(PLAY_EVENT_TYPE, quizz);
	});

});



http.listen(10000, () => {
	console.info('SocketIOServer is ready.');
    console.info('Socket.IO\'s port is 10000');
});