const mongoose=require('mongoose')

const UserDetailsSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const UserModel=mongoose.model('employees',UserDetailsSchema)
module.exports=UserModel