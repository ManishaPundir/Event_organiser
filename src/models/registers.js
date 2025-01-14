const mongoose=require("mongoose");
const employeeSchema= new mongoose.Schema({
firstname: {
type: String,
require: true
},
lastname: {
    type: String,
    require: true
},

email: {
    type: String,
    require: true,
    unique: true
 },
gender: {
    type: String,
    require: true
},

phone: {
    type: Number,
    require: true,
    unique: true
    },

age: {
    type: String,
    require: true
},    

password:{
 type: String,
 require: true
},

 confirmpassword: {
 type: String,
 require: true
     },    

})


//we need to create collection
const Register= new mongoose.model("Register",employeeSchema);
module.exports=Register;