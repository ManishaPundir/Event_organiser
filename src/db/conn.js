const mongoose=require("mongoose");

//const uri = 'mongodb://localhost:27017/MongoDB';
mongoose.connect("mongodb://localhost:27017/youtubeRegistration",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
console.log(`connection successful  `) ;   
}).catch((e)=>{
console.log(`connection unsuccessful`, e.message) ;   
})