import { error } from 'console'
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
// @ts-ignore
import useRoutes from './routes/user.routes.js'
import authRoutes from './routes/auth.route.js'
import bodyParser from 'body-parser'


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

app.use(express.json());
app.use(express.urlencoded({ extended: true}))


app.listen(3000, ()=>{
    console.log('server started on port 3000')
})


// app test
app.use('/api/user', useRoutes)
app.use('/api/auth', authRoutes)

// a middleware

app.use((err, req, res, next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error'
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})