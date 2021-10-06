var str = "get busy living or get busy dying.";
var newstr = str.split(" "), result;
var result = "";

for(i=0;i<newstr.length;i++){
    if(i%2 !== 0){            
        result += newstr[i].split("").join("abc");
        result += ' '; 
    } else {              
        result += newstr[i];
        result += ' ';
    }
}