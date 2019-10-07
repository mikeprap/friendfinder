var express = require("express");

var app = express();

var PORT = 3000;

app.use(express.urlencoded({estended: true}));
app.use(express.jason());

app.use(express.static("public"));

require("./app/routing/apiRoutes");
require("./app/routing/htmlRoutes");



app.listen(PORT, function(){
    console.log("port at: " + PORT);
    

})