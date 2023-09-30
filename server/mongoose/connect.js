const mongoose = require('mongoose');
const mongoURL = "mongodb+srv://tewaridivyanshu17:Ek3Qjq5XV57hp8r7@cluster0.uhrmrj3.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology: true, 
})
mongoose.connection.on('connected',()=>{
    console.log("connected to mongoose")
})
mongoose.connection.on('error',(err)=>{
    console.log("connection failed")
})