const jwt = require('jsonwebtoken')

const jwtMiddleware = (req,res,next)=>{
    console.log("Inside jwtMiddleware");
    //get token from req header "Authorization key"
    console.log(req.headers);
    
    const token = req.headers["authorization"].split(" ")[1]
    console.log(token);
    //step to verfiy token
    if(token){
        try{
            const jwtResponse = jwt.verify(token,process.env.JWT_PASSWORD)
            console.log(jwtResponse);
            req.userId = jwtResponse.userId
            next()
        }catch{
            res.status(401).json("Please login to proceed the Step!!! Authentication failed... ")
        }
    }else{
        res.status(406).json("Authentication failed... Token Missing!!!")
    }
    
}

module.exports = jwtMiddleware