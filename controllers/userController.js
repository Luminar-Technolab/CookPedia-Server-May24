const users = require('../models/userModel')
const bcrypt = require('bcrypt')

//add user / register
exports.registerController = async (req,res)=>{
    console.log("Inside registerController");
    const {username,email,password} = req.body

    try{
        const exisitingUser = await users.findOne({email})
        if(exisitingUser){
            res.status(406).json("User Already exist!!! Please Login...")
        }else{
            const encryptedPassword = await bcrypt.hash(password,10)
            const newUser = new users({
                username,email,password:encryptedPassword,profilePic:""
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }catch(err){
        res.status(401).json(err)
    }
}