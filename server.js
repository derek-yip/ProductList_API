const express = require('express')
const app = express()

require('dotenv').config()

app.use(express.json())


const productRouter = require('./routes/product.router')

const PORT = process.env.PORT

app.listen(process.env.PORT, ()=> {
    console.log(`server is running on ${process.env.PORT}`);
})

app.listen(process.env.MYSQLPORT, ()=> {
    console.log(`server is running on ${process.env.MYSQLPORT}`);
})

app.use('/api/product', productRouter)


