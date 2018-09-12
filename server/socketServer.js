const Server = require('socket.io');

class SocketServer {
  constructor (server) {
    this.server = server;
    this.io = new Server(server, {
      pingInterval: 10000,
      pingTimeout: 5000,
    });
    this.handlers = {};
    this.initConnections();
  }

  on (event, handler) {
    this.handlers[event] = this.handlers[event] || [];
    this.handlers[event].push(handler);
  }

  raise (event, ...data) {
    const handlers = this.handlers[event];
    if (handlers) {
      handlers.forEach(handler => handler(...data));
    }
  }

  initConnections () {
    this.io.use((client, next) => {
      let token = client.handshake.query.token;
      console.log('token:', token);
      if (token === 'abc') {
        return next();
      }
      return next(new Error('authentication error'));
    });
    
    this.io.on('connection', (client) => {
      // let token = client.handshake.query.token;
      this.raise('connect', client);
      
      client.on('disconnect', reason => {
        this.raise('disconnect', client, reason);
      });

      client.on('message', message => {
        console.log("MESAGE");
        this.raise(message.name, message.data);
      });
    });
  }

  send (name, data) {
    this.io.emit('message', {
      name,
      data,
    });
  }
}

module.exports = SocketServer;