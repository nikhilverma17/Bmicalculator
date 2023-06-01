const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res)
{
res.sendFile(__dirname + "/index.html");
});
app.post("/",function(req,res){
    var h=parseFloat(req.body.height1);
    var w=parseFloat(req.body.weight1);
    
    var result=(w/h/h)*10000;
    // [weight (kg) / height (cm) / height (cm)] x 10,000
    res.send("Result is " + result);
});
app.listen(3000,function(){
    console.log("server is running")
});
