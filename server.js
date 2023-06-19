const express = require('express')
const app = express()

require('dotenv').config()

app.use(express.json())

const productRouter = require('./routes/product.router')

const PORT = process.env.PORT

app.listen(PORT, ()=> {
    console.log(`server is running on ${PORT}`);
})

app.listen(process.env.MYSQLPORT, ()=> {
    console.log(`server is running on ${process.env.MYSQLPORT}`);
})
app.get('', async(req,res)=>{
    try {
        res.status = 200
        res.json({msg: 'Sucessfully Connected'})
    } catch (error) {
        res.status = 400
        res.json({msg: error})
    }
})
app.use('/api/product', productRouter)


