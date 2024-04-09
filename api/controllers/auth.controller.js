import User from "../model/Usermodel.js"
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js"

// authenticating the user

export const signup =async (req, res, next)=>{
  console.log(req.body)


    const { username , email, password } = req.body

    if(!username || !email || !password || username==="" || email ===""|| password===""){
        next(errorHandler(400, "All  fields are required"))
}

// encrypting the password so that people wont see it in the database
const hashPassword = bcryptjs.hashSync(password,10)

const newUser = new User({
    username , 
    email,  
    password: hashPassword
})

// saving the user in the database
try{
    await newUser.save()
res.json("SignUp successful")
}catch(error){
 next(error)
}



}

