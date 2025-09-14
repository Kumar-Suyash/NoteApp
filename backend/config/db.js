const mongoose = require('mongoose')

exports.dbconnection=async()=>{
    await mongoose.connect(process.env.MONGODB_url)
    console.log("database connected")
}