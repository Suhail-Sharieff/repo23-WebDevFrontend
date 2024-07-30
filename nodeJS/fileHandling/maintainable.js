import fs from "fs/promises"

let data =await fs.readFile("text.txt")

console.log(data.toString());