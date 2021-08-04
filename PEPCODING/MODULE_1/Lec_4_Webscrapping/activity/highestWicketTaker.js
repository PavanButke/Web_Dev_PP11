let matchLink ="https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard"
const request = require("request");
//high order funn
const fs =require("fs");
//filesystem
const cheerio = require("cheerio");

request(matchLink , cb);
//hof requires 2 parameters one is inserting data and other is callback funn
    function cb(error ,response , data){
// callback funn requirs atleast one parameter from mentioned three
        //fs.writeFileSync("./match.html ", data);
    
            getHighestWicketTaker(data);
    }

let htmlKaData = fs.readFileSync("./match.html" , "utf8");



let myDocument = cheerio.load(htmlKaData);

function getHighestWicketTaker(data){
    let myDocument = cheerio.load(data);

let matchInfo = myDocument(".status-text span").text();

//console.log(matchInfo);

let bothBowlingTable = myDocument(".table.bowler");
fs.writeFileSync("./bowlingTable.html", bothBowlingTable +"");
//console.log(bothBowlingTable);

let highestWicketTakerName;
let highestWicketTaken;
let economyOfhighestWicketTaker;    
for(let i=0 ; i<bothBowlingTable.length ;i++){
    let bowlingTable= myDocument(bothBowlingTable[i]);
    let allTableRow = bowlingTable.find("tbody tr");

    for(let j=0 ; j <allTableRow.length ;j++  ){
        let allTds = myDocument(allTableRow[j]).find("td");
        if(i==0 && j==0){
        highestWicketTakerName = myDocument(allTds[0]).find("a").text();
        highestWicketTaken = myDocument(allTds[4]).text();
        economyOfhighestWicketTaker = myDocument(allTds[5]).text();

        }
        else{
            let currentWickets = myDocument(allTds[4]).text();
            let currentEconomy= myDocument(allTds[5]).text();            
            if(currentWickets >= highestWicketTaken){
               
        highestWicketTakerName = myDocument(allTds[0]).find("a").text();
        highestWicketTaken = currentWickets;
        economyOfhighestWicketTaker = myDocument(allTds[5]).text();

            }else if(currentWickets== highestWicketTakerName && currentEconomy > economyOfhighestWicketTaker){
                highestWicketTakerName = myDocument(allTds[0]).find("a").text();
                highestWicketTaken = currentWickets;
                 economyOfhighestWicketTaker = myDocument(allTds[5]).text();


            }

        
        }
     
    }
}



    console.log("Name of Highest Wicket Taker="  + highestWicketTakerName);
    console.log("highest wicket took="  + highestWicketTaken);
    console.log("economy of highest wicket taken="  + economyOfhighestWicketTaker);

}