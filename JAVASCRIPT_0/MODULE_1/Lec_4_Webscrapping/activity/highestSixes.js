let matchLink ="https://www.espncricinfo.com/series/ipl-2021-1249214/chennai-super-kings-vs-rajasthan-royals-12th-match-1254069/full-scorecard";

const request = require("request");
const cheerio = require("cheerio");

request(matchLink , function(error , response , data){
    getHighestSixes(data);

})

function getHighestSixes(data){
    let highestSixes;
    let batsmanName;
    let strikeRate;

    let myDocument= cheerio.load(data);
    let bothBattingTable= myDocument(".table.batsman");
    //console.log(bothBattingTable);

    for(let i=0 ; i < bothBattingTable.length ;i++){
        let onebatsmanTable = myDocument(bothBattingTable[i]);
      
        let allTrs = onebatsmanTable.find("tbody tr");
        for(let j=0 ; j< allTrs.length ; j++){
            let allTds = myDocument(allTrs[j]).find("td");
            if(allTds.length >1){
                if(i==0 && j==0){
                    highestSixes = myDocument(allTds[6]).text(); 
                    batsmanName  = myDocument(allTds[0]).text();

                    strikeRate = myDocument(allTds[7]).text();
                   


                }
                else{
                    let currentSixes = myDocument(allTds[6]).text();
                    let currentStrikeRate = myDocument(allTds[7]).text();  
                    if(currentSixes > highestSixes || (currentSixes == highestSixes &&   currentStrikeRate > strikeRate)){
                        highestSixes = currentSixes; 
                        batsmanName  = myDocument(allTds[0]).text();

                        strikeRate = currentStrikeRate;

                    }

                }
            }
        }
        
    }
    console.log("BatsName =" +batsmanName);
    console.log("Sixes =" +highestSixes);
    console.log("StrikeRate=" + strikeRate);

}