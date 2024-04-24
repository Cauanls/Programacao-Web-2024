//Usar npm init
//Usar npm install express@4.18.2

const express = require('express');
const app = express();
const mustacheExpress = require("mustache-express");

app.engine("html", mustacheExpress())
app.set("view engine", "html")
app.set("views", __dirname + "/views")


app.get("/", function(req, res){
    res.render("pagina.html")
})

app.get("/contato", function(req, res){
    res.render("contato.html")
})
const PORT = 8080;
app.listen(PORT, function(){
    console.log("App rodando na porta ", PORT)
})