const express = require("express");
const app = express();
const PORT = 8080;
const vnp = require("./nmrPrimo"); 

app.get('/', function(req, res){
    res.send("pagina inicial");
})

app.listen(PORT, function(){
    console.log("Ola" + PORT);
})

app.get("/ola", function(req, res){
    res.send("Ola Mundo!");
})

app.get("/ola/:nome", function(req, res){
    let n = req.params.nome;
    res.send("Ola " + n + "!");
})

app.get("/nmrPrimo/:numero", function(req, res){
    let n = req.params.numero;
    res.send(vnp.verificarNumeroPrimo(n));
})