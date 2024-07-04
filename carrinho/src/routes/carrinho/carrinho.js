const express = require("express");
const route_carrinho = express.Router();
const data = require("../../database/config.js");

route_carrinho.get("/listar",(req,res)=>{
    data.query("Select * from carrinho",(error, dados)=>{
        if(error){
            return res.status(500).send9({msg:"Error ao carregar os dados"});
        }
        res.status(200).send({msg:"OK",payload:dados});
    });
});

module.exports = route_carrinho;