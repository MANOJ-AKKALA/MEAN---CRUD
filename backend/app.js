const express = require("express");
const app = express()
const mongoose = require('mongoose');
const cors = require('cors')

const router = require('./Routers/routes')
app.use(express.json())
//app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use(router)





mongoose.connect('mongodb://127.0.0.1:27017/Monday', 
    {useNewUrlParser:true}).then(()=>{
        console.log("DB Connected")
    }).catch((e)=>{
        console.log("Not Connected")
    })
app.listen(9000,()=>{
    console.log("Server Connected at 9000 ")
})

