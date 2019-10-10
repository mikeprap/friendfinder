
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
    app.post("/api/friends", function(req, res){

    
        var newPerson = req.body;
    
        
        for(var i = 0; i < newPerson.scores.length; i++) {
            newPerson.scores[i] = parseInt(newPerson.scores[i]);
          }
    
        console.log(newPerson.scores);
    
       
        
       var bestFriendIndex = 0;
       
       var closestDifference = 1000; 
      
    
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
