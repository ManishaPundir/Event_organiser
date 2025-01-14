const mongoose=require("mongoose");

//const uri = 'mongodb://localhost:27017/MongoDB';
//mongodb+srv://manisharynr:dLW96RQxdi1lWpe8@eventplanner.jinv2.mongodb.net/?retryWrites=true&w=majority&appName=eventplanner
mongoose.connect("mongodb+srv://manisharynr:dLW96RQxdi1lWpe8@eventplanner.jinv2.mongodb.net/?retryWrites=true&w=majority&appName=eventplanner",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
console.log(`connection successful  `) ;   
}).catch((e)=>{
console.log(`connection unsuccessful`, e.message) ;   
})