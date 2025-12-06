const mongoose =require('mongoose')
//ge tconnection string from .env file
const connectionString=process.env.ATLASDBCONNECTION 
mongoose.connect(connectionString).then(res=>{
    console.log("mongodb connection successfull");
    

}).catch(err=>{
    console.log('database connection failed');
    console.log(err)
    
})