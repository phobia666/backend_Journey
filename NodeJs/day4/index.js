const http = require("http")
const fs = require("fs")
const {Transform,
    pipeline
} = require("stream")

const PORT = 8080;

const myServer = http.createServer((req, res) => {








//-----------------1st  --------------------------------downloading file


    // donwloading files in a bad way

    // const file = fs.readFileSync("sample.txt")
    // res.end(file)

    //downloading file in a good way
    // const readableStream = fs.createReadStream("sample.txt")
    // readableStream.pipe(res);











//-----------------2nd  -------------------------------- copying file

    //copy file in a bad way
    

    // const file = fs.readFileSync("sample.txt");
    // fs.writeFileSync("output.txt", file);





    //right way efficient way to copy paste data


    // const readStream = fs.createReadStream("sample.txt")
    // const writeStream = fs.createWriteStream("output.txt")

    // readStream.on("data", (chunk) => {
    //     console.log("CHunk : ", chunk.toString());
    //     writeStream.write(chunk);
    // })










//-----------------3rd  -------------------------------- String processing
    // upperCase()
    // replace ipsum --> acehaze


    const readStream = fs.createReadStream("sample.txt")
    const writeStream = fs.createWriteStream("output.txt")

    //Bad Approach sab kuch streaming ke andar karhe ho tum 
    // readStream.on("data", (chunk) => {
    //     const modifiedChunk = chunk.toString().toUpperCase().replaceAll("IPSUM", "ACEHAZE");
    //     writeStream.write(modifiedChunk)
    // })






    //we wanted to transform the data between the readableStream and writableStream
    // therefore we will use Transform

    // Good Approach
    const transformStream = new Transform({
        transform(chunk, encoding, callback){
            const modifiedChunk =  chunk.toString().toUpperCase().replaceAll("IPSUM", "ACEHAZE")
            callback(null, modifiedChunk)
        }
    });

    // readStream.pipe(transformStream).pipe(writeStream)
    //pipe isliye karte taki data kahi kho na jaye


    //pipe se better pipeline laga do wo jyada better ho jayega
    pipeline(readStream, transformStream, writeStream, (err) => {console.log(err)})
    //BEST WAY TO CONNECT STREAMS THROUGH PIPELINE









    res.end();
})

myServer.listen(PORT, () => {
    console.log("Server Connected🐇 at", PORT);
})

// readableStream <---- pipe -----> WritableStream

// req: readable stream
// res: writable stream