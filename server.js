

var express =require("express");  //lib-----Node Module
var app=express();  // will create app object from express package

var onAboutUs=function(req, res){
    res.send("Chief Mentor :Ravi Tambade");
};
var onDefault=function(req, res){
    res.send("<h1>Kshitija</h1>"+
              "<hr/>"+
              "<h2> Rushi Jagtap <h2>"+
              "<ol>"+
                    " <li>full stack developer</li>"+
                    " <li>Workshops</li>"+
                    " <li>Online Course</li>"+
                    " <li>Corporate Training</li>"+
             "</ol>");
};
app.get("/",onDefault);  // Request handler functions are registered
app.get("/aboutus",onAboutUs);  // Request handler functions are registered
var server=app.listen(8081);
console.log("Server is running on port 8081");
