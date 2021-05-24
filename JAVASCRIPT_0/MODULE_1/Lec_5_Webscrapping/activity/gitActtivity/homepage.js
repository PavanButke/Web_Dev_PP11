const cheerio = require("cheerio");
const request = require("request");
const fs = require("fs");
const challengeProjects = require("./challengeProjects");

request("https://github.com/topics" , function(err , res ,data){
   // console.log(data);
    processData(data);

}) 


function processData(html){
   let myDocument= cheerio.load(html);
    let allTopicsDiv = myDocument(".topic-box");
   
    
    //console.log(allTopicsDiv);
    for(let i=0 ; i <allTopicsDiv.length ; i++){
    let allATag = myDocument(allTopicsDiv[i]).find("a");
    let topicLink ="https://github.com/topics"+ allATag.attr("href");
    let topicName = allATag.find(".f3").text().split("\n")[1].trim();
    let topicFolderPath =`./Topics/${topicName}`;
    fs.mkdirSync(topicFolderPath);
    challengeProjects(topicName , topicLink);
}
//console.log(githubTopics);
}
