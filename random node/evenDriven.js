
// This code sets up an event listener for the 'greet' event and then emits it.

const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('greet', () => {
  console.log('Hello there!');
});

emitter.emit('greet');
