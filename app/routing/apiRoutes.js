var path = require("path")
var friendArray = require("../data/friends");





module.exports = function(app){

        // 
    app.get("/api/friends", function(req, res){
        res.json(friendArray)

    })

    app.post("/api/friends", function (req, res){
        var newPerson = req.body;
        
        for(var i = 0; i < newPerson.scores.length;i++){
            newPerson.scores[i] = parseInt(newPerson.scores[i]);
        }

        console.log(newPerson.scores);
        
    })


}