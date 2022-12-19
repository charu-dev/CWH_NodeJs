const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('WaterFull', (args) => {
  console.log('Please turn off the motor!');
  if(args)console.log(args)
  setTimeout(() => {
      console.log('Please turn off the motor! Its a gentle reminder');
  }, 3000);
});

console.log("The script is running")
myEmitter.emit('WaterFull');
console.log("The script is still running")
myEmitter.emit('WaterFull',{id:1,message:"charu"}); //we can also pass argument to a function in emmitor.on


//Class method explained in traversy media crash course is also good. Using constructors.