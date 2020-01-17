'use strict'

import { QUIZZ_DATA_REQUEST_TYPE, QUIZZ, SAVE_DATA_TYPE, QUIZZ_DATA_TYPE, DONE_DATA_TYPE } from "../constants";

class QuizzManager {

    constructor() {

    }

    
    /**
     * Request Quizz handler
     *
     * @param {*} socket
     * @memberof DatabaseAccessManager
     */
    requestQuizz(socket) {
        socket.on(QUIZZ_DATA_REQUEST_TYPE, () => {
            console.log(`Received ${QUIZZ_DATA_REQUEST_TYPE} from ${socket.id}`);
            socket.emit(QUIZZ_DATA_TYPE, QUIZZ);
        });
    }



    /**
     * Save Quizz handler
     * 
     * @param {*} socket
     * @memberof DatabaseAccessManager
     */
    saveQuizz(socket) {
        socket.on(SAVE_DATA_TYPE, (quizz) => console.log(quizz));
    }

    doneQuizz(socket) {
        socket.on(DONE_DATA_TYPE, (data)=> console.log(data));
    }

}

export default QuizzManager;