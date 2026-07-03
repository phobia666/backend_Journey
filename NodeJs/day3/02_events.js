const EventEmitter = require("events")

//but this is a constructor we need to create an instance of this

const emitter = new EventEmitter();


//key methods

// on(eventName, Listener) ---create

//for eg create a function that prints hello world

emitter.on("GREET" , (args) => {
    console.log(`Hello world, ${args.username} and the id is ${args.id} \nrole is ${args.role}`);
});
//so basically GREET yha pe eventName hai





// emit(eventName, [args]) ---execute

//now execute that greet function
emitter.emit("GREET", {
    username: "Abhyanshu",
    id: "acehaze13",
    role: "backend developer"
})
//ab jaha jaha GREET event milega ye use execute krdega
//arguments bhi paas krskte ho 