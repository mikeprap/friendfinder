
var friendArray = require("../data/friends");





module.exports = function(app){

        
    app.get("/api/friends", function(req, res){
        res.json(friendArray)

    })

    
    app.post("/api/friends", function(req, res){

        var scores = newPerson.scores
        var newPerson = req.body;
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
        
        
        
        for (i = 0; i < friendArray.length; i++){
             
            var totalDifference = 0;
            
            
            for (j = 0; j < newPerson.scores.length; j++){
               
                var difference = Math.abs(friendArray[i].scores[j] - newPerson.scores[j]);
                totalDifference += difference;
            }
            
            if (totalDifference < closestDifference){
               
                bestFriendIndex = i;
                
                closestDifference = totalDifference;
            }
        }
        
       
        res.json(friendArray[bestFriendIndex]);
        
        
        friendArray.push(newPerson);
        
    })
    


}
