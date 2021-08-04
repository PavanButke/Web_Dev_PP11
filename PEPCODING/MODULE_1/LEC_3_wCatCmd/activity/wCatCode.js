const{getFilesData ,applySFlag , applyBFlag , applyNFlag}=require("./utility.js");
let contents= process.argv.slice(2);

const flags=[];
const files=[];
for(let i=0 ; i<contents.length ;i++){
    if(contents[i].startsWith("-")){
   
    flags.push(contents[i]);
    }
    else{
    files.push(contents[i]);

    }


}


let filesData = getFilesData(files);
if(flags.includes("-s")){
    if (flags.includes("-s")) {
        // filesData updated if s flag is present !
        filesData = applySFlag(filesData);
      }
if(flags.includes("-b") && flags.includes("-n")){
    if(flags.indexOf("-b")< flags.indexOf("-n")){
       filesData= applyBFlag;
    }else{
        filesData= applyNFlag;

    }

}
else if (flags.includes("-b")) {
    // apply b flag
    filesData = applyBFlag(filesData);
  }
  // only -n flag is present
  else if (flags.includes("-n")) {
    // apply n flag
    filesData = applyNFlag(filesData);
  }
}  
  console.log(filesData);
