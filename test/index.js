
var Logger = require('yal');
var Server = require('..');

describe('Server#use(fn)', function(){
  it('should registry a plugin', function(done){
    var server = new Server;

    server.bind('tcp://localhost:5000');

    server.use(function(server){
      server.on('message', function(msg){
        msg.should.have.property('timestamp');
        msg.should.have.property('hostname');
        msg.should.have.property('message');
        msg.message.should.eql({ here: 'weee' });
        done();
      });
    });

    var log = new Logger('tcp://localhost:5000');
    log.info('something', { here: 'weee' });
  })
})