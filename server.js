const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
})


app.post("/bmicalculator", function(req, res){
    let wgt = Number(req.body.wgt);
    let hgt = Number(req.body.hgt);

    let result = wgt/hgt;
    result = result.toFixed(2);

    res.send("Your BMI is "+ result);
})



app.listen("3000", function(){
    console.log("server has started");
})