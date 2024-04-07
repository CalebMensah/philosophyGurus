import { error } from 'console'
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()



// @ts-ignore
mongoose.connect(process.env.MONGO)
.then(
    ()=>{console.log('Database connected')}
).catch(error =>{
    console.log(error)
})




//create the server
const app = express()

app.listen(3000, ()=>{
    console.log('server started on port 3000')
})




