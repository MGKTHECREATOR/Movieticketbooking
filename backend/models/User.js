import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    _id: {typr:String, required:true},
    name: {typr:String, required:true},
    email: {typr:String, required:true},
    image: {typr:String, required:true}

})

const User = mongoose.model('User',userSchema)

export default User;