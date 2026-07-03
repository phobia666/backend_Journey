const EventEmitter = require("events")
const fs = require("fs");
const emitter = new EventEmitter();

let eventCounts = {
    loginCount : 0,
    logoutCount : 0,
    purchaseCount : 0,
    profileUpdateCount : 0
}
const logFile = "eventlog.json"

if(fs.existsSync(logFile)){
    // eventCounts = JSON.parse(fs.readFileSync(logFile, "utf-8"));
    //upar wali chize sahi dhang se likho niche

    const data = fs.readFileSync(logFile, "utf-8");
    Object.assign(eventCounts, JSON.parse(data))
}


function saveCounts(){
    fs.writeFileSync(logFile, JSON.stringify(eventCounts, null, 2));
}



emitter.on("LOGIN", (args) => {
    eventCounts.loginCount++;
    console.log(`${args.username} logged IN😀`);
    saveCounts()
})

emitter.on("LOGOUT", (args) => {
    eventCounts.logoutCount++;
    console.log(`${args.username} logged OUT😔`);
    saveCounts()
})

emitter.on("PURCHASE", (args) => {
    eventCounts.purchaseCount++;
    console.log(`${args.item} purchased successfully💰`);
    saveCounts()
})

emitter.on("PROFILEUPDATE", (args) => {
    eventCounts.profileUpdateCount++;
    console.log(`profile updated✏️`);
    saveCounts()
})

emitter.on("SUMMARY", () => {
    console.log(eventCounts);

})


const data = {
    username: "Ace",
    item : "8gb RAM"
}

emitter.emit("LOGIN", data)
emitter.emit("LOGOUT", data)
emitter.emit("PURCHASE", data)
emitter.emit("PROFILEUPDATE", data)
emitter.emit("SUMMARY")

