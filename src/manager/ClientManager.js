/**
 * @author Christian Brel <ch.brel@gmail.com>
 */

import { PING_SOCKETIO_TYPE, PONG_SOCKETIO_TYPE, SERVER_REDIRECTS, TABLE_SOCKETIO_WEB, WEB_SOCKETIO_TABLE, TABLET_SOCKETIO_TABLE, TABLET_SOCKETIO_WEB, WEB_SOCKETIO_TABLET, TABLE_SOCKETIO_TABLET, QUIZZ_DATA_TYPE, QUIZZ } from '../constants';
import SocketIOServer from '../SocketIOServer';

/**
 * Main class to manage ClientManager.
 *
 * @class ClientManager
 */
class ClientManager {
  /**
   * ClientManager constructor.
   *
   * @constructor
   */
  constructor() {

  }

  /**
   * New client.
   *
   * @method newClient
   * @param {Object} socket - client socket.
   */
  addClient(socket) {
    socket.on(PONG_SOCKETIO_TYPE, (data) => {
      console.log(`Received PONG from ${data.id}!`);
    });
    socket.emit(PING_SOCKETIO_TYPE, { id: socket.id });
  }



  /**
   * New client.
   *
   * @method newClient
   * @param {Object} socket - client socket.
   */
  deleteClient(socket) {
    // TODO
  }
}

export default ClientManager;
