var fs = require('fs'),
 path=require('path');
 var FolderNamesArray=[];
 var FolderNamesArray1;
//  var spacing="";
 function crawl(spacing,dir){
    var folderName=path.basename(dir);
    FolderNamesArray.push(folderName);
    //  console.log(spacing+folderName+"\n");
     var files= fs.readdirSync(dir);
     for(var x in files){
         //ignored folders
         if(files[x]!==".git"&&files[x]!=="New folder (2)"){
         var next = path.join(dir,files[x]);
         if (fs.lstatSync(next).isDirectory()===true) {
            crawl(spacing+"    ",next);
         }
        }
     }
 }
 crawl("",__dirname);
 console.log(FolderNamesArray);
// var dir=path.basename(__dirname);
// console.log(dir);