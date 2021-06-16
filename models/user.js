import mongoose from 'mongoose';
const Schema=mongoose.Schema;

const userSchema=new Schema({
    username:{type:String,require:true},
    password:{type:String,require:true},
},{timestamps:true});

export default mongoose.model('User',userSchema,'users');