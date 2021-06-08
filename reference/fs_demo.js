const fs = require("fs");
const path = require("path");

// CREATE THE FOLDER
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("File Created");
// });

// CREATE THE FILE AND WRITE TO IT
// fs.writeFile(
//   path.join(__dirname, "/test", "test.txt"),
//   "Hello world",
//   (err) => {
//     if (err) throw err;
//     console.log("File Written...");
//   }
// );

// console.log(path.join(__dirname, "tesr", "test.txt"));

// APPEND THE FILE AND WRITE TO IT
// fs.appendFile(
//   path.join(__dirname, "/test", "test.txt"),
//   "I love Nodejs",
//   (err) => {
//     if (err) throw err;
//     console.log("File Written...");
//   }
// );

// READ FILE

// fs.readFile(path.join(__dirname, "/test", "test.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// RENAME FILE

fs.rename(
  path.join(__dirname, "/test", "test.txt"),
  path.join(__dirname, "/test", "new.txt"),
  (err) => {
    if (err) throw err;
    console.log("Changed file name...");
  }
);
