var fs = require('fs'),
 path=require('path');
 var spacing="";
 function crawl(spacing,dir){

     console.log(spacing+dir+"\n");
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