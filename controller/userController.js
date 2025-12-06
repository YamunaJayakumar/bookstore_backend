const users=require('../models/userModel')
//register api request
exports.registerController=async(req,res)=>{
    console.log('inside register controller');
    const{username,email,password}=req.body
    console.log(username,email,password)
    try{
        //check mail in model
        const exisitngUser=await users.findOne({email})
        if(exisitngUser){
            res.status(409).json("user already exist!! please login")
        }
        else{
            const newUser=new users({
                username,email,password
            })
            await newUser.save()
            res.status(200).json(newUser)
        }

    }catch(error){
        console.log(error);
        res.status(500).json(error)
        
    }
    
    
}