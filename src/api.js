const express = require('express')
const app = express()
const serverless = require("serverless-http")
const router = express.Router();
const ProductRouter = require('./products')

// require('dotenv').config()

// app.use(express.json())


// const PORT = process.env.PORT

// app.listen(PORT, ()=> {
//     console.log(`server is running on ${PORT}`);
// })

// app.listen(process.env.MYSQLPORT, ()=> {
//     console.log(`server is running on ${process.env.MYSQLPORT}`);
// })
router.get('/', async(req,res)=>{
    try {
        res.status = 200
        res.json({'msg': 'Sucessfully Connected'})
    } catch (error) {
        res.status = 400
        res.json({'msg': 'error'})
    }
})
app.use('/api/', router);
app.use('/api/product/', ProductRouter);

module.exports.handler = serverless(app);
