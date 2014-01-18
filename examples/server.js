
var Server = require('..');
var server = new Server;

server.bind('tcp://localhost:5000');
server.use(stdout);

function stdout(server){
  server.on('message', function(msg){
    console.log(msg);
  });
};