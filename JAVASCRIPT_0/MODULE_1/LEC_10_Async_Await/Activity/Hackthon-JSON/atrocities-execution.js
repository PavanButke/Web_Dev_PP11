const cheerio = require("cheerio");
const request = require("request");
const fs = require("fs");





let atroBoard=[];

let count=0;

function getAllAtro(atroTableLink)
{
    console.log("Sending Request");
    count++;
    request(atroTableLink,cb);
}

function cb(erroe, response,data){
    console.log("Recieved Data ");
    count--;
    parseData(data);
    if(count ==0)
    {
        //console.table(atroBoard);
    }

}
function parseData(html)
{
    let tab= cheerio.load(html);
    let bothTables= tab(".vector-body ");
    fs.writeFileSync("./atrocities.html" , bothTables+"");
    for(let i=0 ; i <bothTables.length ;i++)
    {
        let incident= tab(bothTables[i+""]);
        let century = incident.find("h2").text();
        //console.log(atroBoard);
       

     
        
        let table1= incident.find('table.wikitable');
        let allTrs= table1.find("tbody tr");
        for(let j=0 ; j< allTrs.length-1 ; j++)
        {
        let allTds= tab(allTrs[j]).find("td");
        if(allTds.length > 1)
        {
            let incident_year= tab(allTds["0"]).text().trim();
            let incident_event = tab(allTds["1"]).text().trim();
            let state = tab(allTds["2"]).text().trim();
            let description= tab(allTds["3"]).text().trim();

            processAtroBoard(incident_year, incident_event,state, description);
        
        }

     
    }

   console.log('Legislation alone does not address structural discrimination. The UN has an important role to play and must step up to the plate to help stop caste-based violence against women.');
}
}
function processAtroBoard(incident_year, incident_event,state, description)
{
    
    incident_year= Number(incident_year);
    
  
    
    let obj={
        Year : incident_year,
        Event : incident_event,
        State : state,
        Description : description,
    };
    atroBoard.push(obj);

    

    

    console.table(atroBoard);
    fs.writeFileSync(`./Atrocity_Data/project.json` ,JSON.stringify(atroBoard));

   
}
module.exports = getAllAtro ;