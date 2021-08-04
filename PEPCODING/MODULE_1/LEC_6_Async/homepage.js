let matchLink = "https://www.espncricinfo.com/series/ipl-2021-1249214";

const request= require("request");
const cheerio = require("cheerio");
const getAllMatches = require("./allMatches");

request(matchLink , function(error , response , data)
{
    processData(data);
})
function processData(html){
    let myDocument = cheerio.load(html);
    let aTag = myDocument(".widget-items.cta-link a");
    //console.log(aTag);

    let allMatchTable = "https://www.espncricinfo.com" + aTag["0"].attribs.href;
    //console.log(allMatchTable);
    getAllMatches(allMatchTable);
}