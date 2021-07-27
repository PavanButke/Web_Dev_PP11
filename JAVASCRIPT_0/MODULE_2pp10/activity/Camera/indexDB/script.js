
let req = indexedDB.open("Notes", 1);

req.addEventListener("success" , function()
{
    console.log(1);
    let db = req.result ;

});

req.addEventListener("upgradeneeded", function(){
    console.log(2);

    let db = req.result;
    db.createObjectStore("csNotes",{keyPath:"cId"});
});

req.addEventListener("error", function(){
    console.log(db)
})