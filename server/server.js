const express = require('express')

const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config();
// DB
const connectDB = require('./config/db')
const { readdirSync } = require('fs')
// Routes
// const authRoute = require('./Routes/auth')
// const productRoute = require('./Routes/product')


// app
const app = express();

// db
connectDB();

// middleware
app.use(morgan("dev"))
app.use(bodyParser.json({ limit: '20mb' }))
// app.use(cors())
app.use(cors());

// Routes
// 1
// app.get('/roitai',(req,res)=>{
//     res.send('Hello Routes')
// })
// 2
// app.use('/api', authRoute)
// app.use('/api', productRoute)

//3 auto
readdirSync('./Routes')
    .map((r) => app.use('/api', require("./Routes/" + r)));

// Run server
const port = 5000
app.listen(port, () => console.log('Server is running on port ' + port))

