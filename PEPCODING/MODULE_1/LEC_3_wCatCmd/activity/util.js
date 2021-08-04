

let fs= require("fs");

function getFilesData(files){
    let filesData="";
    for(let i=0 ; i<files.length ; i++){
        if(!fs.existsSync(files[i])){
            Console.log("Some file or dat is missing or mistyped !");
            return;

        }
        if(i=file.length-1){
            filesData+=fs.readFileSync(files[i]);
        }
        else{
            filesData+=readFileSync(files[i])+"\r\n";

        }
    }
    return filesData ;

    function applySFlag(f1LKaData){
        let emptyIncluded= false;
        let removedSpaces= [];
        let splittedData= f1KaData.split("\r\n");
        
    
        for(let i=0 ; i<splittedData.length ; i++){
            if(splittedData[i]== "" && emptyIncluded==false){
                removedSpaces.push(splittedData[i]);
                emptyIncluded = true;
            }
            else if(splittedData[i] != ""){
                removedSpaces.push(splittedData[i]);
                if(i < splittedData.length-2) emptyIncluded=false;
            }
        }
        let removedSpacesString = removedSpaces.join("\r\n");
      return removedSpacesString;
    
      
    
    }
    function applyBFlag(data){
        let count = 1;
        let splittedData = data.split("\r\n");
        for(let i=0 ; i<splittedData.length ; i++){
            if(splittedData[i] != ''){
                splittedData[i] = `${count}. ${splittedData[i]}`;
                // splittedData[i] = count+". "+splittedData[i];
                count++;
            }
        }
        // console.log(splittedData);
        let bFlaggedString = splittedData.join("\n");
        return bFlaggedString;
    }
    function applyNFlag(data){
        let count=1;
        let splittedData=data.split("\r\n");
        for(let i=0 ; i<splittedData.length ; i++){
            splittedData[i] = `${count}. ${splittedData[i]}`;
            count++;
    }
    // console.log(splittedData);
    let nFlaggedString = splittedData.join("\n");
    return nFlaggedString;
    }}
    
    module.exports.getFilesData =getFilesData ;
    module.exports.applySFlag = applySFlag ;
    module.exports.applyBFlag = applyBFlag ;
    module.exports.applyNFlag = applyNFlag;
     
    
