const fs= require("fs");

let f1KaData = fs.readFileSync("./f1.txt","utf8");
let f2KaData = fs.readFileSync("./f2.txt", "utf8");

function applySFlag(f1LKaData){
    let emptyIncluded= false;
    let removedSpaces= [];

    let splittedData= f1KaData.split("\r\n");
    

    for(let i=0 ; i<splittedData.length ; i++){
        if(splittedData[i]== "" && emptyIncluded==false){
            removedSpaces.push(splittedData[i]);
            emptyIncluded = true;
        }
        else if(splittedData[i] != ""){
            removedSpaces.push(splittedData[i]);
            if(i < splittedData.length-2) emptyIncluded=false;
        }
    }
    let removedSpacesString = removedSpaces.join("\r\n");
  return removedSpacesString;

  

}
let removedSpacesString = applySFlag(f1KaData);
   console.log(removedSpacesString); 
