var express = require('express');
var http = require('http');
var ws = require('ws');
var fs = require('fs');

const app = express();
const server = http.createServer(app);
const wss = new ws.Server({server});

wss.on('connection', (ws) => {
    console.log(ws._socket.remoteAddress);
    console.log(ws._socket.remotePort);
    ws.on('message', (message) => {
      var data = fs.readFileSync('./guitarup_full.wav');
      ws.send(data);
      console.log('The sent data:', data);
    })
})

server.listen(8080, () => {
  console.log('Server is listening on port 8080');
})
