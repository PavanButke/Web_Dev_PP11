const fs= require("fs");
let jsonfile = ("./project.json");
let text= ('.\Hackthon_1\Atrocity_Data\jsontotext.txt.txt')


let txtFile = "./test.txt"; //Relative text file path

let file = new File(txtFile,"atro"); //Text file name

let str = JSON.stringify(JsonExport);

log("opening file...");

file.open();

log("writing file..");

file.writeline(str);
file.close();