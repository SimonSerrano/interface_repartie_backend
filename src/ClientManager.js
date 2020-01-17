/**
 * @author Christian Brel <ch.brel@gmail.com>
 */

import { PING_SOCKETIO_TYPE, PONG_SOCKETIO_TYPE, SERVER_REDIRECTS, TABLE_SOCKETIO_WEB, WEB_SOCKETIO_TABLE, TABLET_SOCKETIO_TABLE, TABLET_SOCKETIO_WEB, WEB_SOCKETIO_TABLET, TABLE_SOCKETIO_TABLET } from './constants';
import SocketIOServer from './SocketIOServer';

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
    socket.on(TABLE_SOCKETIO_WEB, (data)=> {
      console.log(`Received ${TABLE_SOCKETIO_WEB} from ${data.id}`);
      socket.broadcast.emit(TABLE_SOCKETIO_WEB, {id: data.id});
    });
    socket.on(WEB_SOCKETIO_TABLE, (data)=> {
      console.log(`Received ${WEB_SOCKETIO_TABLE} from ${data.id}`);
      socket.broadcast.emit(WEB_SOCKETIO_TABLE, {id: data.id});
    });
    socket.on(TABLET_SOCKETIO_TABLE, (data)=>{
      console.log(`Received ${TABLET_SOCKETIO_TABLE} from ${data.id}`);
      socket.broadcast.emit(TABLET_SOCKETIO_TABLE, {id: data.id});
    });
    socket.on(TABLET_SOCKETIO_WEB, (data)=> {
      console.log(`Received ${TABLET_SOCKETIO_TABLE} from ${data.id}`);
      socket.broadcast.emit(TABLET_SOCKETIO_WEB, {id: data.id});
    });
    socket.on(WEB_SOCKETIO_TABLET, (data)=> {
      console.log(`Received ${WEB_SOCKETIO_TABLET} from ${data.id}`);
      socket.broadcast.emit(WEB_SOCKETIO_TABLET, {id: data.id});
    });
    socket.on(TABLE_SOCKETIO_TABLET, (data)=> {
      console.log(`Received ${TABLE_SOCKETIO_TABLET} from ${data.id}`);
      socket.broadcast.emit(TABLE_SOCKETIO_TABLET, {id: data.id});
    });
    socket.on('TestJSON', (data)=> {
      console.log(data);
    });
    // SERVER_REDIRECTS.forEach(redirect => {
    //   socket.on(redirect, data => {
    //   console.log(`Received ${redirect} from ${data.id}`);
    //   socket.emit(redirect, {id: data.id});
    //   });
    // });
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
