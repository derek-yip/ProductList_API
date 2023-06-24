const express = require('express')
const app = express()
const serverless = require("serverless-http")
const ProductRouter = express.Router();
// const ProductRouter = require('../routes/product.router')

// require('dotenv').config()

// app.use(express.json())


// const PORT = process.env.PORT

// app.listen(PORT, ()=> {
//     console.log(`server is running on ${PORT}`);
// })

// app.listen(process.env.MYSQLPORT, ()=> {
//     console.log(`server is running on ${process.env.MYSQLPORT}`);
// })
ProductRouter.get('/', async(req,res)=>{
    try {
        res.status = 200
        res.json({'msg': 'Sucessfully Connected product'})
    } catch (error) {
        res.status = 400
        res.json({'msg': 'error'})
    }
})
module.exports.handler = serverless(app);
module.exports = ProductRouter
