
var friendArray = require("../data/friends");





module.exports = function(app){

        
    app.get("/api/friends", function(req, res){
        res.json(friendArray)

    })

    
    app.post("/api/friends", function(req, res){
        totalDifference = 0;
        
        var newPerson = req.body;
        var scores = newPerson.scores;
        var name = newPerson.name;
        var photo = newPerson.photo;
        var newFriend = {
            name: "",
            photo: "",
            friends: 50
        };
        
       var score = scores.map(function (item) {
           return parseInt(item, 10);
       })
    
       newPerson = {
           name: name,
           photo: photo,
           scores: score,
       }
        
      
    
        // Loop through the friends array
        
        var tot = score.reduced((a, b) => a + b, 0)
        
        for (i = 0; i < friendArray.length; i++){
             
            var totalDifference = 0;

            var bestfreind = friendArray[i].scores.reduce((a, b) => a + b, 0);

            totalDifference += Math.abs(tot - bestfreind)
            if (totalDifference <= newFriend.friends){
                newFriend.name = friendArray[i].name;
                newFriend.photo = friendArray[i].photo;
                newFriend.friends = totalDifference;
            }
            
            
            
        }
        
       friendArray.push(newPerson);
        res.json(newFriend);
        
    })
    


}
