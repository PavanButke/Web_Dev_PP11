const fs = require("fs");

let givenPromise= fs.promises.readFile("./f1.txt",'utf8');

console.log(givenPromise);
givenPromise.then(function(data){


console.log("I'm inside successful callback");
console.log(givenPromise);
console.log(data+"");
})

givenPromise.catch(function (error){

    console.log("I'm Inside failure callback")
    console.log(error);
})
