let fs = require("fs");


let leaderboard = fs.writeFileSync('./atroJson.json')


console.table(leaderboard);