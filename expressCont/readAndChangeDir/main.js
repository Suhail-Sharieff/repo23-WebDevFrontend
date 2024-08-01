//this folder consists of some files all scattered , they include .png,pdf and .txt here,, ur job is to group all .png files into a single png folder,.pdf into pdf folder and so on 

//printitng all files in this folder:
import fs from "fs/promises"
const basePath=`C:\\Users\\suhai\\Desktop\\repo23-WebDevFrontend\\expressCont\\readAndChangeDir`
const files=await fs.readdir(basePath)
console.log(files);

//to print extensions of each file  in thsis folder:
files.forEach(file=> {
    const extension=file.split(".")[file.split(".").length-1]//getlast ie extension
    console.log(extension);
});


//organizing files
import path from "path"
for (const file of files) {
    // Get the file extension
    const extensionName = path.extname(file).slice(1); // Get extension and remove the dot
    if (extensionName) {//if souceDir  exists 
      // Define the directory path for the extension
      const destinationDir = path.join(basePath, extensionName);

      // Check if the directory for the extension exists, create it if it doesn't
      try {
        await fs.access(destinationDir);
      } catch (err) {
        await fs.mkdir(destinationDir);
      }

      // Move the file into the corresponding extension directory
      const oldPath = path.join(basePath, file);
      const newPath = path.join(destinationDir, file);
      await fs.rename(oldPath, newPath);
      console.log(`Moved ${file} to ${destinationDir}`);
    }
  }
