const fs=require("fs"); // ACCESSING    file system module

let txt = fs.readFileSync("./Doubt.txt");
console.log(txt +" ");

fs.writeFileSync("./AV.png" ,"C:\Users\Raj\Downloads\.png");
fs.writeFileSync("./\Users\Raj\Downloads\.jpeg" ,"Hello World.txt");