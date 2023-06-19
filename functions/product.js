// const express = require('express')
// const app = express()

require('dotenv').config()

// app.use(express.json())
const db = require('../database')
// const productRouter = require('../routes/product.router')

// const PORT = process.env.PORT

// app.listen(PORT, ()=> {
//     console.log(`server is running on ${PORT}`);
// })

// app.listen(process.env.MYSQLPORT, ()=> {
//     console.log(`server is running on ${process.env.MYSQLPORT}`);
// })
exports.handler = async (req, res) =>
{
    const { product_id = "undefined" } = req.queryStringParameters;
    const products = await db.promise().query(`SELECT * FROM Product`)
    
    try {
        return {
            statusCode: 200,
            body: JSON.stringify({productlist:products[0]})
          };
        // res.status = 200
        // res.json({msg: 'Sucessfully Connected'})
    } catch (error) {
        return{
            statusCode:400,
            body :JSON.stringify({msg: error})
        }
        // res.status = 400
        // res.json({msg: error})
    }
}

// app.use('/api/product', productRouter)
