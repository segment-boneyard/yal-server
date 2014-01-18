
var Logger = require('yal');
var log = new Logger('tcp://localhost:5000');

setInterval(function(){
  log.info('login', { user: 'tobi' });
}, 150);

setInterval(function(){
  log.info('login', { user: 'jane' });
}, 1500);