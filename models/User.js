const mongoose=require('mongoose');



const Schema=mongoose.Schema;
const UserSchema=new Schema({
    id:Number,
    first:String,
    last:String,
    balance:Number,
    mail:String


});

//Model
const User=mongoose.model('User',UserSchema);

module.exports=User;