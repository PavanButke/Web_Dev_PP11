let obj = {
    "Full Name":"Steve Rogers",
    place:"Queens",
    movies:["captain america" , "winter soldier" , {
        bestie : "bucky",
        nickname:"wintersoldier",
        partner : "falcon",
        weaknes : ["brainwash"]
    }]
}


console.log(obj.movies[2].weaknes[0].substring(5,9))