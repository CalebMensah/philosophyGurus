import mongoose from 'mongoose'

// sets the rules for what will be required to sign in
const UserSchema = new mongoose.Schema({
    username:{
        type: String, 
        required: true, 
        unique: true
    },
    email:{
        type: String, 
        required: true, 
    },
    password: {
        type: String,
        required: true,
    },
},
{timestamps: true}
)

// create model user
const User = mongoose.model('User',UserSchema)

export default User