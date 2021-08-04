const fs= require("fs");

let f1KaData = fs.readFileSync("./f1.txt","utf8");
let f2KaData = fs.readFileSync("./f2.txt", "utf8");

function applyNFlag(data){
    let count=1;
    let splittedData=data.split("\r\n");
    for(let i=0 ; i<splittedData.length ; i++){
        splittedData[i] = `${count}. ${splittedData[i]}`;
        count++;
}
// console.log(splittedData);
let nFlaggedString = splittedData.join("\n");
return nFlaggedString;
}
console.log(applyNFlag(f1KaData));

