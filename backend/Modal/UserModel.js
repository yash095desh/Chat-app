import mongoose from "mongoose";

const UserShema = mongoose.Schema({
    name : {
        type : String,
        required:true
    },
    email :{
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    },
    avatar:{
        type : String,
        default : 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
    }
})

const User = mongoose.model('User',UserShema)
export default User