
const matrizUtil = require("./matriz/matrizUtil");
const Calculo = require("./calculadora");
const express = require("express");
const app = express();
const Port = 8080;

app.listen(Port, function(){
    console.log("app rodando na porta " + Port);
})

app.get("/ola", function(req, res){
    res.send("Ola Mundo!");
})

//npm install --> usar para instalar as requisições, usar no terminal powershell

//const A = [
//            [1,2],
//            [3,4],
//            [5,6],
//        ];

//matrizUtil.transporMatriz(A);
//console.log(Calculo.Pi)
//console.log(Calculo.multi(Calculo.Pi, 4))

//'npm' ver se express js esta instalado