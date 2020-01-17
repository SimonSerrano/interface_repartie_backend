/**
 * @author Christian Brel <ch.brel@gmail.com>
 */

import { PING_SOCKETIO_TYPE, PONG_SOCKETIO_TYPE, SERVER_REDIRECTS } from './constants';

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
    SERVER_REDIRECTS.forEach(redirect => {
      socket.on(redirect, data => {
      console.log(`Received ${redirect} from ${data.id}`);
      socket.emit(redirect, {id: data.id});
      });
    });
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
