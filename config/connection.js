const mongoose = require("mongoose")

const connectionString = process.env.DB_CONNECTION

mongoose.connect(connectionString).then(res=>{
    console.log("Database connected sucessfully with Server");
}).catch(err=>{
    console.log("Databse connection failed!!!");
    console.log(err);
})