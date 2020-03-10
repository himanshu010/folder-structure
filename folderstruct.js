var fs = require('fs')
var path = require("path");
var util = require("util");


var logFile = fs.createWriteStream("log.md", { flags: "w" });
var logStdout = process.stdout;

console.log = function() {
  logFile.write(util.format.apply(null, arguments) + "\n");
  logStdout.write(util.format.apply(null, arguments) + "\n");
};
console.error = console.log;


var FolderNamesArray = [];
var level = 0;
var spacing = "";
function crawl(spacing, dir, level) {
  var folderName = path.basename(dir);
  FolderNamesArray.push(folderName);
  console.log(spacing + "├───" + folderName + "\n");
  var files = fs.readdirSync(dir);
  for (var x in files) {
    //ignored folders
    if (files[x] !== ".git" && files[x] !== "New folder (2)") {
      var next = path.join(dir, files[x]);
      if (fs.lstatSync(next).isDirectory() === true) {
        crawl(spacing + "    ", next, level + 1);
      }
    }
  }
}
crawl(spacing, __dirname, level);
