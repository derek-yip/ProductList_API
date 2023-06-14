const express = require('express')
const app = express()

require('dotenv').config()

app.use(express.json())


const productRouter = require('./routes/product.router')

const PORT = process.env.PORT

app.listen(PORT, ()=> {
    console.log(`server is running on ${PORT}`);
})
app.use('product-list-api-pink.vercel.app/api/product', productRouter)


