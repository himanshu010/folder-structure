var fs = require('fs'),
 path=require('path');
 var spacing="";
 function crawl(spacing,dir){

     console.log(spacing+dir+"\n");
     var files= fs.readdirSync(dir);
     for(var x in files){
         var next = path.join(dir,files[x]);
         if (fs.lstatSync(next).isDirectory()===true) {
            crawl(spacing+"    ",next);
         }
         else{
            //  console.log('\t', next);
         }
     }
 }
 crawl("",__dirname);