let a=1;
while(a<=20){
    if(a%3==0 && a%5==0){
        console.log(a,"Fizz_Buzz");
        
    }
   
    else
    if(a%5==0){
        console.log(a,"Buzz");
    
    }
    else
    if(a%3==0){
        console.log(a,"Fizz");
    
    }
    a++;
}