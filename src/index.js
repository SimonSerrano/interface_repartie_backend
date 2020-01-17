/**
 * @author Christian Brel <ch.brel@gmail.com>
 */

import SocketIOServer from './SocketIOServer';
import ClientManager from './manager/ClientManager';
import QuizzManager from './manager/QuizzManager';


const clientManager = new ClientManager();
const quizzManager = new QuizzManager();

const onNewClient = (socket) => {
  clientManager.addClient(socket);
};

const onClientDisconnection = (socket) => {
  clientManager.deleteClient(socket);
};

const onQuizzRequest = (socket) => {
  quizzManager.requestQuizz(socket);
}

const onSaveQuizz = (socket) => {
  quizzManager.saveQuizz(socket);
}

const onDoneQuizz = (socket) => {
  quizzManager.doneQuizz(socket);
}

const socketIOServer = new SocketIOServer();
socketIOServer.onNewClient(onNewClient);
socketIOServer.onClientDisconnection(onClientDisconnection);
socketIOServer.onQuizzRequest(onQuizzRequest);
socketIOServer.onSaveQuizz(onSaveQuizz);
socketIOServer.onDoneQuizz(onDoneQuizz);
socketIOServer.start();
