const {Readable, Writable} = require("stream")

const readableStream = new Readable({
    highWaterMark: 6, //threashold define karhe ham utne hi bytes ka data readableStream me jayega 
    //hit ya cross krega to false bolega else true
    read(){
        console.log("reading...");
    },
});

const writableStream = new Writable({
    write(streamData){
        console.log("writing...", streamData.toString());
    },   
})

readableStream.on("data", (chunk) => {
    console.log("CHUNK : ", chunk.toString());
    writableStream.write(chunk);
})

console.log(readableStream.push("Hello"))