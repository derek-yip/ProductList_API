const express = require("express")
const router = express.Router()
const db = require('../database')

router.get("/", async(req,res)=>{
    // const client = await db.connect();
    try {
        const products = await db.promise().query("SELECT * FROM Product")
        // const products = await client.sql`SELECT * FROM product;`;
        res.status = 200
        res.json({productlist: products[0]})
    } catch (error) {
        res.status = 400
        res.json({msg: error})
    }
})

router.get("/:id", async(req,res)=>{
    try {
        // const products = await sql`SELECT * FROM product;`;
        const products = await db.promise().query(`SELECT * from Product where id = ${req.params.id}`)
        res.status = 200
        res.json(products)
    } catch (error) {
        res.status = 400
        res.json({msg: error})
    }
})

module.exports = router