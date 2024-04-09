import User from "../model/Usermodel.js"
import bcryptjs from 'bcryptjs'

// authenticating the user

export const signup =async (req, res)=>{
  console.log(req.body)


    const { username , email, password } = req.body

    if(!username || !email || !password || username==="" || email ===""|| password===""){
        return res.status(400).json({message: "All fields are required"})
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
 res.status(500).json({message: error.message})
}



}

