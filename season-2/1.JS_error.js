var Events = require('events');
var emitter = new Events.EventEmitter();

// Returning error
const validate = function (val) {
  if (typeof val !== 'object') {
    return new Error('Invalid Object');
  }
  return val;
}

console.log('Test error handling ', validate({ name: 'guru', rank: 2}));
console.log('Test error handling ', validate(1));

// Throwing an error

const val = (val) => {
  if (typeof val !== 'object') {
    throw new Error('Invalid Object');
  }
}

try {
  val(1);
} catch (err) {
  console.log ('Error type: ', err);
}

// Error callback
const validObj = (val, callback) => {
  if (typeof val !== 'object') {
    return callback(new Error('Invalid Object'));
  }
  callback();
}
validObj(11, (err) => {
  console.log('Error while validating the object ', err);
})

// Emit an error
var validateObject = function (a) {
    if (typeof a !== 'object') {
        emitter.emit('error', new Error('Invalid object'));
    }
};

emitter.on('error', function (err) {
    console.log('Emitted: ' + err.message);
});

validateObject(1);
