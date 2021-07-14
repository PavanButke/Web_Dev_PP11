let wikiLink= "https://en.wikipedia.org/wiki/Caste-related_violence_in_India";

const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const getAllAtro = require("./atrocities-execution")


 request( wikiLink, function(error , response ,data){

    processData(data)
 })

 function processData(html){
     let myDocument= cheerio.load(html);
     
     let atroTableLink=  "https://en.wikipedia.org/wiki/Caste-related_violence_in_India";
     

     
    getAllAtro(atroTableLink);

     
 }