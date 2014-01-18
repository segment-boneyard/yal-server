
# yal-server

  Extensible log server for [YAL](https://github.com/segmentio/yal).

## Installation

```
$ npm install yal-server
```

## Example

 Running YAL with a simple stdout plugin:

```js
var Server = require('yal-server');
var server = new Server;

server.bind('tcp://localhost:5000');
server.use(stdout);

function stdout(server){
  server.on('message', function(msg){
    console.log(msg);
  });
};
```

## Plugins

  Plugins are simply functions that accept the `server` instance,
  so you can listen on "message" events and do whatever you like.

# License

  MIT