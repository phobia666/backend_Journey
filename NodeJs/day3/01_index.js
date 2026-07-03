const path = require("path")

console.log("Filename📁", __filename)
console.log("Dirname📂", __dirname)

//create a path
//folder/students/data.txt

const filepath = path.join("folder", "students", "data.txt")

console.log(filepath);


const parseDataPath = path.parse(filepath)
const resolvedPath = path.resolve(filepath)
const extname = path.extname(filepath)
const basename = path.basename(filepath)
const dirname = path.dirname(filepath)
//these are basic path details that you should know

console.log({
    parseDataPath,
    resolvedPath,
    extname,
    basename,
    dirname
});

