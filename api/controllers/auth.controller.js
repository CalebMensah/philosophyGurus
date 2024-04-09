import User from "../model/Usermodel.js"
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js"
import jwt  from "jsonwebtoken"

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


// signing in the user

export const signin = async (res, req, next) =>{
    console.log(req.body)

    const { email, password, } = req.body;

    if(!email || !password || email==='' || password===''){
         next(errorHandler(400, 'All fields are required'))
    }

    try{
      const validateUser = await User.findOne({email});
      if(!validateUser){
        return next(errorHandler(400, 'user not found'))
      }
      const validPassword = bcryptjs.compareSync(password,validateUser.password)
      if(!validPassword){
        return next(errorHandler(400, 'Invalid password'))
      }
      const token = jwt.sign({  id:validateUser._id}, process.env.JWT_SECRET)

      const{password: pass, ...rest} = validateUser._doc

      res.status(200).cookie('access_token', token, {
        httpOnly:true}).json(rest)

    }catch(error){
        next(error)
    }
}

