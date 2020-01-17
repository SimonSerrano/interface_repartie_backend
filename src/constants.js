/* SOCKET.IO message Types */
export const PING_SOCKETIO_TYPE = 'PING';
export const PONG_SOCKETIO_TYPE = 'PONG';
export const SAVE_DATA_TYPE = 'SAVE';
export const QUIZZ_DATA_TYPE = 'QUIZZ';
export const QUIZZ_DATA_REQUEST_TYPE = 'REQUEST';
export const DONE_DATA_TYPE = 'DONE';

/* QUIZZ MOCK */
export const QUIZZ = {
    quizz:
    {
        id: 1,
        question: "Où se place la brosse à dent ?",
        answers: [
            {
                label: "Dans la salle de bain",
                valid: true
            },
            {
                label: "Dans la cuisine",
                valid: false
            },
            {
                label: "Dans le salon",
                valid: false
            }
        ]
    }

}