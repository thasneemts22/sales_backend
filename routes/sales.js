const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/",(req,res)=>{

const {customer_id,voucher_date,subtotal,tax,discount,total,items}=req.body;

db.query(
"INSERT INTO sales(customer_id,voucher_date,subtotal,tax,discount,total) VALUES(?,?,?,?,?,?)",
[customer_id,voucher_date,subtotal,tax,discount,total],
(err,result)=>{

if(err) return res.status(500).json(err);

const saleId = result.insertId;

items.forEach(item=>{

db.query(
"INSERT INTO sales_items(sale_id,item_id,qty,price,net_amount) VALUES(?,?,?,?,?)",
[saleId,item.item_id,item.qty,item.price,item.net_amount]
);

});

res.json({message:"Sale saved"});
});

});

router.get("/",(req,res)=>{

const sql = `
SELECT s.id,c.name,s.total,s.voucher_date
FROM sales s
JOIN customers c ON s.customer_id = c.id
`;

db.query(sql,(err,result)=>{
if(err) return res.status(500).json(err);
res.json(result);
});

});

module.exports=router;