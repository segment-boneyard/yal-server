
/**
 * Module dependencies.
 */

var Emitter = require('events').EventEmitter;
var assert = require('assert');
var axon = require('axon');

/**
 * Expose `Server`.
 */

module.exports = Server;

/**
 * Initialize server.
 *
 * @api public
 */

function Server() {
  this.sock = axon.socket('pull');
  this.onmessage = this.onmessage.bind(this);
  this.sock.on('message', this.onmessage);
}

/**
 * Inherit from `Emitter.prototype`.
 */

Server.prototype.__proto__ = Emitter.prototype;

/**
 * Handle messages.
 */

Server.prototype.onmessage = function(msg){
  this.emit('message', msg);
};

/**
 * Use the given plugin `fn`.
 *
 * @param {Function} fn
 * @return {Server} self
 * @api public
 */

Server.prototype.use = function(fn){
  fn(this);
  return this;
};

/**
 * Bind to `addr`.
 *
 * @param {String} addr
 * @api public
 */

Server.prototype.bind = function(addr){
  assert(addr, 'address required');
  this.sock.bind(addr);
};