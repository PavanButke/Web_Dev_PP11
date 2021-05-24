
const cheerio = require("cheerio");
const request = require("request");
const fs = require("fs");

function challengeProjects(topicName ,topicLink){
request(topicLink, function(err , res ,data){

console.log("hello");
processData(topicName  , data);

   })
}

function processData(topicName ,data){
    let myDocument = cheerio.load(data);   
    let  allTopicTag = myDocument(".f3 color-text-secondary");

    let topicFolderPath =`./Topics/${topicName}`; 
    let projectsFile= [];
    //console.log(allTopicName);
    for(let i=0 ; i<10 ; i++){
    let projectH1Tag = allTopicTag[i];
    let bothATag = myDocument(projectH1Tag).find("a");
    let projectATag = myDocument(bothATag[1]);
    let projectName = projectATag.text().split("\n")[1];
    let projectLink = "https://github.com"+projectATag.attr("href"); 
    projectsFile.push({projectName , projectLink});
    //console.log(topicName);

    
    
    }
    
    fs.writeFileSync(`${topicFolderPath}/project.json`, JSON.stringify(projectsFile));


}
module.exports=challengeProjects;