/* MongoDB */
const MONGO_URL = 'mongodb+srv://dbUser:quizzdb@quizztable-tyrrm.gcp.mongodb.net/quizzdb?retryWrites=true&w=majority';

/* SOCKET.IO message Types */
const PLAY_EVENT_TYPE = 'PLAY';
const CHANGE_IMAGE_EVENT_TYPE = 'CHANGE_IMAGE';


/* API REST ROUTES */
const QUIZZ_TABLE_ROUTE = "/quizzTable/quizz";
const QUIZZ_TABLETTE_ROUTE = "/quizzTablette/quizz";

/* QUIZZ MOCK */
let QUIZZ = {
    quizz: [
        
    ]
}

module.exports = {
    PLAY_EVENT_TYPE,
    CHANGE_IMAGE_EVENT_TYPE,
    QUIZZ_TABLE_ROUTE,
    QUIZZ_TABLETTE_ROUTE,
    MONGO_URL
}