const express = require('express');
const http = require('http');
const favicon = require('serve-favicon');
const static = require('serve-static');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const SocketServer = require('./socketServer');

const app = express();
const server = http.createServer(app);
const socket = new SocketServer(server);

app.use(morgan('dev'));

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(static('public'));

app.use(favicon(path.resolve(__dirname, '../public', 'favicon.ico')));

// app.get('/', (req, res, next) => {
  //   res.send(200, 'ok');
  // });
  
// const script = fs.readFileSync(path.resolve('dist/index.js')).toString();

// app.get('/js/build.js', (req, res) => {
//   res.setHeader('Content-Type', 'text/javascript');
//   res.send('200', script);
// });

socket.on('connect', client => {
  console.log("connection!!");
  // socket.send('data', data);
});

server.listen(3000);

console.log('listening 3000...');