const { getFilesData, applySFlag, applyBFlag, applyNFlag } = require("./utility");

let content=process.argv.slice(2);

const flags= [];
const files= [];

for(let i=0 ; i< content.length ; i++){
  if(content[i].startsWith("-")){
    flags.push(contenst[i]);
  }
  else{
    files.push(content[i]);
  }
}

let filesData = getFilesData(files);

if(flags.includes("-s")){

  filesData= applySFlag(filesData);
}
if(flags.includes("-b") && flags.includes("-n")){

  if(flags.indexOf("-b")< flags.indexOf("-n")){
    filesData= applyBFlag(filesData);
  }
  else{
    filesData = applyNFlag(filesData);
  }
}
else if(flags.includes("-b")){
      
        filesData=applyBFlag(filesData);
}
else if(flags.includes("-n")){

    filesData=applyNFlag(filesData);
}

console.log(filesData);