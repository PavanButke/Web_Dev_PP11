const { contains } = require("cheerio");

let a =[2,4,8,13,21,22];

function isEven(x)
{
    return x%2 ==0; 
}

let filteredArr = a.filter(isEven);

console.log(a);
console.log(filteredArr);