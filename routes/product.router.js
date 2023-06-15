const express = require("express")
const router = express.Router()
const postgre = require('../database')
const {db} = require('@vercel/postgres');

router.get("/", async(req,res)=>{
    const client = await db.connect();
    try {
        // const products = await sql`SELECT * FROM product;`;
        //const products = await postgre.query("select * from product")
        const products = await client.sql`SELECT * FROM product;`;
        res.json({productlist: 'products'})
    } catch (error) {
        res.json({msg: error.msg})
    }
})

router.get("/:id", async(req,res)=>{
    try {
        // const products = await sql`SELECT * FROM product;`;
        const products = await postgre.query(`select * from product where id = ${req.params.id}`)
        res.json(products.rows)
    } catch (error) {
        res.json({msg: error.msg})
    }
})

module.exports = router