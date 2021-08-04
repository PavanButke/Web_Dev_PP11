let fs = require("fs");

let extensionMapping = require("./util.js");

let testFolderPath= "./Downloads";

let allFiles = fs.readdirSync(testFolderPath);

for(i=0;i<allFiles.length;i++){
   sortFile(allFiles[i]);   
}

function getextensions(file){
     file = file.split(".");
    return file[1];
}

function checkextensionsFolderName(extension){
    let extensionFolderName = testFolderPath;
    for(let key in extensionMapping)    { 
        let extensions = extensionMapping[key];
        if(extensions.includes(extension)){
            extensionFolderName = extensionFolderName+"/"+key;
            break;
        
    }
}
let isFolderExist =fs.existsSync(extensionFolderName);
if(!isFolderExist){
    fs.mkdirSync(extensionFolderName);
}
        

return extensionFolderName;   }

function movefile(file ,extensionFolderName){
    let sourcefile = testFolderPath+"/"+file;
    let destinationfile= extensionFolderName+"/"+file;
    fs.copyFileSync(sourcefile , destinationfile);
    fs.unlinkSync(sourcefile);        

}

function sortFile(file){
    let extensions = getextensions(file);
    checkextensionsFolderName(extensions);
    let extensionFolderName = checkextensionsFolderName(extensions);
    movefile(file , extensionFolderName);    
}