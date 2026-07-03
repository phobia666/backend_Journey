const EventEmitter = require("events")
const emitter = new EventEmitter();

let loginCount = 0;
let logoutCount = 0;
let purchaseCount = 0;
let profileUpdateCount = 0;

emitter.on("LOGIN", (args) => {
    loginCount++;
    console.log(`${args.username} logged IN😀`);
})

emitter.on("LOGOUT", (args) => {
    logoutCount++;
    console.log(`${args.username} logged OUT😔`);
})

emitter.on("PURCHASE", (args) => {
    purchaseCount++;
    console.log(`${args.item} purchased successfully💰`);
})

emitter.on("PROFILEUPDATE", (args) => {
    profileUpdateCount++;
    console.log(`profile updated✏️`);
})


const data = {
    username: "Ace",
    item : "8gb RAM"
}

emitter.emit("LOGIN", data)
emitter.emit("LOGOUT", data)
emitter.emit("PURCHASE", data)
emitter.emit("PROFILEUPDATE", data)


console.log({
    loginCount,
    logoutCount,
    purchaseCount,
    profileUpdateCount
});