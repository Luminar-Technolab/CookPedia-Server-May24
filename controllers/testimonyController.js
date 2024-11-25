const testimonials = require('../models/testimonyModel')

//add testimonials
exports.addTestimonyController = async (req,res)=>{
    console.log("Inside addTestimonyController");
    const {name,email,message} = req.body
    try{
        const newMessage =  new testimonials({
            name,email,message
        })
        await newMessage.save()
        res.status(200).json(newMessage)
    }catch(err){
        res.status(401).json(err)
    }
}

//get all testimony
exports.getAllTestimonyController = async (req,res)=>{
    console.log("Inside getAllTestimonyController");
    try{
        const allTestimony = await testimonials.find()
        res.status(200).json(allTestimony)
    }catch(err){
        res.status(401).json(err)
    }    
}

//status update
exports.updateStatusTestimonyController = async (req,res)=>{
    console.log("Inside updateStatusTestimonyController");
    const {id} = req.params
    const status = req.query.status
    try{
        const exisitingTestimony = await testimonials.findById({_id:id})
        exisitingTestimony.status = status
        await exisitingTestimony.save()
        res.status(200).json(exisitingTestimony)
    }catch(err){
        res.status(401).json(err)
    } 
}