const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/",(req,res)=>{

const {name,phone,email}=req.body;

db.query(
"INSERT INTO customers(name,phone,email) VALUES(?,?,?)",
[name,phone,email],
(err,result)=>{
if(err) return res.status(500).json(err);
res.json({message:"Customer added"});
});

});

router.get("/",(req,res)=>{

db.query("SELECT * FROM customers",(err,result)=>{
if(err) return res.status(500).json(err);
res.json(result);
});

});

module.exports=router;