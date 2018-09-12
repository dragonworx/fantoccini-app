import { connect } from 'socket.io-client';

export default class SocketClient {
  constructor (url) {
    const socket = connect(url);
    this.isConnected = false;
    this.handlers = {};

    socket.on('connect', () => {
      console.log("connected!");
      this.isConnected = true;
    });

    socket.on('message', message => {
      this.raise(message.name, message.data);
    });

    this.socket = socket;
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

  send (name, data) {
    this.socket.emit('message', {
      name,
      data,
    });
  }
}