const fs= require("fs");

let f1KaData = fs.readFileSync("./f1.txt","utf8");
let f2KaData = fs.readFileSync("./f2.txt", "utf8");

function applyBFlag(f1KaData){
    let count = 1;
    let splittedData = data.split("\r\n");
    for(let i=0 ; i<splittedData.length ; i++){
        if(splittedData[i] != ''){
            splittedData[i] = `${count}. ${splittedData[i]}`;
            // splittedData[i] = count+". "+splittedData[i];
            count++;
        }
    }
    // console.log(splittedData);
    let bFlaggedString = splittedData.join("\n");
    return bFlaggedString;
}
let bFlaggedString = applyBFlag(f1KaData);
console.log(bFlaggedString);
